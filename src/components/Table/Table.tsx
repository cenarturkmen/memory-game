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

    if (clickCounter === 0) {
      newCells[index].isClicked = true;
      setCells(newCells);
    } else if (clickCounter === 1) {
      const newCells = [...cells];
      newCells.forEach((cell) => {
        if (cell.isClicked) {
          let clickedCellValue = cell.value;
          if (clickedCellValue === newCells[index].value) {
            setTimeout(() => {
              cell.isDone = true;
              newCells[index].isDone = true;
              cells[index].isOpen = false;
              cell.isOpen = false;
              cell.isClicked = false;
              
              setClickCounter(0);
              setCells(newCells);
            }, 500);
          } else {
            setTimeout(() => {
              newCells[index].isOpen = false;
              cell.isOpen = false;

              setClickCounter(0);
              setCells(newCells);
            }, 500);

          }
        }
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
          isClicked={cell.isClicked}
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
    isClicked: false,
    isDone: false,
  },
  {
    id: 2,
    value: "2",
    isOpen: false,
    isClicked: false,
    isDone: false,
  },
  {
    id: 3,
    value: "2",
    isOpen: false,
    isClicked: false,
    isDone: false,
  },
  {
    id: 4,
    value: "1",
    isOpen: false,
    isClicked: false,
    isDone: false,
  },
];
