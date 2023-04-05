# Lord of the Rings SDK Design

The Lord of the Rings SDK is designed to provide a simple type-safe way to interact with the Lord of the Rings API in Node.js applications. This document outlines the design choices made in creating the SDK.

## Main SDK Class

The main SDK class, LOTRMovieSDK, is responsible for handling API requests, error handling, and processing request options like pagination, sorting, and filtering. The SDK supports the following movie endpoints:

```txt
/movie
/movie/{id}
/movie/{id}/quote
```

## Interface

The SDK uses TypeScript to provide type-safe interfaces for API responses and request options. This helps users understand the expected data structures and enables IDEs to provide autocompletion and type checking.

## Error Handling

The SDK includes error handling in the request method, which checks for non-successful HTTP status codes and throws an error with the appropriate error message. This approach ensures that users can catch errors gracefully in their application and handle them accordingly.

## Reusable Components

To avoid code duplication, the SDK includes a reusable request method that handles making API requests, processing request options, and error handling. This method is used by other methods in the class to make specific API calls.

## Fetch instead of Axios

The SDK uses the `node-fetch` library instead of `Axios` for making HTTP requests. I made this decision based on the fact that `fetch` is a more lightweight alternative to `Axios`.

## Pagination, Sorting, and Filtering

The SDK supports pagination, sorting, and filtering by processing the request options provided by the user. These options are passed as an object to the relevant methods, which then include them as query parameters in the API request.

## Code Quality and Readability

The SDK is written in a clean, well-commented, and readable style, using JSDoc comments for method descriptions and parameter explanations. This ensures that users can easily understand the code and modify it if needed.

## NPM Package

The SDK is designed to be published as an npm package, allowing users to easily install and use it in their projects.
