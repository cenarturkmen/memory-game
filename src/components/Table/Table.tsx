import React, { useEffect } from "react";
import { useState } from "react";

import "./Table.scss";
import { Cell } from "../Cell/Cell";
import { Counter } from "../Counter/Counter";
import { generateGameData } from "../../utils/generateGameData";
import { EndGame } from "../EndGame/EndGame";

interface TableProps {
  size: number;
  updateIsTimeLimit: (arg: boolean) => void;
}

export const Table: React.FC<TableProps> = ({ size, updateIsTimeLimit }) => {
  const [cells, setCells] = useState(generateGameData(size));
  const [clickCounter, setClickCounter] = useState(0);
  const [tableDisabled, setTableDisabled] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  const cartClickHandler = (index: number) => {
    setTableDisabled(true);
    setTimeout(() => {
      setTableDisabled(false);
    }, 500);
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
          if (
            clickedCellValue === newCells[index].value &&
            cell.id !== newCells[index].id
          ) {
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
              newCells[index].isClicked = false;
              cell.isClicked = false;
              setClickCounter(0);
              setCells(newCells);
            }, 500);
          }
        }
      });
    } else {
      setClickCounter(0);
    }
  };

  useEffect(() => {
    const newCells = [...cells];
    let endGameCounter = 0;
    newCells.forEach((cell) => {
      if (cell.isDone) {
        endGameCounter++;
        if (endGameCounter === size) {
          setIsGameOver(true);
        }
      }
    });
  }, [cells, size]);

  return (
    <>
      {!isGameOver ? (
        <div
          className={`table table-${size} ${tableDisabled ? "deactive" : ""}`}
        >
          {cells.map((cell, index: number) => (
            <Cell
              key={index}
              index={index}
              value={cell.value}
              img={cell.img}
              isOpen={cell.isOpen}
              isClicked={cell.isClicked}
              isDone={cell.isDone}
              size={size}
              onClick={(index) => cartClickHandler(index)}
            />
          ))}
        </div>
      ) : (
        <EndGame updateIsTimeLimit={updateIsTimeLimit} />
      )}
    </>
  );
};
