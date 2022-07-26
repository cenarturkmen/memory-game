import { Typography } from "@mui/material";
import React from "react";
import "./EndGame.scss";

interface EndGameProps {}

export const EndGame: React.FC<EndGameProps> = ({}) => {
  return (
    <div>
      <Typography variant="h2" color="secondary">
        Game Over
      </Typography>
      <Typography variant="h5" color="secondary">
        some fireworks will be here
      </Typography>
    </div>
  );
};
