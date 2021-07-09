import { MovieResponsse } from '../type/MovieDB';
const apiEndpont: string = 'https://api.themoviedb.org/3';
const imageUrl: string = 'https://image.tmdb.org/t/p/w500';
const apiKey: string = 'e13394375a09fbd46812b9a5d6e44045';

// Path of service
const searchMovies = `${apiEndpont}/search/movie`;

const fetchMovies = (keyWord: string, setMovie: (response: MovieResponsse) => any, final: () => void) => {
  const query = `query=${keyWord}`;
  fetch(`${searchMovies}?api_key=${apiKey}&${query}`)
    .then((response) => response.json())
    .then((json) => setMovie(json))
    .catch((error) => console.error(error))
    .finally(final);
};

export { fetchMovies, imageUrl };
