import React from 'react';
import { Box, ListItem, Backdrop, CircularProgress, ListItemText } from '@material-ui/core';
import { useState } from 'react';
import useMovie from './hooks/useMovie';
import MovieList from './MovieList';
import Search from './Search';
import styled from 'styled-components';
import EmptyState from './EmptyState';

const BoxSearch = styled(Box)`
  padding: 0;
  justify-content: center;
  padding: 12px;
  ${({ theme }) => theme.breakpoints.up('xs')} {
    justify-content: center;
  }
  ${({ theme }) => theme.breakpoints.up('sm')} {
    justify-content: center;
  }
  ${({ theme }) => theme.breakpoints.up('md')} {
    justify-content: flex-end;
    padding-right: 12px;
  }
`;

function MovieDBContainer() {
  const [keyword, setKeyword] = useState('');
  const movieResponse = useMovie({ keyword });
  return (
    <Box display="flex" flexDirection="column" width="100%">
      <BoxSearch display="flex" justifyContent="flex-end" paddingTop={2} paddingRight={2}>
        <Search onSearch={setKeyword} />
      </BoxSearch>
      <Box display="flex">
        {movieResponse?.results?.length ? (
          <MovieList movies={movieResponse?.results} />
        ) : (
          <EmptyState label="No Result." />
        )}
        {}
      </Box>
    </Box>
  );
}

export default MovieDBContainer;
