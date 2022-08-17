# REACT-PHOTO-SEARCH

## Minimum Viable Product requirements

### MVPs

- Display 10 curated photos on the home screen. Use the Pexels curated photos resource to render these photos.
- Provide pagination for Curated photos. Paging should not cause a page refresh. From the client side initiate the needed requests to allow the user to go forward and backward 10 photos at a time.
- Provide a photo search. Searching should not cause a page refresh. Consume the photo search resource and display the results to the user, along with pagination, if needed.

### Extra MVPs

- Implement a server that wraps the Pexels API, providing one or more of the following features:
  - Maintain your application API key on the server, avoid exposing it to the client
  - Server-side rendering
- Write tests however you see fit
- Placeholder content for images before they're loaded

### User Stories

Your solution needs to satisfy all of these.

**As a user visiting the website...**

- I can see an initial set of curated photos on the home screen
- I am able to access the the photographerʼs name and url if those details are available for every photo
- I can paginate the list of curated photos
- I can use a text input to search for photos Iʼm interested
- I can see the results of my search in the photo viewing area
- I can paginate search results if needed
- I should not be shown the "previous" paginiation button when there is no previous page
- I can refresh my browser and retain my search query and/or page

**As a developer working on the project locally...**

- I have access to all project-specific local setup instructions I need to run the project
- I can install any required dependencies with npm or yarn
- I can compile and run the project in one step

## How we evaluate your solution

While this is a basic web server and website, thereʼs a wide range of implementation possibilities. Weʼre not looking for specific implementation details. We want to see the choices you make. Your preference of tools. And how you approach project requirements.

Here are a few questions we ask when reviewing solutions:

- Did the candidate follow the instructions for submission?
- Does the solution meet the minimum requirements?
- Does the solution satisfy all the user stories?
- Is the project documentation clear?
- Is code readable and concise? does it follow conventions for the chosen language, framework, and libraries?
- Am I able to follow the documentation to get the project running locally without issue?
- If tests are available, am I able to run them locally? Do they pass?
