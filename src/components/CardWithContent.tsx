import React from 'react';
import { Card as CardMUI, CardHeader, CardContent, Avatar, Typography, CardActions } from '@material-ui/core';
import styled from 'styled-components';

interface Props {
  avatarChar: string | number;
  headerTitle: string;
  content: string;
  Action?: JSX.Element;
}

const Card = styled(CardMUI)`
  min-height: 250px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function CardWithContent({ avatarChar, headerTitle, content, Action }: Props) {
  return (
    <Card>
      <CardHeader avatar={<Avatar>{avatarChar}</Avatar>} title={headerTitle} />
      <CardContent>
        <Typography>{content}</Typography>
      </CardContent>
      <CardActions>{Action}</CardActions>
    </Card>
  );
}

export default CardWithContent;
