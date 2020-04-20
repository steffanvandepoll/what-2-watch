# What-2-watch

An application made in react to display tv-show information from the TVMaze API.

The application is made in React. Which is a relatively simple framework which allows for a component based approach.

React is also fast and since we're relying on dynamic data having static pages such done with next.js are not really needed.

In this application components such as the ShowCard or Header could be moved into separate Isolated components and be added as dependancies allowing for separate updating which could come in handy when multiple applications rely on them.
This is one of the reasons styled components are used. Styles are encapsulated within the component so it can run independently. Variables such as colors, sizes and margins should be moved to a theme for further development.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

These scripts we're pre-created by create-react-app

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br />

For testing I did not have enough time to cover as much of the code as required.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />

This script is also used by Netflify allowing for continues deployment. - https://what-2-watch.netlify.app/
