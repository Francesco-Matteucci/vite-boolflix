import axios from 'axios';
import { store } from './store.js';

const apiKey = 'e2cdb0f611c8241030a5720ad2aaebdc';

// Chiamata per ottenere film, serie TV e attori con una singola chiamata
export function searchAll(query) {
  const url = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${query}`;

  axios
    .get(url)
    .then(response => {
      const results = response.data.results;
      store.movies = [...results];
    })
    .catch(error => console.error('Errore nella chiamata API', error));
};

// Chiamata per ottenere film più visti
export function searchTopMovies() {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

  return axios
      .get(url)
      .then(response => response.data.results)
      .catch(error => console.error('Errore nella chiamata API per i film più visti:', error));
};

// Chiamata per ottenere film d'azione
export function getActionMovies() {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=28`;
  return axios.get(url)
    .then(response => response.data.results)
    .catch(error => console.error('Errore nel recupero dei film d\'azione:', error));
}

// Chiamata per ottenere commedie
export function getComedyMovies() {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=35`;
  return axios.get(url)
    .then(response => response.data.results)
    .catch(error => console.error('Errore nel recupero delle commedie:', error));
}

// Chiamata per ottenere anime
export function getAnimationMovies() {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=16`;
  return axios.get(url)
    .then(response => response.data.results)
    .catch(error => console.error('Errore nel recupero dei film di animazione:', error));
}