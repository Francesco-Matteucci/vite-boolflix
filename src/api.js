import axios from 'axios';
import { store } from './store.js';

export function searchMovies(query) {
  const apiKey = 'e2cdb0f611c8241030a5720ad2aaebdc';
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;

  axios
    .get(url)
    .then(response => {
      store.movies = response.data.results;
    })
    .catch(error => console.error('Errore nella chiamata API:', error));
}