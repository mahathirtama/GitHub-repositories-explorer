import { Card, CardContent, Stack, Typography } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";

interface ICard {
  title: string
  star: number
  description: string | null
}

export const CardComponent = ({title, star, description}: ICard) => {
 
  return (
    <Card sx={{ minWidth: 275, backgroundColor: '#d4cec9' }}>
      <CardContent>
        <Stack direction="column">
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ height: '100%', width: '100%',  wordBreak: 'break-word' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{title}</Typography>
            <Stack direction="row" alignItems="center" spacing={1} sx={{ height: '100%' }}>
              <Typography>{ star}</Typography>
              <StarIcon />
            </Stack>
          </Stack>
          <Typography variant="body1">{description === null ? 'No description' : description}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};
