import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Item.scss";
import Typography from "@mui/material/Typography";

// interface CardProps {}
export const Item: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const cardTapHandler = (): void => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <div className="parent" onClick={cardTapHandler}>
      <motion.div
        className="child"
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{ scale: 0.8, rotateY: -90 }}
      >
        {isOpen ? (
          <Typography variant="h2" sx={{ color: "white" }}>
            open
          </Typography>
        ) : (
          <Typography variant="h2" sx={{ color: "white" }}>
            closed
          </Typography>
        )}
      </motion.div>
      <Typography>{isOpen}</Typography>
    </div>
  );
};
