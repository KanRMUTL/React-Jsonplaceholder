import React from 'react';
import { Box } from '@material-ui/core';
import { useState } from 'react';
import useMovie from './hooks/useMovie';
import { InputBase, Paper, IconButton } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';
import MovieList from './MovieList';

function MovieDBContainer() {
  const [keyword, setKeyword] = useState('wow');
  const movieResponse = useMovie({ keyword });

  return (
    <Box display="flex" flexDirection="column">
      <Box display="flex">
        <Paper component="form">
          <InputBase value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="Search Movies" />
          <IconButton type="submit" aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </Box>
      <Box display="flex">
        <MovieList movies={movieResponse?.results} />
      </Box>
    </Box>
  );
}

export default MovieDBContainer;
