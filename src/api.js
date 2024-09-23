import axios from 'axios';
import { store } from './store.js';

const apiKey = 'e2cdb0f611c8241030a5720ad2aaebdc';

// Creo una funzione per cercare film, serie TV e attori con una singola chiamata
export function searchAll(query) {
  const url = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${query}`;

  axios
    .get(url)
    .then(response => {
      const results = response.data.results;
      store.movies = [...results];
    })
    .catch(error => console.error('Errore nella chiamata API', error));
}