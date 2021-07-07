import React from 'react';
import { Box } from '@material-ui/core';
import { useState } from 'react';
import useMovie from './hooks/useMovie';
import MovieList from './MovieList';
import Search from './Search';

function MovieDBContainer() {
  const [keyword, setKeyword] = useState('');
  const movieResponse = useMovie({ keyword });
  return (
    <Box display="flex" flexDirection="column" width="100%">
      <Box display="flex" justifyContent="flex-end" paddingTop={2} paddingRight={2}>
        <Search onSearch={setKeyword} />
      </Box>
      <Box display="flex">
        <MovieList movies={movieResponse?.results} />
      </Box>
    </Box>
  );
}

export default MovieDBContainer;
