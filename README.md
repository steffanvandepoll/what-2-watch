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

Unfortunatly I did not have enough time to incorporate all the unit tests I wanted. To properly tests this mock responses for the fetches have been prepared in a separate data file with more time they could have been used to tests happy and bad flows in the requests.
Also interaction with different components should be properly tested.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />

This script is also used by Netflify allowing for continues deployment. - https://what-2-watch.netlify.app/


## Next steps
Next steps in the development of this application would be the separation of variables such as colors in a theme. Also localisation should be used for al language strings.
More test cases should be implemented and all actions and interactions should be properly tested.

For the UI a sidescrolling panel should be implemented so more show's can be displayed. This also provides a better experience on mobile views. 

For search an autocomplete functionality could also help the user in finding shows that are Available via the API.
