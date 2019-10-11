import axios from "axios";
import config from "./config";

const DEFAULT_HPP = "15";

const PATH_BASE = "https://www.googleapis.com/books/v1";
const PATH_SEARCH = "/volumes";
const PARAM_SEARCH = "q=";
const PARAM_HPP = "maxResults=";
const API_KEY = config.SECRET_KEY;

export default {
  getGoogleBooks: function(search) {
    return axios.get(
      `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${search}&${PARAM_HPP}${DEFAULT_HPP}&key=${API_KEY}`
    );
  },

  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },

  getBookshelf: function() {
    return axios.get("/api/books");
  },

  deleteBook: function(id) {
    return axios.delete(`/api/books/${id}`);
  }
};
