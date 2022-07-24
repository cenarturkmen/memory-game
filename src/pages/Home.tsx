import React, { useState } from "react";
import Slider from "@mui/material/Slider";

import { Table } from "../components/Table/Table";
import { Button, Typography } from "@mui/material";

export const Home: React.FC = () => {
  const [tableSize, setTableSize] = useState(16);
  const [isGameStarted, setIsGameStarted] = useState(false);

  console.log(tableSize);
  return (
    <div>
      <Button
        color="primary"
        variant="contained"
        onClick={() => setIsGameStarted(true)}
      >
        {" "}
        Create a game
      </Button>
      <Typography variant="h4">Select a table size:</Typography>
      <Slider
        aria-label="Temperature"
        defaultValue={marks[1].value}
        getAriaValueText={valuetext}
        step={null}
        marks={marks}
        min={marks[0].value}
        max={marks[marks.length - 1].value}
        onChange={(event: any, value) => {
          setTableSize(value as number);
        }}
      />
      {isGameStarted && <Table size={tableSize} />}
    </div>
  );
};

function valuetext(value: number) {
  return `${value}°C`;
}

const marks = [
  {
    value: 4,
    label: "2x2",
  },
  {
    value: 16,
    label: "4x4",
  },
  {
    value: 36,
    label: "6x6",
  },

  {
    value: 64,
    label: "8x8",
  },
];
