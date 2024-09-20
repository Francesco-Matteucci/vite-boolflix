import axios from 'axios';
import { store } from './store.js';

const apiKey = 'e2cdb0f611c8241030a5720ad2aaebdc';

// Creo una funzione per cercare i film
export function searchMovies(query) {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;

  axios
    .get(url)
    .then(response => {
      const movies = response.data.results;
      // Utilizzo lo spread operator per aggiornare lo store con i risultati dei film
      store.movies = [...movies];
    })
    .catch(error => console.error('Errore nella chiamata API per i film:', error));
}

// Creo una funzione per cercare le serie TV
export function searchTVSeries(query) {
  const url = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${query}`;

  axios
    .get(url)
    .then(response => {
      const tvSeries = response.data.results;
     // Utilizzo lo spread operator per aggiornare lo store con i risultati delle serie TV insieme a quelle dei film
      store.movies = [...store.movies, ...tvSeries];
    })
    .catch(error => console.error('Errore nella chiamata API per le serie TV:', error));
}