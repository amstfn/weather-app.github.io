# Weather App

Welcome to my Weather App! This application allows users to search for and view current weather conditions and a 7-day forecast for any city. Let's explore the features, tools, libraries, and languages used in this app.

## Features

- **Search:** The app provides a search functionality that enables users to search for cities and retrieve real-time weather information.

- **Current Weather:** Users can view the current weather conditions, including temperature, weather description, feels like temperature, wind speed, humidity, and pressure.

- **Forecast:** The app displays a 7-day forecast, presenting weather information for each day, including weather description, minimum and maximum temperatures, pressure, humidity, cloud coverage, wind speed, and sea level.

## Technologies Used

The Weather App has been developed using the following technologies, tools, libraries, and languages:

- **React:** The app is built using the React library, which allows for efficient component-based UI development.

- **React Router:** React Router is used for client-side routing, enabling seamless navigation between different pages within the app.

- **React-Accessible-Accordion:** This library provides the accordion component, which allows users to show and hide sections of related content, enhancing the user experience.

- **React-Select-Async-Paginate:** This library provides the asynchronous pagination functionality for the search input, allowing users to search for cities dynamically and efficiently.

- **Axios:** Axios is used to make HTTP requests to the weather API and retrieve weather data.

- **CSS:** Custom CSS styles have been applied to enhance the visual presentation and layout of the app.

## API

The app utilizes a weather API to fetch weather data for the searched cities. The API used is:

- **OpenWeatherMap API:** The OpenWeatherMap API provides access to current weather data and forecasts. It is used to retrieve weather information for the searched cities.

## Installation and Setup

To run the Weather App locally, follow these steps:

1. Clone the repository to your local machine.
2. Install the required dependencies using a package manager like npm or yarn.
3. Obtain an API key from OpenWeatherMap by signing up on their website.
4. Create a `.env` file in the root directory of the project and add your API key as follows: `REACT_APP_WEATHER_API_KEY=your_api_key_here`.
5. Start the development server using the command provided in the project's scripts.
6. Open the app in your browser and start exploring the weather for different cities.

## Conclusion

The Weather App is a React-based application that allows users to search for and view current weather conditions and a 7-day forecast for cities worldwide. It leverages React components, React Router for navigation, external weather API for data retrieval, and various libraries for enhanced functionality. Feel free to customize and extend the app to suit your needs.

Thank you for using the Weather App, and I hope you find it useful! If you have any feedback or questions, please don't hesitate to reach out.
