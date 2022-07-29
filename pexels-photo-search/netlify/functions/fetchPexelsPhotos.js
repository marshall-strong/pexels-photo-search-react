const axios = require("axios");

exports.handler = async (event, _context) => {
  try {
    // uses the query string parameters to construct the url for the API request
    // ex: `https://api.pexels.com/v1/curated/?page=1&per_page=10`
    // ex: `https://api.pexels.com/v1/search/?page=1&per_page=10&query=${userInput}`

    const baseUrl = `https://api.pexels.com/v1/`;
    const { endpoint, page, per_page, query } = event.queryStringParameters;

    const constructUrl = (baseUrl, endpoint, page, perPage, query) => {
      let url = baseUrl + endpoint + `/?page=${page}&per_page=${perPage}`;
      const requestUrl = !query ? url : url + `&query=${query}`;
      return requestUrl;
    };

    const requestUrl = constructUrl(baseUrl, endpoint, page, per_page, query);

    // fetch data from the the Pexels API endpoint
    const response = await axios({
      method: "get",
      url: requestUrl,
      headers: {
        Authorization: `${process.env.PEXELS_API_KEY}`,
      },
    });

    // console.log("`response` from Netlify function `fetchPexelsPhotos`");
    // console.log(response);

    const netlifyResponse = {
      statusCode: response.status,
      body: JSON.stringify({
        statusCode: response.status,
        statusText: response.statusText,
        request_url: response.config.url,
        page: response.data.page,
        per_page: response.data.per_page,
        photos: response.data.photos,
        total_results: response.data.total_results,
        prev_page: response.data.prev_page,
        next_page: response.data.next_page,
      }),
    };

    return netlifyResponse;
  } catch (err) {
    return {
      statusCode: 404,
      body: err.toString(),
    };
  }
};
