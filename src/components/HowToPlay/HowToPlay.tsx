import { Typography } from "@mui/material";
import React from "react";

export const HowToPlay: React.FC = ({}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#201d1d",
        marginTop: "10rem",
        padding: "2rem",
        borderRadius: "10px",
      }}
    >
      <Typography variant="h4" color="secondary">
        How to play
      </Typography>
      <Typography variant="h6" color="secondary">
        1. Select a table size and create a game
      </Typography>
      <Typography variant="h6" color="secondary">
        2. Click on a cell to open it
      </Typography>
      <Typography variant="h6" color="secondary">
        3. Find the matching pairs before time runs out
      </Typography>
      <Typography variant="h6" color="secondary">
        4. You win if you find all the pairs
      </Typography>
    </div>
  );
};
