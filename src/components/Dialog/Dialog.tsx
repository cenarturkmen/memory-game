import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

export default function AlertDialog() {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    window.location.href = "/";
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            YOU ARE BAD AND SLOW
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOpen}>Disagree</Button>
          <Button onClick={handleClick} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
