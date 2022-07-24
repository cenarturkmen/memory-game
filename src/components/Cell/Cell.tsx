import React from "react";
import { motion } from "framer-motion";
import "./Cell.scss";
import Typography from "@mui/material/Typography";

interface CellProps {
  index: number;
  value: string;
  img: string;
  isOpen: boolean;
  isClicked: boolean;
  isDone: boolean;
  size: number;
  onClick: (index: number) => void;
}

export const Cell: React.FC<CellProps> = ({
  index,
  value,
  img,
  isOpen,
  isClicked,
  isDone,
  size,
  onClick,
}) => {
  return (
    <div className={`parent parent-${size}`} onClick={() => onClick(index)}>
      <motion.div
        className={`child child-${size}` + (isDone ? " done" : "")}
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{ scale: 0.8, rotateY: -90 }}
      >
        {isOpen && !isDone ? (
          <div>
            <Typography variant="h2" align="center" sx={{ color: "white" }}>
              {value}
            </Typography>
            <img
              className={`openImage openImage-${size}`}
              src={img}
              alt={value}
            ></img>
          </div>
        ) : (
          ""
        )}
        {!isOpen && !isDone ? (
          <motion.div
            className="closedInner"
            whileHover={{
              scale: 1.1,
              borderRadius: "80%",
            }}
          >
            {" "}
            <motion.div
              className="closedInner2"
              whileHover={{
                scale: 1.2,
                borderRadius: "80%",
              }}
            ></motion.div>
          </motion.div>
        ) : (
          ""
        )}
        {isDone && (
          <div>
            <Typography variant="h2" align="center" sx={{ color: "white" }}>
              {value}
            </Typography>
            <img
              className={`openImage openImage-${size}`}
              src={img}
              alt={value}
            ></img>
          </div>
        )}
      </motion.div>
    </div>
  );
};
