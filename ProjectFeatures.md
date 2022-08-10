# React Photo Search

## Minimum Viable Product Requirements

### MVP Features

- Display 10 curated photos on the home screen. Use the Pexels curated photos resource to render these photos.
  - Retrieve homepage photos from the Pexels Curated Photos Resource

file: `pexels-photo-search/netlify/functions/fetchPexelsPhotos.js`  

```js
const axios = require("axios");
const SECRET = process.env.PEXELS_API_KEY;

exports.handler = async (event, _context) => {
  try {
    const { apiEndpoint, page, per_page, query } = event.queryStringParameters;
    const baseUrl = `https://api.pexels.com/v1/`;
    
    const constructRequestUrl = (baseUrl, endpoint, page, perPage, query) => {
      let url = baseUrl + endpoint + `/?page=${page}&per_page=${perPage}`;
      const requestUrl = !query ? url : url + `&query=${query}`;
      return requestUrl;
    };

    const requestUrl = constructRequestUrl(baseUrl, apiEndpoint, page, per_page, query);

    // requestUrl: `https://api.pexels.com/v1/curated/?page=1&per_page=10`

    const response = await axios({
      method: "get",
      url: requestUrl,
      headers: {
        Authorization: `${SECRET}`,
      },
    });

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

```

  - `Gallery` component displays 10 photos in a simple masonry layout where photos fill out rows while respecting each photo's aspect ratio
    - `code snippet`

- Provide pagination for Curated photos. Paging should not cause a page refresh. From the client side initiate the needed requests to allow the user to go forward and backward 10 photos at a time.
  - `Pagination` and `PaginationBar` components
    - `code snippet`

- Provide a photo search. Searching should not cause a page refresh. Consume the photo search resource and display the results to the user, along with pagination, if needed.
  - `SearchForm` component
    - `code snippet`

### MVP Extra Features

- Wrap the Pexels API in a server and implement server-side rendering
  - Single-Page, React Application with server-side rendering
    - `code snippet`

- Maintain the application API key on the server in order to avoid exposing it to the client
  - Use Netlify functions to hide the Pexels API Key from the end user
    - `code snippet`

- Placeholder content for images before they are loaded
  - *NOT YET IMPLEMENTED*
    - `code snippet`

- Write tests however you see fit
  - *NOT YET IMPLEMENTED*
    - `code snippet`

### User Stories

**As a user visiting the website...**  

- I can see an initial set of curated photos on the home screen.

Placeholder and Code Snippet(s).  

- I am able to access the the photographerʼs name and url if those details are available for every photo.

Placeholder and Code Snippet(s).  

- I can paginate the list of curated photos.

Placeholder and Code Snippet(s).  

- I can use a text input to search for photos Iʼm interested.

Placeholder and Code Snippet(s).  

- I can see the results of my search in the photo viewing area.

Placeholder and Code Snippet(s).  

- I can paginate search results if needed.

Placeholder and Code Snippet(s).  

- I should not be shown the "previous" paginiation button when there is no previous page.

Placeholder and Code Snippet(s).  

- I can refresh my browser and retain my search query and/or page.

Placeholder and Code Snippet(s).  

**As a developer working on the project locally...**  

- I have access to all project-specific local setup instructions I need to run the project.
- I can install any required dependencies with npm or yarn.
- I can compile and run the project in one step.

## Local Setup Instructions for Developers

### Clone GitHub Repository Locally

[react-photo-search GitHub repository](https://github.com/marshall-strong/react-photo-search)  
`gh repo clone marshall-strong/react-photo-search`
`cd react-photo-search`  

### Pexels API Key

**Note**: to get photos from the Pexels API, an API key is required.  

#### Getting a Pexels API Key

- Create a free Pexels account
  - <https://www.pexels.com/onboarding>
  - Follow “I want to download”
  - Complete the form. Make sure you use a valid email address
- Confirm your email
- Visit the Image & Video API section of your account
- Provide a description and a URL. These can be fake, feel free to use the examples below or write your own
  - Example description: “Iʼm using the API for programming practice projects”
  - Example URL: <https://example.com>
- The API key should be a 56 character string of numbers and lowercase letters
  - Example Pexels API Key: `0123456789abcdefghijklmnopqrstuvwxyz01234567890123456789`
- If you ever lose your key, you can always retrieve it by logging into your Pexels account.

#### Setting Up a `.env` File

In Development Mode, the application reads the Pexels API key from a `.env` file.  

To create a `.env` file from a console window:  

```bash
#!/bin/bash
cd react-photo-search
cd pexels-photo-search
echo "PEXELS_API_KEY=0123456789abcdefghijklmnopqrstuvwxyz01234567890123456789" > .env
```

file: `pexels-photo-search/.env`  

```node
PEXELS_API_KEY=0123456789abcdefghijklmnopqrstuvwxyz01234567890123456789

```

### Install Project Dependencies

`npm install`

### Compile and Run the Project in Development Mode

`npm start`
