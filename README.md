# The Lord of the Rings SDK

A Node.js SDK for accessing the Lord of the Rings API.

## Installation

Install the SDK using npm:

```bash
npm install @delali/lotrsdk
```

## Usage

Initialize the SDK with your API key:

```ts
import LOTRSDK from '@dealli/lotrsdk';

const apiKey = 'your-api-key';
const sdk = new LOTRSDK(apiKey);
```

Use the SDK to fetch movies, movie details, and quotes:

```ts
const movies = await sdk.getMovies();
const movie = await sdk.getMovieById(movieId);
const quotes = await sdk.getMovieQuotes(movieId);
```

## Pagination, Sorting, and Filtering

The SDK supports pagination, sorting, and filtering using the following options:

```ts
const options = {
  limit: 100,
  page: 2,
  offset: 3,
  sort: 'name:asc',
  filter: { name: 'Gandalf', race: 'Hobbit,Human' },
};

const movies = await sdk.getMovies(options);
```

## Testing

The SDK includes a suite of tests to ensure that the methods are working correctly. To run the tests, use the following command:

```bash
npm test
```

The tests use the Jest testing framework
