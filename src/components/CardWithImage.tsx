import React from 'react';
import {
  Card as CardMUI,
  FormControlLabel,
  Checkbox,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
} from '@material-ui/core';
import styled from 'styled-components';

interface Props {
  title: string | undefined;
  description: string | undefined;
  image: string | undefined;
  adult: boolean | undefined;
}

const Card = styled(CardMUI)`
  min-height: 250px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardWithImage = ({ title, description, image, adult }: Props) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia component="img" image={image} width="100%" />
        <CardContent>
          <FormControlLabel control={<Checkbox disabled checked={adult} color="primary" />} label="Adult" />
          <Typography gutterBottom variant="h6" component="h5">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardWithImage;
