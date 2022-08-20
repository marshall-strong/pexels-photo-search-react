# REACT-PHOTO-SEARCH

- [REACT-PHOTO-SEARCH](#react-photo-search)
  - [Project Prompt](#project-prompt)
    - [MVP Requirements](#mvp-requirements)
    - [User Stories](#user-stories)
    - [Extras](#extras)
  - [Project Features](#project-features)
    - [&#9658; Displays `Photo` components in the `Gallery` using a masonry layout](#-displays-photo-components-in-the-gallery-using-a-masonry-layout)
    - [&#9658; Displays photos from the Pexels "Curated Photos" endpoint on the home screen](#-displays-photos-from-the-pexels-curated-photos-endpoint-on-the-home-screen)
    - [&#9658; `SearchForm` component gets a query string from the user and displays relevant photos from the Pexels "Search for Photos" endpoint](#-searchform-component-gets-a-query-string-from-the-user-and-displays-relevant-photos-from-the-pexels-search-for-photos-endpoint)
    - [&#9658; `Photo` components display photographer name and url on hover](#-photo-components-display-photographer-name-and-url-on-hover)
    - [&#9658; Paginate through `Gallery` photos](#-paginate-through-gallery-photos)
    - [&#9658; LocalStorage retains user's current page and search query on page refresh](#-localstorage-retains-users-current-page-and-search-query-on-page-refresh)
    - [&#9658; Server-side rendering as a Single-Page React App](#-server-side-rendering-as-a-single-page-react-app)
    - [&#9658; Netlify Functions Conceal the API key from the end user](#-netlify-functions-conceal-the-api-key-from-the-end-user)
    - [&#9658; Logo with CSS animation](#-logo-with-css-animation)
  - [Development Mode](#development-mode)
    - [Create Local Clone of GitHub Repository](#create-local-clone-of-github-repository)
    - [Getting a Pexels API key](#getting-a-pexels-api-key)
    - [Storing an API key in a `.env` file](#storing-an-api-key-in-a-env-file)
    - [Install Project Dependencies with `npm install`](#install-project-dependencies-with-npm-install)
    - [Run the Project with `npm start`](#run-the-project-with-npm-start)
  - [Project Style](#project-style)
    - [`pre-commit`](#pre-commit)
    - [`Prettier`](#prettier)
    - [`stylelint`](#stylelint)
  - [Production Deployment](#production-deployment)
  - [Crucial Thanks](#crucial-thanks)
  - [Resources and How-Tos](#resources-and-how-tos)
  - [Future Development Work](#future-development-work)

This project is a website that lets users browse and search for photos from [Pexels](https://www.pexels.com/), a free stock photo and video website that anyone can use or contribute to.

This project was originally a developed as part of a coding challenge. The original MVP requirements and User Stories from the challenge are included in the [**Project Prompt**](#project-prompt) section. For code snippets and descriptions of how the project's features fulfill the project requirements, see the [**Project Features**](#project-features) section.

This project is shared publicly on GitHub. Developers can clone, run, and edit the repository locally by following the instructions in the [**Development Mode**](#development-mode) section.

In order to enforce consistent syntax and styling across the entire code base, this project makes use of several different linters, which are managed by a framework called `pre-commit`. `pre-commit` runs linters as Git hook scripts before each Git commit, and prompts the user to fix any issues found before the commit can be saved. See the [**Project Style**](#project-style) section for more information.

A production deployment of this project can be viewed at [react-photo-search.netlify.app](https://react-photo-search.netlify.app/). See the [**Production Deployment**](#production-deployment) section for more information.

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

### Extras

- Implement a server that wraps the Pexels API, providing one or more of the following features:
  - Maintain your application API key on the server, avoid exposing it to the client
  - Server-side rendering
- Placeholder content for images before they are loaded
- Write tests however you see fit

## Project Features

### &#9658; Displays `Photo` components in the `Gallery` using a masonry layout

The `Gallery` component displays photos in a masonry layout, where photos fill out rows while preserving aspect ratio.

### &#9658; Displays photos from the Pexels "Curated Photos" endpoint on the home screen

The home screen retrieves photographs from the Pexels "Curated Photos" endpoint, then displays those photos in the `Gallery`.

### &#9658; `SearchForm` component gets a query string from the user and displays relevant photos from the Pexels "Search for Photos" endpoint

The `SearchForm` component accepts text input from the user and retrieves relevent photographs from the Pexels "Search for Photos" endpoing, then displays those photos in the `Gallery`

### &#9658; `Photo` components display photographer name and url on hover

Hovering over a `Photo` in the `Gallery` component brings up the photographer's name and a link to more of their work on Pexels

### &#9658; Paginate through `Gallery` photos

the `PaginationBar` component allows the user to paginate through photos 10 at a time with no page refresh, and contains "next page" and "previous page" buttons that are automatically disabled if there is no next or previous page

### &#9658; LocalStorage retains user's current page and search query on page refresh

LocalStorage retains the user's search query and/or page number so that the `Gallery` photos are not reset if the page is refreshed

### &#9658; Server-side rendering as a Single-Page React App

### &#9658; Netlify Functions Conceal the API key from the end user

Leverage continuous deployment in Netlify to kick off an _automated build process_ that generates site assets.

### &#9658; Logo with CSS animation

## Development Mode

Developers who wish to run this project locally can do so using the following steps, described in greater detail below:

- Create a local clone of the `react-photo-search` GitHub repository
- Get a Pexels API key
- Store your API key as an environment variable in a `.env` file
- Install project dependencies using `npm install`
- Compile and run the project in Development mode using `npm start` to start Netlify Dev with Create React App

### Create Local Clone of GitHub Repository

The GitHub repository for this project can be found here: <https://github.com/marshall-strong/react-photo-search>

Click the "Code" button and select which method you'd like to use to clone the repository: HTTPS, SSH, the GitHub CLI, or Download a ZIP file.

_Cloning the Repository with GitHub CLI:_

`gh repo clone marshall-strong/react-photo-search`

### Getting a Pexels API key

A Pexels API Key (not included in the repository) is required in order for the project to run properly. Without a key, requests sent to the Pexels API will be denied, and the user will be unable to retrieve any images to display.

To get a Pexels API key, do the following:

- Create a free Pexels account
  - <https://www.pexels.com/onboarding>
  - Follow “I want to download”
  - Complete the form (must use a valid email address)
- Confirm your email to complete account setup
- Visit the Image & Video API section of your account
- Provide a description and a URL.
  - Example description: “I am using the Pexels API in a practice programming projects”
  - Example URL: <https://react-photo-search.netlify.app/>
- The API key should be a 56 character string of numbers and lowercase letters
  - Example Pexels API Key: `0123456789abcdefghijklmnopqrstuvwxyz01234567890123456789`
- If you ever lose your key, you can always retrieve it by logging into your Pexels account.

### Storing an API key in a `.env` file

In Development mode, the application reads the Pexels API key from a `.env` file located in the root directory of the React app (`pexels-photo-search/.env`).

To create a `.env` file from a console window, do the following:

```bash
#!/bin/bash
$ cd react-photo-search
$ cd pexels-photo-search
$ echo "PEXELS_API_KEY=0123456789abcdefghijklmnopqrstuvwxyz01234567890123456789" > .env
```

Make sure to replace the sample API key with your own key.
In this example, the sample API key is `0123456789abcdefghijklmnopqrstuvwxyz01234567890123456789`.

The result should be the following:

_file: `pexels-photo-search/.env`_

```node
PEXELS_API_KEY=0123456789abcdefghijklmnopqrstuvwxyz01234567890123456789

```

In Development mode, Netlify Dev will get the API key from this `.env` configuration file as an environment variable. In a Production deployment, the API key is still stored as an environment variable, but it is configured in the settings of your Netlify site under "Settings" > "Build & deploy" > "Environment".

### Install Project Dependencies with `npm install`

`npm install`

### Run the Project with `npm start`

`npm start`

## Project Style

### `pre-commit`

[pre-commit tabs](https://www.one-tab.com/page/KgV3lUgYQ-CE0JRg4Yq74g)

[pre-commit](https://pre-commit.com/) is a framework for managing and maintaining multi-language pre-commit hooks.

pre-commit runs Git hook scripts (like linters) before each Git commit and prompts the user to fix any issues that are found before the commit can be saved.

pre-commit manages Git hooks for the user and allows them to use linters written in any language, regardless of which language the actual project is written in.

pre-commit requires [python](https://docs.python-guide.org/starting/install3/linux/) in order to run.

_Log files from installing and configuring `pre-commit`:_

```bash
#!/bin/bash
$ pip install pre-commit --upgrade
$ pre-commit --version
pre-commit 2.13.0
$ cd react-photo-search
$ pre-commit sample-config
$ pre-commit install
pre-commit installed at .git/hooks/pre-commit
$ pre-commit run --all-files
```

### `Prettier`

### `stylelint`

[stylelint tabs](https://www.one-tab.com/page/DcZJXxmaQE2Sc1Ae6lrT5g)

Run `stylelint` on all CSS files, fixing problems where possible:

`npx stylelint "pexels-photo-search/src/**/*.css" --fix`

## Production Deployment

This project is deployed to Production directly from GitHub using Netlify.
A live version of the site can be viewed here: [react-photo-search.netlify.app](https://react-photo-search.netlify.app/).

In Production mode, Netlify expects to recieve the Pexels API key as an environment variable, just like in Development mode. The difference is where that environment variable is read from. In Development mode, Netlify Dev reads the key from the `.env` configuration file. In contrast, in Production, mode environment variables must be configured using the [Netlify dashboard](https://app.netlify.com/sites/react-photo-search/settings/deploys#environment). Go to "Site settings" > "Build & deploy" > "Environment".

## Crucial Thanks

This project would not have been possible without assistance from the following:

&#9658; [Pexels](https://www.pexels.com/api)

Pexels provides access to their entire photo and video library for free. The Pexels API powers this entire application.

&#9658; [Netlify](https://docs.netlify.com/)

Netlify is an all-in-one platform for automating modern web projects. For this project in particular, I used it to securely sent requests to the Pexels API without exposing the API key to the end user.

&#9658; [Create React App](https://create-react-app.dev/)

Create React App takes care of setting up and configuring a new React application with useful defaults

&#9658; [Boxy SVG](https://boxy-svg.com/)

A free, browser-based tool for editing SVG elements

## Resources and How-Tos

- [How to Securely Access Secret API keys using Netlify Functions in a React App](https://www.freecodecamp.org/news/how-to-access-secret-api-keys-using-netlify-functions-in-a-react-app/)
- [Netlify Blog: How to deploy React Apps in less than 30 Seconds](https://www.netlify.com/blog/2016/07/22/deploy-react-apps-in-less-than-30-seconds/)
- [Cool grayscale hover effect](https://codepen.io/AnthonyMoss/pen/RwwyQQ)
- [Emoji Unicode Reference](https://www.w3schools.com/charsets/ref_emoji.asp)
- [the position property](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_position2)
- ["Cool and Fresh" color palette](https://visme.co/blog/website-color-schemes/#attachment_13239)
- [CSS Pulse Effect](https://www.florin-pop.com/blog/2019/03/css-pulse-effect/)
- [Adaptive Photo Layout with Flexbox](https://css-tricks.com/adaptive-photo-layout-with-flexbox/)

## Future Development Work

The following features are not currently implemented, but will be added as time allows:

- configure `pre-commit` so that `stylelint` tries automatically fixing errors (when possible)
- add placeholdercontent for images before they are loaded
- add tests, and instructions for running them in Development mode
- add additional project information to the `Footer`
- optimize website for mobile
- add a hamburger icon to the `Navbar` that displays a dropdown menu when clicked
- add options for a light mode and a dark mode
