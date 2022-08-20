# React Photo Search

## Minimum Viable Product Requirements

### MVP Features

- Display 10 curated photos on the home screen. Use the Pexels curated photos resource to render these photos.

Retrieve home screen photos from the Pexels Curated Photos Resource:

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

    const requestUrl = constructRequestUrl(
      baseUrl,
      apiEndpoint,
      page,
      per_page,
      query
    );

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

The `Gallery` component displays 10 photos in a simple masonry layout where photos fill out rows while respecting each photo's aspect ratio

file: `pexels-photo-search/src/Gallery.jsx`

```jsx
const Gallery = ({ response }) => (
  <div class="Gallery">
    <div class="gallery-container">
      <div class="pagination-container">
        <ul class="gallery-photos">
          <li class="Photo">
            <a
              href="https://www.pexels.com/photo/a-carry-on-suitcase-sits-on-minimal-steps-13145853/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://images.pexels.com/photos/13145853/pexels-photo-13145853.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=350"
                alt="alt text"
              />
            </a>
            <div class="photo-credit">
              <span>Photo by </span>
              <span class="photographer">
                <a
                  href="https://www.pexels.com/@andrew"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="photographerUrl"
                >
                  <b>Andrew Neel</b>
                </a>
              </span>
            </div>
          </li>
          <li class="Photo"></li>
          <li class="Photo"></li>
          <li class="Photo"></li>
          <li class="Photo"></li>
          <li class="Photo"></li>
          <li class="Photo"></li>
          <li class="Photo"></li>
          <li class="Photo"></li>
          <li class="Photo"></li>
          <li class="Photo"></li>
        </ul>
      </div>
    </div>
  </div>
);
```

file: `pexels-photo-search/src/Gallery.css`

```css
.Gallery {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 11rem;
  margin-bottom: 10rem;
  width: 100%;
}

.gallery-container {
  display: inherit;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  background-color: var(--black-mask-6-percent-opaque);
}

.pagination-container {
  display: inherit;
  flex-direction: inherit;
  flex-wrap: inherit;
  align-items: inherit;
  justify-content: inherit;
  width: 100%;
  height: max-content;
}

ul.gallery-photos {
  display: flex;
  flex-wrap: wrap;
}
```

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

  - _NOT YET IMPLEMENTED_
    - `code snippet`

- Write tests however you see fit
  - _NOT YET IMPLEMENTED_
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
