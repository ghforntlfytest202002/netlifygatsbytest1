# gatsby-tinacms-json

A Gatsby/Tina plugin for editing JSON files stored in git.

**What is Tina?**

Tina is a lightweight but powerful toolkit for creating a site editing ui with javascript components. Tina surfaces superpowers for dev’s to create, expand on and customize a simple yet intuitive ui for editing content.

Tina is optimized for nextgen JAMstack tools. It is based in javascript and is extensible enough to be configured with many different frameworks. Right now we have explored using Tina with Gatsby, Create-React-App & Next.js, with plans to dive into Vue.

[Visit the website to learn more!](https://tinacms.org/docs/)

## Installation

```
npm install --save gatsby-plugin-tinacms gatsby-tinacms-git gatsby-tinacms-json
```

or

```sh
yarn add gatsby-plugin-tinacms gatsby-tinacms-git gatsby-tinacms-json
```

## Setup

Include `gatsby-plugin-tinacms`, `gatsby-tinacms-git`, and `gatsby-tinacms-json` in your config:

_gatsby-config.js_

```javascript
module.exports = {
  // ...
  plugins: [
    // ...
    {
      resolve: 'gatsby-plugin-tinacms',
      options: {
        plugins: ['gatsby-tinacms-git', 'gatsby-tinacms-json'],
      },
    },
  ],
}
```
