import React, { useRef } from "react";
import { useState } from "react";

import "./Table.scss";
import { Cell } from "../Cell/Cell";
import { generateGameData } from "../../utils/generateGameData";
import { createSecureContext } from "tls";

interface TableProps {
  size: number;
}

export const Table: React.FC<TableProps> = ({ size }) => {
  const [cells, setCells] = useState(generateGameData(size));
  const [clickCounter, setClickCounter] = useState(0);
  const [tablePointer, tableSet] = useState(false);

  const cartClickHandler = (index: number) => {
    tableSet(true);
    setTimeout(() => {
      tableSet(false);
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
          console.log(newCells[index]);
          if (
            clickedCellValue === newCells[index].value &&
            cell.id != newCells[index].id
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

  return (
    <div className={`table table-${size} ${tablePointer ? "deactive" : ""}`}>
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
  );
};
