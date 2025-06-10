---
title: Webpack
category: JavaScript libraries
updated: 2024-07-25
intro: |
  A guide to getting started with [Webpack](https://webpack.js.org) v5+. This covers the basic configuration for bundling your JavaScript, CSS, and other assets.
---

Basic Configuration
-------------------

### Core Concepts

*   **Entry**: The starting point of your application's dependency graph.
*   **Output**: Where to emit the bundles and what to name them.
*   **Loaders**: Process files that are not JavaScript (e.g., CSS, images).
*   **Plugins**: Perform a wide range of tasks like bundle optimization, asset management, and environment variable injection.
*   **Mode**: Sets the environment to either `development` or `production`.

### webpack.config.js

A typical Webpack configuration file looks like this:

```javascript
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};
```

### Running Webpack

First, install Webpack and the CLI:

```bash
npm install --save-dev webpack webpack-cli
```

Then, add scripts to your `package.json`:

```json
{
  "scripts": {
    "build": "webpack",
    "dev": "webpack --watch"
  }
}
```

Now you can run `npm run build` to build for development, or `npm run build -- --mode=production` for a production build.

### Multiple Entry Points

To create multiple bundles from separate entry files:

```javascript
module.exports = {
  entry: {
    app: './src/app.js',
    vendor: './src/vendor.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
};
```
This configuration will generate `app.bundle.js` and `vendor.bundle.js`.

Loaders
-------
{: .-two-column}

### Babel Loader

Processes JavaScript files with Babel.

```bash
npm install --save-dev babel-loader @babel/core @babel/preset-env
```

```javascript
// webpack.config.js
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
```

Requires a `babel.config.js` in your project root:
```javascript
// babel.config.js
module.exports = {
  presets: ['@babel/preset-env'],
};
```

### CSS and Style Loaders

Processes and injects CSS into the DOM. `css-loader` handles `@import` and `url()`, while `style-loader` injects the CSS into a `<style>` tag.

```bash
npm install --save-dev css-loader style-loader
```

```javascript
// webpack.config.js
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
```
Now you can `import './style.css'` in your JavaScript files.

Plugins & Dev Server
--------------------

### HtmlWebpackPlugin

Generates an HTML file with your bundled JavaScript automatically injected.

```bash
npm install --save-dev html-webpack-plugin
```

```javascript
// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // ...
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My App',
      template: 'src/index.html',
    }),
  ],
};
```

### Webpack Dev Server

A live-reloading development server.

```bash
npm install --save-dev webpack-dev-server
```

Add it to your `package.json` scripts:
```json
{
  "scripts": {
    "start": "webpack serve --open"
  }
}
```
Now, run `npm start` to launch the dev server.

### PostCSS Loader

To use PostCSS for transformations like autoprefixing:

```bash
npm install --save-dev postcss-loader postcss-preset-env
```

```javascript
// webpack.config.js
module.exports = {
  //...
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ],
      },
    ],
  },
};
```
Requires a `postcss.config.js`:
```javascript
// postcss.config.js
module.exports = {
  plugins: [
    require('postcss-preset-env'),
  ],
};
```
