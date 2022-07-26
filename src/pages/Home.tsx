import React, { useState } from "react";
import Slider from "@mui/material/Slider";

import "./Home.scss";
import { Table } from "../components/Table/Table";
import { Button, Typography } from "@mui/material";
import { HowToPlay } from "../components/HowToPlay/HowToPlay";
import { Counter } from "../components/Counter/Counter";

export const Home: React.FC = () => {
  const [tableSize, setTableSize] = useState(16);
  const [isGameStarted, setIsGameStarted] = useState(false);

  console.log(tableSize);
  return (
    <div className="home">
      {!isGameStarted ? (
        <>
          <Typography sx={{ marginTop: "5rem" }} variant="h3" color="primary">
            Select a table size:
          </Typography>
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
          <Button
            size="large"
            sx={{ margin: "2rem" }}
            className="startButton"
            color="primary"
            variant="contained"
            disabled={isGameStarted}
            onClick={() => setIsGameStarted(true)}
          >
            Create Game
          </Button>
          <div className="howToPlay">
            <HowToPlay />
          </div>
        </>
      ) : (
        <>
          <Button
            size="large"
            className="backButton"
            sx={{ position: "absolute", top: "1rem", left: "1rem" }}
            color="secondary"
            variant="contained"
            onClick={() => setIsGameStarted(false)}
          >
            Back
          </Button>
          <Counter isDone={false} isActive={true} />
          <Table size={tableSize} />
        </>
      )}
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
