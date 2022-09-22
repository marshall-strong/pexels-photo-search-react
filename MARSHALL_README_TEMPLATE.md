<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT TITLE & LOGO -->

<div align="center">
  <h1 align="center">REACT-PHOTO-SEARCH</h3>

  <img src="assets/icons/pexelsIcon.svg" alt="Pexels" height="80">
  <img src="assets/icons/xIcon.svg" alt="X" height="80">
  <img src="assets/icons/reactIcon.svg" alt="React" height="80">

  <p align="center">
    A React application that allows users to search for images using the Pexels photo library.
    <!-- <img src="images/pexelsLogoOnTransparent.png" alt="Logo" height="40"> -->
    <br />
    <!-- <a href="https://github.com/marshall-strong/react-photo-search"><strong>Explore the docs »</strong></a> -->
    <!-- <br /> -->
    <!-- <br /> -->
    <a href="https://react-photo-search.netlify.app">View Demo Site</a>
    ·
    <a href="https://github.com/marshall-strong/react-photo-search/issues">Report Bug</a>
    ·
    <a href="https://github.com/marshall-strong/react-photo-search/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->

<!-- While the README is still being updated, use the automatically generated ToC -->
<!-- Once the README is ready to be published, update and use the collapsable HTML ToC -->

- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Acquire an API Key](#acquire-an-api-key)
  - [Installation](#installation)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

<!-- <details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details> -->

<!-- ABOUT THE PROJECT -->

## About The Project

[![Project Screenshot][project-screenshot]][project-production-url]

This project is a website that lets users browse and search for photos from [Pexels](https://www.pexels.com/), a free stock photo and video website that anyone can use or contribute to.

A production deployment of this project can be viewed at [react-photo-search.netlify.app](https://react-photo-search.netlify.app/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

[![React][react-shield]][react-url]
[![Create React App][cra-shield]][cra-url]
[![Netlify][netlify-shield]][netlify-url]

- React
- Create React App
- Netlify

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To set up and run a local copy of this project on your own machine, do the following:

### Prerequisites

Node.js is a back-end runtime environment that executes JavaScript code outside a web browser, and npm is its default package manager. Both must be installed locally in order to run this project.

- `Node.js`

  The recommended way of installing Node.js is with a Node version manager.
  Different operating systems use different Node version managers:

  _Node version managers for OSX and Linux:_

  - `nvm` - [installation instructions](https://github.com/creationix/nvm)
  - `n` - [installation instructions](https://github.com/tj/n)

  _Node version managers for Windows:_

  - `nodist` - [installation instructions](https://github.com/marcelklehr/nodist)
  - `nvm-windows` - [installation instructions](https://github.com/coreybutler/nvm-windows)

  Choose an appropriate Node version manager for your operating system and follow the installation instructions linked above to install both the version manager and Node.js.

  To confirm that Node.js has been installed successfully, run the following command to check the installed version:

  ```sh
  node -v
  ```

- `npm`

  Once Node.js is installed, download and install the latest version of npm by running the following command from the command line:

  ```sh
  npm install npm@latest -g
  ```

  To confirm that npm has been installed successfully, run the following command to check the installed version:

  ```sh
  npm -v
  ```

For additional information or help installing Node.js, npm, and Node version managers, consult the npm documentation on [Downloading and installing Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

### Acquire an API Key

All images in this project are from Pexels, and are requested and received via the Pexels API. A API Key is required in order to use the Pexels API, and can be acquired for free by registering with Pexels.

- Create a free Pexels account at <https://www.pexels.com/onboarding>
- Click the "I want to download" button
- Enter your personal information, then click the "Create New Account" button
- Complete your account setup by opening the email sent to you by Pexels and clicking the "Confirm email" button
- Go to <https://www.pexels.com/api/> and click the "Your API Key" button
- Fill out the form, agree to the Terms of Service, and click the "Generate API Key" button
- Copy the API key and save it somewhere safe -- you will need it in the next section

The API key should be a 56 character string of numbers and lowercase letters.
ex: `0123456789abcdefghijklmnopqrstuvwxyz01234567890123456789`

If you ever lose or misplace your API key, you can retrieve it by logging in to your Pexels account.

### Installation

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo

   ```sh
   git clone https://github.com/marshall-strong/react-photo-search.git
   ```

3. Install NPM packages

   ```sh
   npm install
   ```

4. Enter your API in `config.js`

   ```js
   const API_KEY = "ENTER YOUR API";
   ```

<p align="right">(<a href="#project_title">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3
  - [ ] Nested Feature

See the [open issues](https://github.com/marshall-strong/react-photo-search/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Want to get in touch? Email me at <marshallstrong123@gmail.com> or reach out on [LinkedIn][linkedin-url].

Interesting in checking out some of the other projects I've worked on? Visit [marshallstrong.com](https://marshallstrong.com/) for a full list, as well as my resume and work experience.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [Shields.io](https://shields.io/)
  - Concise, consistent, and legible badges in SVG and raster format
- []()
- []()

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/marshall-strong/react-photo-search.svg?style=for-the-badge
[contributors-url]: https://github.com/marshall-strong/react-photo-search/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/marshall-strong/react-photo-search.svg?style=for-the-badge
[forks-url]: https://github.com/marshall-strong/react-photo-search/network/members
[stars-shield]: https://img.shields.io/github/stars/marshall-strong/react-photo-search.svg?style=for-the-badge
[stars-url]: https://github.com/marshall-strong/react-photo-search/stargazers
[issues-shield]: https://img.shields.io/github/issues/marshall-strong/react-photo-search.svg?style=for-the-badge
[issues-url]: https://github.com/marshall-strong/react-photo-search/issues
[license-shield]: https://img.shields.io/github/license/marshall-strong/react-photo-search.svg?style=for-the-badge
[license-url]: https://github.com/marshall-strong/react-photo-search/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/marshall-strong
[project-screenshot]: ./assets/screenshots/homepage.png
[project-production-url]: https://react-photo-search.netlify.app
[cra-shield]: https://img.shields.io/badge/Create%20React%20App-20232A?style=for-the-badge&logo=createreactapp&logoColor=09D3AC
[cra-url]: https://create-react-app.dev/
[netlify-shield]: https://img.shields.io/badge/Netlify-20232A?style=for-the-badge&logo=netlify&logoColor=00C7B7
[netlify-url]: https://www.netlify.com/
[react-shield]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
