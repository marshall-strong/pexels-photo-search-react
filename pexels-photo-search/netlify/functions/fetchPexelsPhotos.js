const axios = require("axios");
const SECRET = process.env.PEXELS_API_KEY;

// This Netlify function hides the Pexels API key from client-side users.
// If the API request were sent from inside the React app, the key would appear in the request header

exports.handler = async (event, _context) => {
  try {
    // the React component deconstructs the url for the API request
    // the API endpoint is converted to a query string parameter
    // all query string parameters are available through `event`
    const { apiEndpoint, page, per_page, query } = event.queryStringParameters;
    
    const baseUrl = `https://api.pexels.com/v1/`;
    
    // reconstructs the url for the API request
    // request url for homepage photos from the Pexels Curated Photos Resource:
    // `https://api.pexels.com/v1/curated/?page=1&per_page=10`
    // request url for photo search:
    // `https://api.pexels.com/v1/search/?page=1&per_page=10&query=${userInput}`
    const constructRequestUrl = (baseUrl, endpoint, page, perPage, query) => {
      let url = baseUrl + endpoint + `/?page=${page}&per_page=${perPage}`;
      const requestUrl = !query ? url : url + `&query=${query}`;
      return requestUrl;
    };

    const requestUrl = constructRequestUrl(
      baseUrl,
      apiEndpoint,
      page,
      per_page,
      query
    );

    // fetch data from the the Pexels API endpoint
    const response = await axios({
      method: "get",
      url: requestUrl,
      headers: {
        Authorization: `${SECRET}`,
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
