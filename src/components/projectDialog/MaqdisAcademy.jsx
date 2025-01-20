import {
  // Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const MaqdisAcademy = ({ onClose }) => {
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
          <h1>Maqdis Academy</h1>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          This is my intern project at the Yayasan Maqdis. Maqdis Academy is a
          comprehensive company profile website designed to support the
          digitalization of corporate information. The website features detailed
          product information, a list of available internship positions, and an
          online application system that allows users to apply effortlessly.
          Equipped with an intuitive CMS dashboard, administrators can
          efficiently manage applications and applicant data, from reviewing to
          processing and storing records. Additionally, the responsive design
          provides an optimal user experience on both desktop and mobile
          devices. This project aims to enhance accessibility and efficiency in
          managing corporate information and recruitment processes.
        </DialogContentText>
        <DialogContentText>
          Year Built: <span className="font-bold inline">2024</span>
        </DialogContentText>
        <DialogContentText>
          Skills:{" "}
          <span className="font-bold inline">
            React, DaisyUI, Axios, TailwindCSS, Javascript
          </span>
          <img
            src="/maqdis/herosection.png"
            alt="herosection"
            className="my-2"
          />
          <img
            src="/maqdis/home-dashboard.png"
            alt="dashboard home"
            className="my-2"
          />
          <img src="/maqdis/cms-intern.png" alt="cms intern" className="my-2" />
          <img
            src="/maqdis/my-aplicant.png"
            alt="my aplicant"
            className="my-2"
          />
          <img
            src="/maqdis/setting-aplicant.png"
            alt="setting aplicant"
            className="my-2"
          />
          <img
            src="/maqdis/intern-info.png"
            alt="intern info"
            className="my-2 max-h-[252px] mx-auto"
          />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {/* <Button
          onClick={() =>
            (window.location.href = "https://github.com/CareerConnect-Rakamin")
          }
          variant="contained"
          sx={{ backgroundColor: "white", color: "black" }}
        >
          Source Code
        </Button> */}
      </DialogActions>
    </Dialog>
  );
};
export default MaqdisAcademy;
