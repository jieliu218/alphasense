# Weather Widget (Front-end)

The Weather Widget is a dynamic, React-based web component that leverages GraphQL to fetch weather data for different locations. It's designed to be flexible, allowing integration into any front-end framework.

## Key features

- GraphQL Data Fetching: Utilizes @tanstack/react-query and graphql-request for efficient data fetching with GraphQL. The data fetch interval is set to every 900 seconds, ensuring up-to-date weather information.
- Caching: Implements caching mechanisms to reduce network requests and load data quickly, enhancing the user experience.
- Framework Agnostic: As a React-based web component, it can be seamlessly integrated into any framework-based front-end, providing versatility in development.
- Theme Support: Adopts the same theme definition as MUI (Material-UI), allowing for easy customization and consistency across your application.
- Location Customization: Users can specify latitude and longitude to fetch weather data for different locations, offering global weather information at your fingertips.
- Visibility Control: Features attributes to hide and show hourly weather data, giving users control over the information displayed.
- Unit Testing: Comes with main unit tests added, ensuring reliability and stability of the widget.
- CDN and NPM Support: The Weather Widget has been deployed to npm for easy installation and CDN via jsFiddle for quick integration.

## Installation

The Weather Widget has been deployed to npm for easy installation and CDN via jsFiddle for quick integration. Here are two ways to use it:

### Via npm

To install the Weather Widget via npm, run the following command in your project directory:

````javascript
npm i @liujie2017/weather-widget@latest
```javascript

Then, you can import and use the widget in your React application:

```javascript
import { green, purple } from "@mui/material/colors";
import "@liujie2017/weather-widget"

import "./App.css";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ["weather-widget"]: any;
    }
  }
}

function App() {
  const themePurple = {
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: green[500],
      },
      warning: {
        main: purple[500],
        light: purple[100],
      },
    },
  };
  return (
    <>
     <weather-widget latitude={-40} longitude={74} theme={JSON.stringify(themePurple)}></weather-widget>
    </>
  );
}

export default App;
````

### Via CDN (jsFiddle)

For quick prototyping or integration without npm, you can use the Weather Widget directly in your HTML through a CDN provided by jsFiddle. Include the following script tag in your HTML file:

```html
<script src="https://cdn.jsdelivr.net/npm/@liujie2017/weather-widget@0.0.1/dist/index.es.min.js"></script>
```

After including the script, you can use the widget in your HTML as follows:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
  </head>
  <body>
    <div id="root"></div>
    <weather-widget
      latitude="90"
      longitude="89"
      theme='{
        "palette":{
          "primary":{
              "main":"#917ca9"
          },
          "secondary":{
              "main":"#a4bc8a"
          },
          "warning":{
              "main":"#917ca9",
              "light":"#bcaacf"
          }
        }
    }'
    ></weather-widget>
    <script
      type="module"
      src="https://cdn.jsdelivr.net/npm/@liujie2017/weather-widget@0.0.1/dist/index.es.min.js"
    ></script>
  </body>
</html>
```

## Customization

The Weather Widget supports several props for customization:

- latitude and longitude: Specify the location to fetch weather data for.
- show: Boolean attribute to control the visibility of hourly weather data.
- theme: Customize the widget's appearance using MUI theme options.

## Local dev

````javascript
npm i
npm run dev
```javascript
````
