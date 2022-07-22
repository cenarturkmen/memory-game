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
        className={`child child-${size}`}
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
            <img className={`openImage openImage-${size}`} src={img} alt={value}></img>
          </div>
        ) : (
          ""
        )}
        {!isOpen && !isDone ? (
          <Typography variant="h2" sx={{ color: "white" }}>
            closed
          </Typography>
        ) : (
          ""
        )}
        {isDone && (
          <Typography variant="h2" sx={{ color: "white" }}>
            done
          </Typography>
        )}
      </motion.div>
    </div>
  );
};
