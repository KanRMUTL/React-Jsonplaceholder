import React from 'react';
import { Card, CardHeader, CardContent, Avatar, Typography, CardActions } from '@material-ui/core';

interface Props {
  avatarChar: string | number;
  headerTitle: string;
  content: string;
  Action?: JSX.Element;
}
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
