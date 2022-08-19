# REACT-PHOTO-SEARCH

This project is a website that lets users browse and search for photos from [Pexels](https://www.pexels.com/), a free stock photo and video website that anyone can use or contribute to.

This project was originally a developed as part of a coding challenge. The original MVP requirements and User Stories from the challenge are included in the **Project Prompt** section. For code snippets and descriptions of how the project's features fulfill the project requirements, see the **Project Features** section.

This project is shared publicly on GitHub. Developers can clone, run, and edit the repository locally by following the instructions in the **Development Mode** section.

A production deployment of this project can be viewed at [react-photo-search.netlify.app](https://react-photo-search.netlify.app/). See the **Production Deployment** section for more information.

## Project Prompt

We need you to build a website to let users browse photos from [Pexels](https://www.pexels.com/) (see below notes on getting an API key). Thereʼs a ton of competition in the photo space online, so we need to stand out. We need a solution thatʼs lighting fast to load with a snappy, responsive UI. We need to greet site visitors with a selection of curated photos and give them the ability to search our extensive catalog of quality photos from professional photographers.

### MVP Requirements

- Display 10 curated photos on the home screen. Use the Pexels curated photos resource to render these photos.
- Provide pagination for Curated photos. Paging should not cause a page refresh. From the client side initiate the needed requests to allow the user to go forward and backward 10 photos at a time.
- Provide a photo search. Searching should not cause a page refresh. Consume the photo search resource and display the results to the user, along with pagination, if needed.

### User Stories

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

### Suggested Extras

- Implement a server that wraps the Pexels API, providing one or more of the following features:
  - Maintain your application API key on the server, avoid exposing it to the client
  - Server-side rendering
- Write tests however you see fit
- Placeholder content for images before they are loaded

## Project Features

## Development Mode

Developers who wish to run this project locally can do so by cloning the project's repository on GitHub and following the instructions below.
Note that a Pexels API Key (not included in the repository) is required in order for the project to run properly. Instructions for obtaining a Pexels API key can be found below.
To

### Getting a Pexels API Key

To work with the Pexels API, you need an API key. To get a key:

- Create a free Pexels account
  - <https://www.pexels.com/onboarding>
  - Follow “I want to download”
  - Complete the form. Make sure you use a valid email address
- Confirm your email
- Visit the Image & Video API section of your account
- Provide a description and a URL. These can be fake, feel free to use the examples below or write your own
  - Example description: “Iʼm using the API for programming practice projects”
  - Example URL: <https://example.com>

### Local Setup

`npm run start`

### Linters and Pre-Commit Hooks

#### Stylelint

[stylelint tabs](https://www.one-tab.com/page/DcZJXxmaQE2Sc1Ae6lrT5g)

Run `stylelint` on all CSS files, fixing problems where possible:

```bash
npx stylelint "pexels-photo-search/src/**/*.css" --fix
```

#### Pre-commit

[pre-commit tabs](https://www.one-tab.com/page/KgV3lUgYQ-CE0JRg4Yq74g)

## Production Deployment

This project is deployed to Production directly from GitHub using Netlify.
A live version of the site can be viewed here: [react-photo-search.netlify.app](https://react-photo-search.netlify.app/).

## References and Acknowledgments

### Resources

- [Pexels](https://www.pexels.com/api)
  - Pexels provides access to their entire photo and video library for free via and API that powers this entire application
- [Netlify](https://docs.netlify.com/)
  - Netlify is an all-in-one platform for automating modern web projects. For this project in particular, I used it to securely sent requests to the Pexels API without exposing the API key to the end user.
- [Create React App](https://create-react-app.dev/)
  - Create React App takes care of setting up and configuring a new React application with useful defaults
- [Boxy SVG](https://boxy-svg.com/)
  - Free, browser-based tool for editing SVG elements

### How-Tos

- [How to Securely Access Secret API keys using Netlify Functions in a React App](https://www.freecodecamp.org/news/how-to-access-secret-api-keys-using-netlify-functions-in-a-react-app/)
- [Netlify Blog: How to deploy React Apps in less than 30 Seconds](https://www.netlify.com/blog/2016/07/22/deploy-react-apps-in-less-than-30-seconds/)
- [Cool grayscale hover effect](https://codepen.io/AnthonyMoss/pen/RwwyQQ)
- [Emoji Unicode Reference](https://www.w3schools.com/charsets/ref_emoji.asp)
- [the position property](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_position2)
- ["Cool and Fresh" color palette](https://visme.co/blog/website-color-schemes/#attachment_13239)
- [CSS Pulse Effect](https://www.florin-pop.com/blog/2019/03/css-pulse-effect/)
- [Adaptive Photo Layout with Flexbox](https://css-tricks.com/adaptive-photo-layout-with-flexbox/)
