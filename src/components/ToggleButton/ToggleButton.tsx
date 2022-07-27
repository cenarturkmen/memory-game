import React from "react";
import { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import "./ToggleButton.scss";

interface MyToggleButonProps {
  updateTimeLimit: (arg: number) => void;
  updateIsTimeLimit: (arg: boolean) => void;
}
export const MyToggleButton: React.FC<MyToggleButonProps> = ({
  updateTimeLimit,
  updateIsTimeLimit,
}) => {
  const [alignment, setAlignment] = useState("nottimelimited");
  const [timeLimit, setTimeLimit] = useState("1");
  const [textfieldDisabled, setTextfieldDisabled] = useState(true);
  const toggleTextfieldDisabled = () =>
    setTextfieldDisabled((value: boolean) => !value); //for toggling textfieldDisabled

  const [toggleButtonOneDisabled, setToggleButtonOneDisabled] = useState(true);
  const [toggleButtonTwoDisabled, setToggleButtonTwoDisabled] = useState(false);
  const toggleToggleButtonOneDisabled = () =>
    setToggleButtonOneDisabled((value: boolean) => !value); //for toggling toggleButtonOneDisabled
  const toggleToggleButtonTwoDisabled = () =>
    setToggleButtonTwoDisabled((value: boolean) => !value); //for toggling toggleButtonTwoDisabled

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
    toggleTextfieldDisabled();
    toggleToggleButtonOneDisabled();
    toggleToggleButtonTwoDisabled();
    console.log(newAlignment);
    updateIsTimeLimit(newAlignment == "nottimelimited" ? false : true);
  };
  const handleChangeTime = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateTimeLimit(+event.target.value); //used + for converting string to number
    setTimeLimit(event.target.value);
  };

  return (
    <>
      <ToggleButtonGroup
        color="primary"
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
