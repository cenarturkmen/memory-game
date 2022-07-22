import React from "react";
import { motion } from "framer-motion";
import "./Cell.scss";
import Typography from "@mui/material/Typography";

interface CellProps {
  index: number;
  value: string;
  isOpen: boolean;
  isClicked: boolean;
  isDone: boolean;
  onClick: (index: number) => void;
}

export const Cell: React.FC<CellProps> = ({
  index,
  value,
  isOpen,
  isClicked,
  isDone,
  onClick,
}) => {
  return (
    <div className="parent" onClick={() => onClick(index)}>
      <motion.div
        className="child"
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{ scale: 0.8, rotateY: -90 }}
      >
        {isOpen && !isDone ? (
          <Typography variant="h2" sx={{ color: "white" }}>
            {value}
          </Typography>
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
