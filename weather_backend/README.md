# GraphQL Weather Backend

This project features a sophisticated GraphQL API designed to retrieve precise weather information based on geographical coordinates (latitude and longitude). It seamlessly integrates with an external weather data service, enhancing reliability through sophisticated caching, retry mechanisms, and comprehensive error handling strategies.

## Key Features

- **Dynamic Weather Data Retrieval**: Access real-time weather data by specifying latitude and longitude coordinates.
- **Robust External API Integration**: Incorporates an external weather service with built-in caching to optimize response times and minimize unnecessary external API calls.
- **Advanced Reliability Measures**: Employs retry logic and error handling to ensure consistent and dependable data access, even in the face of intermittent service interruptions.
- **Dockerized Deployment**: Simplifies the setup, development, and deployment process via Docker, enabling consistent environments across development and production stages.
- **Comprehensive Testing Suite**: Ensures the reliability and integrity of main functionalities through a combination of unit and integration tests, rigorously verifying each aspect of the server's operations.
- **Production-Ready**: The server is not just a concept; it has been deployed to a Production environment, providing enhanced visibility and real-world testing to ensure it meets the demands of live applications.

## Getting Started

### Prerequisites

- Docker
- Node.js (for local development)

### Installation

1. **Clone the Repository**

   ```
   git clone https://github.com/jieliu218/alphasense.git
   cd weather_backend
   ```

2. **Environment Setup**

   Create a `.env` file under the root directory.

   ```
   OPEN_METEO_BASE_URL = "https://api.open-meteo.com/v1/"
   ```

### Start the Server

- **Local**

   ```
   npm i
   npm run dev
   ```

   Output:

   ```
   🚀 Server listening at: http://localhost:4000/
   ```

- **Docker**

   Run it locally with Docker:

   ```
   docker-compose build
   docker-compose up
   ```

   Output:

   ```
   🚀 Server listening at: http://localhost:4000/
   ```

### Production

It has been deployed to a Production environment. Visit Apollo Sandbox with URL:

[https://alphasense-weather-app-stxq8.ondigitalocean.app/](https://alphasense-weather-app-stxq8.ondigitalocean.app/)
