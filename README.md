# web-component-typescript-seed

This project provides a structure for developing and distributing web components bundled into a single JS file.

No frameworks. No 3rd party libraries. Only Webpack sprinkled with Typescript and SASS.

## Project Folders

- `src` - code of components. This will be bundled into a single `dist/index.js` file by running `npm build`. The `dist` folder could be distributed to NPM.
- `public` - assets for developing and demoing the web components. Will be bundled into `demo` folder by running `npm run demo`. The `demo` folder could be distributed to, for example, GitHub Pages.
