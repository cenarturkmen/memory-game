import { Typography } from "@mui/material";
import React from "react";
import "./EndGame.scss";
import { EndGameAnimation } from "../EndGameAnimation/EndGameAnimation";

interface EndGameProps {
  updateIsTimeLimit: (arg: boolean) => void;
}

export const EndGame: React.FC<EndGameProps> = ({ updateIsTimeLimit }) => {
  updateIsTimeLimit(false);
  return (
    <div>
      <Typography variant="h2" color="secondary" align="center">
        You Win!
      </Typography>
      <Typography variant="h5" color="secondary" align="center">
        some fireworks will be here
      </Typography>
      <EndGameAnimation />
    </div>
  );
};
