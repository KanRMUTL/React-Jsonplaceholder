import React from 'react';
import {
  Card as CardMUI,
  FormControlLabel,
  Checkbox,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
  Box,
  Divider,
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import styled from 'styled-components';

interface Props {
  title: string | undefined;
  description: string | undefined;
  image: string | undefined;
  adult: boolean | undefined;
  rating: number | undefined;
}

const Card = styled(CardMUI)`
  min-height: 250px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardWithImage = ({ title, description, image, adult, rating }: Props) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia component="img" image={image} width="100%" />
        <CardContent>
          <Divider light={false} />
          <FormControlLabel
            control={<Checkbox disabled checked={adult} color="primary" />}
            label="Adult"
            labelPlacement="start"
          />
          <Typography gutterBottom variant="h6" component="h5">
            {title}
          </Typography>
          <Box display="flex">
            <Typography>Rating</Typography>
            <Rating name="simple-controlled" value={rating} max={10 / 2} />
          </Box>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardWithImage;
