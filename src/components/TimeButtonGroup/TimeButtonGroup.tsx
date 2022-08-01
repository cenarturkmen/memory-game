import React from "react";
import { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import "./TimeButtonGroup.scss";

interface TimeButtonGroupProps {
  updateTimeLimit: (arg: number) => void;
  updateIsTimeLimit: (arg: boolean) => void;
}
export const TimeButtonGroup: React.FC<TimeButtonGroupProps> = ({
  updateTimeLimit,
  updateIsTimeLimit,
}) => {
  const [alignment, setAlignment] = useState("nottimelimited");
  const [timeLimit, setTimeLimit] = useState(1);
  const [textfieldDisabled, setTextfieldDisabled] = useState(true);
  const toggleTextfieldDisabled = () =>
    setTextfieldDisabled((value: boolean) => !value); //for toggling textfieldDisabled

  const [toggleButtonOneDisabled, setToggleButtonOneDisabled] = useState(true);
  const [toggleButtonTwoDisabled, setToggleButtonTwoDisabled] = useState(false);
  const buttonOneDisabled = () =>
    setToggleButtonOneDisabled((value: boolean) => !value); //for toggling toggleButtonOneDisabled
  const buttonTwoDisabled = () =>
    setToggleButtonTwoDisabled((value: boolean) => !value); //for toggling toggleButtonTwoDisabled

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
    toggleTextfieldDisabled();
    buttonOneDisabled();
    buttonTwoDisabled();
    console.log(newAlignment);
    updateIsTimeLimit(newAlignment === "nottimelimited" ? false : true);
  };
  const handleChangeTime = (event: React.ChangeEvent<HTMLInputElement>) => {
    var timeValue = +event.target.value; //used + for converting string to number
    if (timeValue > 1440) timeValue = 1440; //max acceptable value (1day)
    if (timeValue < 0) timeValue = 0; //min acceptable value

    setTimeLimit(timeValue);
    updateTimeLimit(timeValue);
  };

  return (
    <>
      <ToggleButtonGroup
        color="secondary"
        value={alignment}
        exclusive
        onChange={handleChange}
      >
        <ToggleButton disabled={toggleButtonOneDisabled} value="nottimelimited">
          Not Time Limited
        </ToggleButton>
        <ToggleButton disabled={toggleButtonTwoDisabled} value="timelimited">
          Time Limited
        </ToggleButton>
      </ToggleButtonGroup>

      <Input
        placeholder="Enter Time"
        disabled={textfieldDisabled}
        type="number"
        endAdornment={<InputAdornment position="end">Min</InputAdornment>}
        value={timeLimit}
        onChange={handleChangeTime}
      />
    </>
  );
};
