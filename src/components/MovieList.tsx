import React from 'react';
import { Movie } from '../type/MovieDB';
import { imageUrl } from '../services/moviedb';
import CardWithImage from './CardWithImage';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';

interface Props {
  movies: Movie[] | undefined;
}

const MovieItem = styled(Grid)`
  padding: 5px;
`;

const Container = styled(Grid)`
  padding: 5px;
`;

const MovieList = ({ movies }: Props) => {
  return (
    <Container container>
      {movies?.map((m) => (
        <MovieItem item key={m.id} xs={12} sm={6} md={3}>
          <CardWithImage
            title={m.title}
            description={m.overview}
            image={`${imageUrl}/${m.poster_path}`}
            adult={m.adult}
          />
        </MovieItem>
      ))}
    </Container>
  );
};

export default MovieList;
