import React from "react";
import { useState } from "react";

import "./Table.scss";
import { Cell } from "../Cell/Cell";

export const Table: React.FC = () => {
  const [cells, setCells] = useState(fakeData);
  const [clickCounter, setClickCounter] = useState(0);

  const cartClickHandler = (index: number) => {
    const newCells = [...cells];
    newCells[index].isOpen = !newCells[index].isOpen;
    setCells(newCells);

    setClickCounter(clickCounter + 1);

    console.log(clickCounter);
    if (clickCounter === 1) {
      const newCells = [...cells];
      const lastIndex = index;
      const lastValue = newCells[lastIndex].value;
      newCells.forEach((cell) => {
        if (cell.id !== lastIndex && cell.value === lastValue) {
          cell.isDone = true;
          cell.isOpen = false;
        }
      });
    }

    if (clickCounter === 2) {
      setClickCounter(0);
      const newCells = [...cells];
      newCells.forEach((cell) => {
        cell.isOpen = false;
      });
    }

  };

  return (
    <div className="table">
      {cells.map((cell, index: number) => (
        <Cell
          key={index}
          index={index}
          value={cell.value}
          isOpen={cell.isOpen}
          isDone={cell.isDone}
          onClick={(index) => cartClickHandler(index)}
        />
      ))}
    </div>
  );
};

const fakeData = [
  {
    id: 1,
    value: "1",
    isOpen: false,
    isDone: false,
  },
  {
    id: 2,
    value: "2",
    isOpen: false,
    isDone: false,
  },
  {
    id: 3,
    value: "2",
    isOpen: false,
    isDone: false,
  },
  {
    id: 4,
    value: "1",
    isOpen: false,
    isDone: false,
  },
];
