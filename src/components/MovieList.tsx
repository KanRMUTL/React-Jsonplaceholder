import React from 'react';
import { Movie } from '../type/MovieDB';
import { imageUrl } from '../services/moviedb';
interface Props {
  movies: Movie[] | undefined;
}
const MovieList = ({ movies }: Props) => {
  return (
    <div>
      {movies?.map((m) => (
        <img src={`${imageUrl}/${m.poster_path}`} />
      ))}
    </div>
  );
};

export default MovieList;
