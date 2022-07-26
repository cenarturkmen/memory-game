import React from "react";
import { useState } from "react";

import "./Counter.scss";
import Countdown from "react-countdown";
import Dialog from "../Dialog/Dialog";

interface CounterProps {
  isDone: boolean;
  isActive: boolean;
}

export const Counter: React.FC<CounterProps> = ({ isDone }) => {
  const [isActive, setIsActive] = useState(true);
  const CountdownOver = () => {
    isDone = true;
    return (
      <>
        <span>Time is up!!!</span>
        <Dialog />
      </>
    );
  };

  return (
    <div className="counter">
      {isActive ? (
        <>
          <Countdown date={Date.now() + 1000 * 5 /*5sec*/}>
            <CountdownOver />
          </Countdown>
        </>
      ) : (
        ""
      )}
    </div>
  );
};
