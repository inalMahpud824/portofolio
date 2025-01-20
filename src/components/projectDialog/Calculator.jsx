import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const Calculator = ({ onClose }) => {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(onClose);
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        <div className="flex items-center justify-between">
          <h1>Calculator App</h1>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Project My Simple Calculator is a straightforward yet functional
          web-based calculator application designed to perform basic arithmetic
          operations. Developed using modern web technologies, this project
          showcases a clean and intuitive user interface, ensuring ease of use
          for performing addition, subtraction, multiplication, and division
          tasks. more details, you can explore the project{"'"}s source code on
          GitHub or visit the live version here.
        </DialogContentText>
        <DialogContentText>
          Year Built: <span className="font-bold inline">2024</span>
        </DialogContentText>
        <DialogContentText>
          Skills:{" "}
          <span className="font-bold inline">
            Javascript, ReactJS, TailwindCSS
          </span>
          <img src="kalku-ss.png" alt="calculator" className="my-2" />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() =>
            (window.location.href =
              "https://github.com/inalMahpud824/my-simple-calculator")
          }
          variant="contained"
          sx={{ backgroundColor: "white", color: "black" }}
        >
          Source Code
        </Button>
        <Button
          onClick={() =>
            (window.location.href =
              "https://my-simple-calculator-ten.vercel.app/")
          }
          variant="contained"
          sx={{ backgroundColor: "gray", color: "white" }}
        >
          Live Preview
        </Button>
      </DialogActions>
    </Dialog>
  );
};


export default Calculator;