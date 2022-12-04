# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

1.Assets folder - it consists of images and styling files

2.Layouts Folder - As the name says, it contains layouts available to the whole project like header, footer, etc.
                   We can store the header, footer, or sidebar code here and call it.

3.Components folder

4.Pages Folder -The files in the pages folder indicate the route of the react application.
                Each file in this folder contains its route. A page can contain its subfolder. 
                Each page has its state and is usually used to call an async operation. 
                It usually consists of various components grouped.

5.Middleware Folder - This folder consists of middleware that allows for side effects in the application. 
                      It is used when we are using redux with it. Here we keep all our custom middleware.

6.Routes Folder - This folder consists of all routes of the application. 
                  It consists of private, protected, and all types of routes. Here we can even call our sub-route.


7.Config Folder - This folder consists of a configuration file where we store environment variables in config.js. 
                  We will use this file to set up multi-environment configurations in your application.

8.Services Folder - This folder will be added if we use redux in your project. 
                    Inside it, there are 3 folders named actions, reducers, and constant subfolders to manage states. 
                    The actions and reducers will be called in almost all the pages, so create actions, reducers & constants according to pages name.

9.Utils Folder - Utils folder consists of some repeatedly used functions that are commonly used in the project. 
                 It should contain only common js functions & objects like dropdown options, regex condition, data formatting, etc.