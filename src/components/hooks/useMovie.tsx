import { useState, useEffect } from 'react';
import { fetchMovies } from '../../services/moviedb';
import { MovieResponsse } from '../../type/MovieDB';
import { useLoadingUpdate } from '../useContext/LoadingContext';

interface Props {
  keyword: string;
}

const useMovie = ({ keyword }: Props) => {
  const loadingUpdate = useLoadingUpdate();
  const [movieResponse, setMovieResponse] = useState<MovieResponsse>();

  useEffect(() => {
    if (keyword) {
      loadingUpdate(true);
      fetchMovies(keyword, setMovieResponse, () => loadingUpdate(false));
    } else {
      setMovieResponse(undefined);
    }
  }, [keyword]);
  return movieResponse;
};

export default useMovie;
