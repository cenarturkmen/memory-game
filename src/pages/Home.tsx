import React, { useState } from "react";
import Slider from "@mui/material/Slider";

import "./Home.scss";
import { Table } from "../components/Table/Table";
import { Button, Typography } from "@mui/material";
import { HowToPlay } from "../components/HowToPlay/HowToPlay";
import { Counter } from "../components/Counter/Counter";
import { TimeButtonGroup } from "../components/TimeButtonGroup/TimeButtonGroup";
import PsychologyIcon from "@mui/icons-material/Psychology";

export const Home: React.FC = () => {
  const [tableSize, setTableSize] = useState(16);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [timeLimit, setTimeLimit] = useState(1);
  const [isTimeLimit, setIsTimeLimit] = useState(false);

  const updateTimeLimit = (timeLimit: number): void => {
    setTimeLimit(timeLimit);
  };
  const updateIsTimeLimit = (isTimeLimit: boolean): void => {
    setIsTimeLimit(isTimeLimit);
  };

  console.log(tableSize);
  return (
    <div className="home">
      {!isGameStarted ? (
        <>
          <Typography variant="h3" color="primary">
            <PsychologyIcon sx={{ width: "60px", height: "60px" }} />
            Memory Game
          </Typography>

          <Typography sx={{ marginTop: "5rem" }} variant="h4" color="secondary">
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
          <TimeButtonGroup
            updateIsTimeLimit={updateIsTimeLimit}
            updateTimeLimit={updateTimeLimit}
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
            onClick={() => {
              setIsGameStarted(false);
              setIsTimeLimit(false);
              setTimeLimit(1);
            }}
          >
            Back
          </Button>
          {isTimeLimit ? <Counter isDone={false} value={timeLimit} /> : ""}
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
