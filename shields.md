# Shields.io Instructions

<https://shields.io/>

This is the URL for the React Shield that was included with the README template:

`https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB`

Below, the URL is broken up into its component parts, in order to figure out how to construct URLs for the other shields needed.

react-shield: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB

- "api base url": `https://img.shields.io`
- "api endpoint": `/badge` (the `badge` api endpoint is used to create Static badges )
- "message" (text on left side of shield): `/React`
- "background color" of shield: `-20232A`
- "style": `?style=for-the-badge`
- simple-icons slug for the logo: `&logo=react`
  - get the slug from <https://github.com/simple-icons/simple-icons/blob/develop/slugs.md>
- "logo color": `&logoColor=61DAFB`
  - get the logo color from <https://simpleicons.org/>

Following the pattern laid out above, here are the URLs for the rest of the shields:

cra-shield: https://img.shields.io/badge/Create%20React%20App-20232A?style=for-the-badge&logo=createreactapp&logoColor=09D3AC
netlify-shield: https://img.shields.io/badge/Netlify-20232A?style=for-the-badge&logo=netlify&logoColor=00C7B7
jest-shield: https://img.shields.io/badge/Jest-20232A?style=for-the-badge&logo=jest&logoColor=C21325
