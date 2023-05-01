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

  test("getCharacters should return a list of characters", async () => {
    const characters = await sdk.getCharacters();
    expect(characters).toBeDefined();
    expect(Array.isArray(characters.docs)).toBe(true);
    expect(characters.total).toBeGreaterThan(0);
  });

  test("getCharacterById should return a single character", async () => {
    const characterId = "5cd99d4bde30eff6ebccfea0";
    const character = await sdk.getCharacterById(characterId);
    expect(character.docs).toBeDefined();
    expect(character.docs[0]._id).toBe(characterId);
  });

  test("getCharacterQuotes should return a list of quotes for a character", async () => {
    const characterId = "5cd99d4bde30eff6ebccfc15";
    const options = {
      limit: 10,
    };
    const quotes = await sdk.getCharacterQuotes(characterId, options);
    expect(quotes).toBeDefined();
    expect(Array.isArray(quotes.docs)).toBe(true);
    expect(quotes.total).toBeGreaterThan(0);
  });

  test("getBooks should return a list of books", async () => {
    const books = await sdk.getBooks();
    expect(books).toBeDefined();
    expect(Array.isArray(books.docs)).toBe(true);
    expect(books.total).toBeGreaterThan(0);
  });

  test("getBookById should return a single book", async () => {
    const bookId = "5cf5805fb53e011a64671582";
    const book = await sdk.getBookById(bookId);
    expect(book.docs).toBeDefined();
    expect(book.docs[0]._id).toBe(bookId);
  });

  test("getBookChapters should return a list of quotes for a book", async () => {
    const bookId = "5cf5805fb53e011a64671582";
    const options = {
      limit: 10,
    };
    const quotes = await sdk.getBookChapters(bookId, options);
    expect(quotes).toBeDefined();
    expect(Array.isArray(quotes.docs)).toBe(true);
    expect(quotes.total).toBeGreaterThan(0);
  });

  test("getQuotes should return a list of quotes", async () => {
    const quotes = await sdk.getQuotes();
    expect(quotes).toBeDefined();
    expect(Array.isArray(quotes.docs)).toBe(true);
    expect(quotes.total).toBeGreaterThan(0);
  });

  test("getQuoteById should return a single quote", async () => {
    const quoteId = "5cd96e05de30eff6ebcce7e9";
    const quote = await sdk.getQuoteById(quoteId);
    expect(quote.docs).toBeDefined();
    expect(quote.docs[0]._id).toBe(quoteId);
  });

  test("getChapters should return a list of chapters", async () => {
    const chapters = await sdk.getChapters();
    expect(chapters).toBeDefined();
    expect(Array.isArray(chapters.docs)).toBe(true);
    expect(chapters.total).toBeGreaterThan(0);
  });

  test("getChapterById should return a single chapter", async () => {
    const chapterId = "6091b6d6d58360f988133b8b";
    const chapter = await sdk.getChapterById(chapterId);
    expect(chapter.docs).toBeDefined();
    expect(chapter.docs[0]._id).toBe(chapterId);
  });
});
