import React from "react";
import { motion } from "framer-motion";
import SleddingIcon from "@mui/icons-material/Sledding";

import "./EndGameAnimation.scss";

interface EndGameAnimationProps {}

export const EndGameAnimation: React.FC<EndGameAnimationProps> = ({}) => {
  return (
    <motion.div
      animate={{
        x: [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300],
        y: [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300],
        rotateY: [0, 25, 0, -25, 0, 25, 0, -25, 0, 25],
        rotateX: [20, 0, -20, 0, 20, 0, -20, 0, 20, 0],
      }}
      transition={{
        duration: 2,
        times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        ease: "easeInOut",
        repeat: 0,
        repeatDelay: 1,
      }}
    >
      <SleddingIcon color="primary" sx={{ width: "100px", height: "100px" }} />
      <div className="snows">
        <motion.div
          animate={{
            scale: [1, 1.5, 1, 0.5, 1, 1.5, 1, 0.5, 1, 1.5, 1],
          }}
          transition={{
            duration: 0.5,
            times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
            ease: "easeInOut",
            repeat: 0,
            repeatDelay: 1,
          }}
          className="littleSnow1"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1, 0.5, 1, 1.5, 1, 0.5, 1, 1.5, 1],
          }}
          transition={{
            duration: 0.5,
            times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
            ease: "easeInOut",
            repeat: 0,
            repeatDelay: 1,
          }}
          className="littleSnow2"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1, 0.5, 1, 1.5, 1, 0.5, 1, 1.5, 1],
          }}
          transition={{
            duration: 0.5,
            times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
            ease: "easeInOut",
            repeat: 0,
            repeatDelay: 1,
          }}
          className="littleSnow3"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [20, 30, 20, 10, 20, 30, 10, 20],
          }}
          transition={{
            duration: 2,
            times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
            ease: "easeInOut",
            repeat: 0,
            repeatDelay: 1,
          }}
          className="snow1"
        />
        <motion.div
          className="snow2"
          animate={{
            scale: [0.8, 1.2, 1],
            rotate: [10, 20, 30, 10, 20, 30, 10, 20],
          }}
          transition={{
            duration: 2,
            times: [0, 0.25, 0.5, 0.75, 1],
            ease: "easeInOut",
            repeat: 0,
            repeatDelay: 1,
          }}
        />
        <motion.div
          className="snow3"
          animate={{
            scale: [1.1, 0.9, 1.1],
            rotate: [0, 10, 20, 30, 10, 20, 30, 10, 20],
          }}
          transition={{
            duration: 2,
            times: [0, 0.5, 1],
            ease: "easeInOut",
            repeat: 0,
            repeatDelay: 1,
          }}
        />
      </div>
    </motion.div>
  );
};
