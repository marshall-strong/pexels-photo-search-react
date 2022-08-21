# REACT-PHOTO-SEARCH

- [REACT-PHOTO-SEARCH](#react-photo-search)
  - [Project Prompt](#project-prompt)
    - [MVP Requirements](#mvp-requirements)
    - [User Stories](#user-stories)
    - [Extras](#extras)
  - [Project Features](#project-features)
    - [**Displays `Photo` components in the `Gallery` using a masonry layout**](#displays-photo-components-in-the-gallery-using-a-masonry-layout)
    - [**Displays photos from the Pexels "Curated Photos" endpoint on the home screen**](#displays-photos-from-the-pexels-curated-photos-endpoint-on-the-home-screen)
    - [**`SearchForm` component gets a query string from the user and displays relevant photos from the Pexels "Search for Photos" endpoint**](#searchform-component-gets-a-query-string-from-the-user-and-displays-relevant-photos-from-the-pexels-search-for-photos-endpoint)
    - [**`Photo` components display photographer name and url on hover**](#photo-components-display-photographer-name-and-url-on-hover)
    - [**Paginate through photos in the `Gallery`**](#paginate-through-photos-in-the-gallery)
    - [**LocalStorage retains the user's current page and search query on page refresh**](#localstorage-retains-the-users-current-page-and-search-query-on-page-refresh)
    - [**Server-side rendering as a Single-Page React App**](#server-side-rendering-as-a-single-page-react-app)
    - [**Netlify Functions Conceal the API key from the end user**](#netlify-functions-conceal-the-api-key-from-the-end-user)
    - [**Logo with CSS animation**](#logo-with-css-animation)
  - [Development Mode](#development-mode)
    - [**1. Create Local Clone of GitHub Repository**](#1-create-local-clone-of-github-repository)
    - [**2. Register with Pexels for an API key**](#2-register-with-pexels-for-an-api-key)
    - [**3. Store the API key in a `.env` file**](#3-store-the-api-key-in-a-env-file)
      - [_Alternatively, you can just create and configure your `.env` file from the command line:_](#alternatively-you-can-just-create-and-configure-your-env-file-from-the-command-line)
    - [**4. Install Project Dependencies with `npm install`**](#4-install-project-dependencies-with-npm-install)
    - [**5. Start the Project with `npm start`**](#5-start-the-project-with-npm-start)
  - [Project Style](#project-style)
    - [**Pre-commit**](#pre-commit)
    - [**Prettier**](#prettier)
    - [**Stylelint**](#stylelint)
  - [Production Deployment](#production-deployment)
  - [Crucial Thanks](#crucial-thanks)
    - [**Pexels**](#pexels)
    - [**Create React App**](#create-react-app)
    - [**Netlify**](#netlify)
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

### **Displays `Photo` components in the `Gallery` using a masonry layout**

The `Gallery` component displays photos in a masonry layout, where photos are arranged to completely fill out rows without compromising image aspect ratio.

### **Displays photos from the Pexels "Curated Photos" endpoint on the home screen**

The home screen retrieves photographs from the Pexels "Curated Photos" endpoint, then displays those photos in the `Gallery`.

### **`SearchForm` component gets a query string from the user and displays relevant photos from the Pexels "Search for Photos" endpoint**

The `SearchForm` component accepts text input from the user and retrieves relevent photographs from the Pexels "Search for Photos" endpoing, then displays those photos in the `Gallery`

### **`Photo` components display photographer name and url on hover**

Hovering over a `Photo` in the `Gallery` component brings up the photographer's name, with a link to more of the photographer's work on Pexels

### **Paginate through photos in the `Gallery`**

The `Pagination` components allows the user to paginate through photos 10 at a time with no page refresh, and contains "next page" and "previous page" buttons that are automatically disabled if there is no next or previous page

### **LocalStorage retains the user's current page and search query on page refresh**

LocalStorage retains the user's search query and/or page number so that the `Gallery` photos are not reset if the page is refreshed

### **Server-side rendering as a Single-Page React App**

### **Netlify Functions Conceal the API key from the end user**

Sending a request to the Pexels API requires a key, and if the request is created and sent from inside of the Create React App application, the API key will end up being exposed to any site users with access to Chrome DevTools. Fortunately for us, Netlify Functions provide a way around this vulnerability...

### **Logo with CSS animation**

The animated site logo was inspired by the Create React App logo, and was a fun opportunity to play around with CSS animations and keyframes.

## Development Mode

Developers who wish to run this project locally can do so using the following steps, described in greater detail below:

1. [Create a local clone of the project's GitHub repository](#1-create-local-clone-of-github-repository)
2. [Register with Pexels for an API key](#2-register-with-pexels-for-an-api-key)
3. [Store the API key in a `.env` file](#3-store-the-api-key-in-a-env-file)
4. [Install project dependencies using `npm install`](#4-install-project-dependencies-with-npm-install)
5. [Compile and run the project in Development mode using `npm start` to start Netlify Dev with Create React App](#5-start-the-project-with-npm-start)

### **1. Create Local Clone of GitHub Repository**

The GitHub repository for this project can be found here: <https://github.com/marshall-strong/react-photo-search>

Click the "Code" button and select which method you'd like to use to clone the repository: HTTPS, SSH, the GitHub CLI, or Download a ZIP file.

_Cloning the Repository using the GitHub CLI:_

```bash
#!/bin/bash
gh repo clone marshall-strong/react-photo-search
```

### **2. Register with Pexels for an API key**

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

### **3. Store the API key in a `.env` file**

In Development mode, the application reads the Pexels API key from a `.env` file located in the root directory of the React app (`pexels-photo-search/.env`).

Once you have your Pexels API key, create a new file named `.env` inside the root directory of the Create React App application (note that this is different from the root directory of the project).

Open your new `.env` file. Environment variables are written in SCREAMING_SNAKE_CASE, are separated from their values by an equal sign `=`, and no quotation marks are required. The application is expecting an environment variable named `PEXELS_API_KEY`, so once you have copied and pasted your own API key into the `.env` file, it should look something like this:

_`react-photo-search/pexels-photo-search/.env`_

```node
PEXELS_API_KEY=0123456789abcdefghijklmnopqrstuvwxyz01234567890123456789

```

**Note:**
Make sure to replace the sample API key with your own key.
In this example, the sample API key is `0123456789abcdefghijklmnopqrstuvwxyz01234567890123456789`.

#### _Alternatively, you can just create and configure your `.env` file from the command line:_

```bash
#!/bin/bash
$ cd react-photo-search/pexels-photo-search
$ echo "PEXELS_API_KEY=0123456789abcdefghijklmnopqrstuvwxyz01234567890123456789" > .env
```

**Note:** In Development mode, Netlify Dev will read the API key from this `.env` file as an environment variable. In a Production deployment, the API key is still stored as an environment variable, but it is not read from a file. Instead, the variable is configured in the settings of your Netlify site under "Settings" > "Build & deploy" > "Environment". See the [Production Deployment](#production-deployment) section for more information.

### **4. Install Project Dependencies with `npm install`**

Navigate to the root directory of the project and use the `npm install` command to install the packages for all of the project's dependencies.

```bash
#!/bin/bash
$ cd react-photo-search
$ npm install
```

### **5. Start the Project with `npm start`**

Navigate to the root directory of the project and use the `npm start` command to run the application in Development mode.

```bash
#!/bin/bash
$ cd react-photo-search
$ npm start
```

This command is a shortcut that uses Create React App's built-in scripts to start the development server and compile the project using webpack. At the same time, Netlify Dev starts another, separate server to load the Netlify Functions onto, and it makes the environment variables defined in the `.env` file available to the Netlify Functions server (but NOT the Create React App server). Even in Development mode, this will hide the Pexels API key from users on the client side.

## Project Style

### **Pre-commit**

[Pre-commit](https://pre-commit.com/) is a framework for managing and maintaining multi-language pre-commit hooks. It runs Git hook scripts (like linters) before each Git commit, and prompts the user to fix any issues that are found before the commit can be saved. Pre-commit manages Git hooks for the user and allows them to use linters written in any language, regardless of which language the actual project is written in.

Before using Pre-commit on your machine for the first time, the Pre-commit package manager must first be installed locally on your machine:

```bash
#!/bin/bash
$ pip install pre-commit
```

Pre-commit hooks are configured using a file named `.pre-commit-config.yaml`. The file containing the Pre-commit configuration for this project is reproduced below:

_`react-photo-search/.pre-commit-config.yaml`_

```yaml
repos:
  - repo: https://github.com/pre-commit/pre-commit-hooks
    rev: v3.4.0
    hooks:
      - id: trailing-whitespace
      - id: end-of-file-fixer
      - id: check-yaml
      - id: check-added-large-files
  - repo: https://github.com/pre-commit/mirrors-prettier
    rev: "v2.7.1" # Note: Use the sha / tag you want to point at
    hooks:
      - id: prettier
  - repo: https://github.com/thibaudcolas/pre-commit-stylelint
    rev: "v14.10.0" # Note: Use the sha / tag you want to point at
    hooks:
      - id: stylelint
        args: [--fix]
        additional_dependencies:
          # Note: stylelint itself (and not a mirror) needs to be used here when using additional_dependencies.
          - stylelint@latest
          - stylelint-config-standard@latest
          - stylelint-config-idiomatic-order@latest
          - stylelint-config-prettier@latest
          # Note: Package names starting with `@` need to be quoted. For example:
          # - "@scope/my-awesome-plugin@0.12.0"
```

**Note:** The `prettier` and `stylelint` hooks configured in the `.pre-commit-config.yaml` file above are described in greater detail in the next section.

Once the configuration file is complete, run `pre-commit install` to set up the git hook scripts:

```bash
#!/bin/bash
$ pre-commit install
pre-commit installed at .git/hooks/pre-commit
```

Once installed, Pre-commit will run automatically on every `git commit`!

_Console output after installing and configuring pre-commit:_

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

[**pre-commit/pre-commit-hooks**](https://github.com/pre-commit/pre-commit-hooks) Some out-of-the-box hooks for pre-commit

### **Prettier**

[Prettier](https://prettier.io/) is an opinionated code formatter that enforces conventions automatically.

[**prettier/prettier**](https://github.com/prettier/prettier)
Official Prettier repository

[**pre-commit/mirrors-prettier**](https://github.com/pre-commit/mirrors-prettier)
Mirrors all **prettier/prettier** releases, used by Pre-commit to run the prettier hook

### **Stylelint**

[Stylelint](https://stylelint.io/) is a linter that identifies errors and enforces conventions in a project's stylesheets.

_Use `npx` to run Stylelint at any time (not just when saving a commit):_

```bash
#!/bin/bash
$ cd react-photo-search
$ npx stylelint "pexels-photo-search/src/**/*.css" --fix
```

[**stylelint/stylelint**](https://github.com/stylelint/stylelint)
Official Stylelint repository

[**stylelint/stylelint-config-standard**](https://github.com/stylelint/stylelint-config-standard)
The standard shareable config for Stylelint

[**ream88/stylelint-config-idiomatic-order**](https://github.com/ream88/stylelint-config-idiomatic-order)
Orders styles using consistent, idiomatic CSS

[**prettier/stylelint-config-prettier**](https://github.com/prettier/stylelint-config-prettier)
Turns off all rules that are unnecessary or might conflict with prettier

[**thibaudcolas/pre-commit-stylelint**](https://github.com/thibaudcolas/pre-commit-stylelint)
Mirrors all **stylelint/stylelint** releases, used by Pre-commit to run the stylelint hook

## Production Deployment

**<https://react-photo-search.netlify.app/>**

This project is deployed to Production directly from GitHub using Netlify.
A live version of the site can be viewed [here](https://react-photo-search.netlify.app/).

**Note:** In Production mode, Netlify expects to recieve the Pexels API key as an environment variable, just like in Development mode. The difference is where that environment variable is read from. In Development mode, Netlify Dev reads the key from the `.env` configuration file. In contrast, in Production, mode environment variables must be configured using the [Netlify dashboard](https://app.netlify.com/sites/react-photo-search/settings/deploys#environment). Go to "Site settings" > "Build & deploy" > "Environment".

## Crucial Thanks

This project would not have been possible without the following services:

### **[Pexels](https://www.pexels.com/api)**

Pexels provides access to their entire photo and video library for free. The Pexels API powers this entire application.

### **[Create React App](https://create-react-app.dev/)**

Create React App takes care of setting up and configuring a new React application with useful defaults

### **[Netlify](https://docs.netlify.com/)**

Netlify is an all-in-one platform for automating modern web projects. For this project in particular, I used it to securely send requests to the Pexels API without exposing the API key to the end user.

## Resources and How-Tos

- [How to Securely Access Secret API keys using Netlify Functions in a React App](https://www.freecodecamp.org/news/how-to-access-secret-api-keys-using-netlify-functions-in-a-react-app/)
- [Netlify Blog: How to deploy React Apps in less than 30 Seconds](https://www.netlify.com/blog/2016/07/22/deploy-react-apps-in-less-than-30-seconds/)
- [Cool grayscale hover effect](https://codepen.io/AnthonyMoss/pen/RwwyQQ)
- [Emoji Unicode Reference](https://www.w3schools.com/charsets/ref_emoji.asp)
- [the position property](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_position2)
- ["Cool and Fresh" color palette](https://visme.co/blog/website-color-schemes/#attachment_13239)
- [CSS Pulse Effect](https://www.florin-pop.com/blog/2019/03/css-pulse-effect/)
- [Adaptive Photo Layout with Flexbox](https://css-tricks.com/adaptive-photo-layout-with-flexbox/)
- [Boxy SVG: A free, browser-based tool for editing SVG elements](https://boxy-svg.com/)
- [The Difference Between ALT text and Title text](https://blog.spotibo.com/difference-between-alt-text-and-title-text/)

## Future Development Work

The following features are not currently implemented, but will be added as time allows:

- add placeholdercontent for images before they are loaded
- add tests, and instructions for running them in Development mode
- add additional project information to the `Footer`
- optimize website for mobile
- add a hamburger icon to the `Navbar` that displays a dropdown menu when clicked
- add options for a light mode and a dark mode
