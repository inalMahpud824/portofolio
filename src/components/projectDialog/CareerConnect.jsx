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

const CareerConnect = ({ onClose }) => {
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
          <h1>CareerConnect</h1>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          This is my group project. CareerConnect is a web platform that
          connects companies with job seekers, allowing companies to post
          vacancies and search for candidates, while job seekers can browse and
          apply to suitable jobs. Built with Next.js as well as Express.js
          technology, the site offers an intuitive user experience and effective
          application management.
        </DialogContentText>
        <DialogContentText>
          Year Built: <span className="font-bold inline">2023</span>
        </DialogContentText>
        <DialogContentText>
          Skills:{" "}
          <span className="font-bold inline">
            Javascript, NextJs, ChakraUI, Axios
          </span>
          <img src="careerConect-ss-home.png" alt="" className="my-2" />
          <img src="careerConect-ss-list.png" alt="" className="my-2" />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() =>
            (window.location.href = "https://github.com/CareerConnect-Rakamin")
          }
          variant="contained"
          sx={{ backgroundColor: "white", color: "black" }}
        >
          Source Code
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default CareerConnect;
