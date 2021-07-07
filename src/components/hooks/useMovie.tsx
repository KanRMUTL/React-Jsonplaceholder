import { useState, useEffect } from 'react';
import { fetchMovies } from '../../services/moviedb';
import { MovieResponsse } from '../../type/MovieDB';
interface Props {
  keyword: string;
}
const useMovie = ({ keyword }: Props) => {
  const [movieResponse, setMovieResponse] = useState<MovieResponsse>();

  useEffect(() => {
    if (keyword) {
      fetchMovies(keyword, setMovieResponse);
    } else {
      setMovieResponse(undefined);
    }
  }, [keyword]);
  return movieResponse;
};

export default useMovie;
