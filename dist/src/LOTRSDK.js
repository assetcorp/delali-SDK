"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
class LOTRSDK {
    /**
     * Creates an instance of the LOTRSDK.
     * @param {string} apiKey - Your API key.
     */
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = "https://the-one-api.dev";
    }
    /**
     * A reusable method to make API requests with error handling and request options.
     * @template T - The expected response type.
     * @param {string} path - The API endpoint path.
     * @param {RequestOptions} [options] - Optional request options for pagination, sorting, and filtering.
     * @returns {Promise<T>} - A promise that resolves with the API response.
     * @throws Will throw an error if the API request fails.
     */
    async request(path, options) {
        const url = new URL(`/v2${path}`, this.baseUrl);
        if (options) {
            const { limit, page, offset, sort, filter } = options;
            if (limit)
                url.searchParams.append("limit", limit.toString());
            if (page)
                url.searchParams.append("page", page.toString());
            if (offset)
                url.searchParams.append("offset", offset.toString());
            if (sort)
                url.searchParams.append("sort", sort);
            if (filter) {
                for (const [key, value] of Object.entries(filter)) {
                    url.searchParams.append(key, value);
                }
            }
        }
        const response = await (0, node_fetch_1.default)(url.toString(), {
            headers: {
                Authorization: `Bearer ${this.apiKey}`,
                "Content-Type": `application/json`,
            },
        });
        if (!response.ok) {
            const errorResponse = (await response.json());
            throw new Error(errorResponse.message);
        }
        return (await response.json());
    }
    /**
     * Fetches a list of movies.
     * @param {RequestOptions} [options] - Optional request options for pagination, sorting, and filtering.
     * @returns {Promise<MovieListResponse>} - A promise that resolves with the list of movies.
     */
    async getMovies(options) {
        return this.request("/movie", options);
    }
    /**
     * Fetches a movie by its ID.
     * @param {string} id - The movie ID.
     * @returns {Promise<MovieListResponse>} - A promise that resolves with the movie information.
     */
    async getMovieById(id) {
        return this.request(`/movie/${id}`);
    }
    /**
     * Fetches the quotes for a movie by its ID.
     * @param {string} id - The movie ID.
     * @param {RequestOptions} [options] - Optional request options for pagination, sorting, and filtering.
     * @returns {Promise<QuoteListResponse>} - A promise that resolves with the list of movie quotes.
     */
    async getMovieQuotes(id, options) {
        return this.request(`/movie/${id}/quote`, options);
    }
    /**
     * Fetches a list of characters.
     * @param {RequestOptions} [options] - Optional request options for pagination, sorting, and filtering.
     * @returns {Promise<CharacterListResponse>} - A promise that resolves with the list of characters.
     */
    async getCharacters(options) {
        return this.request("/character", options);
    }
    /**
     * Fetches a character by its ID.
     * @param {string} id - The character ID.
     * @returns {Promise<CharacterListResponse>} - A promise that resolves with the character information.
     */
    async getCharacterById(id) {
        return this.request(`/character/${id}`);
    }
    /**
     * Fetches the quotes for a character by its ID.
     * @param {string} id - The character ID.
     * @param {RequestOptions} [options] - Optional request options for pagination, sorting, and filtering.
     * @returns {Promise<QuoteListResponse>} - A promise that resolves with the list of character quotes.
     */
    async getCharacterQuotes(id, options) {
        return this.request(`/character/${id}/quote`, options);
    }
    /**
     * Fetches a list of books.
     * @param {RequestOptions} [options] - Optional request options for pagination, sorting, and filtering.
     * @returns {Promise<BookListResponse>} - A promise that resolves with the list of books.
     */
    async getBooks(options) {
        return this.request("/book", options);
    }
    /**
     * Fetches a book by its ID.
     * @param {string} id - The book ID.
     * @returns {Promise<BookListResponse>} - A promise that resolves with the book information.
     */
    async getBookById(id) {
        return this.request(`/book/${id}`);
    }
    /**
     * Fetches the chapters for a book by its ID.
     * @param {string} id - The book ID.
     * @param {RequestOptions} [options] - Optional request options for pagination, sorting, and filtering.
     * @returns {Promise<ChapterListResponse>} - A promise that resolves with the list of book chapters.
     */
    async getBookChapters(id, options) {
        return this.request(`/book/${id}/chapter`, options);
    }
    /**
     * Fetches a list of quotes.
     * @param {RequestOptions} [options] - Optional request options for pagination, sorting, and filtering.
     * @returns {Promise<QuoteListResponse>} - A promise that resolves with the list of quotes.
     */
    async getQuotes(options) {
        return this.request("/quote", options);
    }
    /**
     * Fetches a quote by its ID.
     * @param {string} id - The quote ID.
     * @returns {Promise<QuoteListResponse>} - A promise that resolves with the quote information.
     */
    async getQuoteById(id) {
        return this.request(`/quote/${id}`);
    }
    /**
     * Fetches a list of chapters.
     * @param {RequestOptions} [options] - Optional request options for pagination, sorting, and filtering.
     * @returns {Promise<ChapterListResponse>} - A promise that resolves with the list of chapters.
     */
    async getChapters(options) {
        return this.request("/chapter", options);
    }
    /**
     * Fetches a chapter by its ID.
     * @param {string} id - The chapter ID.
     * @returns {Promise<ChapterListResponse>} - A promise that resolves with the chapter information.
     */
    async getChapterById(id) {
        return this.request(`/chapter/${id}`);
    }
}
exports.default = LOTRSDK;
