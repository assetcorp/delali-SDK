import LOTRSDK from "../src/LOTRSDK";

// Replace this with a valid API key for the test
const apiKey = "";

describe("LOTRSDK", () => {
  const sdk = new LOTRSDK(apiKey);

  test("getMovies should return a list of movies", async () => {
    const movies = await sdk.getMovies();
    expect(movies).toBeDefined();
    expect(Array.isArray(movies.docs)).toBe(true);
    expect(movies.total).toBeGreaterThan(0);
  });

  test("getMovieById should return a single movie", async () => {
    const movieId = "5cd95395de30eff6ebccde56";
    const movie = await sdk.getMovieById(movieId);
    expect(movie.docs).toBeDefined();
    expect(movie.docs[0]._id).toBe(movieId);
  });

  test("getMovieQuotes should return a list of quotes for a movie", async () => {
    const movieId = "5cd95395de30eff6ebccde5d";
    const options = {
      limit: 10,
    };
    const quotes = await sdk.getMovieQuotes(movieId, options);
    expect(quotes).toBeDefined();
    expect(Array.isArray(quotes.docs)).toBe(true);
    expect(quotes.total).toBeGreaterThan(0);
  });

  // Add more test cases as needed
});
