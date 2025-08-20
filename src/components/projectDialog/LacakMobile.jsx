import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

import map from "../../assets/img/project/lacak-mobile/map-device.png"
import replay from "../../assets/img/project/lacak-mobile/repolay.png"
import trip from "../../assets/img/project/lacak-mobile/report-trip.png"
import report from "../../assets/img/project/lacak-mobile/report.png"
import swagger from "../../assets/img/project/lacak-mobile/swagger.png"

const LacakMobile = ({ onClose }) => {
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
          <h1>Lacak Mobile</h1>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <p>
            Lacak Mobile is a commercial mobile application developed at
            Lacak.io, designed for real-time vehicle tracking, route replay, and
            monitoring driving behavior such as speed and events. The app is
            planned to be released on the Play Store and App Store to provide an
            accessible fleet management solution.
          </p>
          <h2 className="mt-2 font-semibold">My Contribution</h2>

          <ul className="list-disc">
            <li>
              Optimized the Replay API by caching results from the existing
              internal service API, reducing response time and improving user
              experience.
            </li>
            <li>
              Implemented asynchronous background jobs to fetch and process
              address data for each vehicle position, ensuring efficient API
              calls and smooth performance.
            </li>
            <li>
              Developed multiple reporting APIs (Combined, Routes, Trip, Event,
              and Stop) to provide detailed vehicle activity insights.
            </li>
            <li>
              Built an API for exporting reports to CSV, enabling users to
              download and analyze data easily.
            </li>
          </ul>
        </DialogContentText>
        <DialogContentText>
          Year Built: <span className="font-bold inline">2025</span>
        </DialogContentText>
        <DialogContentText>
          Skills: 
          <span className="font-bold inline">Java, Spring Boot</span>
          
          <div className="flex flex-wrap gap-2 justify-center">
            <img
              src={replay}
              alt="herosection"
              className="my-2 max-h-[252px]"
            />
            <img
              src={report}
              alt="dashboard home"
              className="my-2 max-h-[252px]"
            />
            <img src={map} alt="my aplicant" className="my-2 max-h-[252px]" />
            <img src={trip} alt="my aplicant" className="my-2 max-h-[252px]" />
            <img src={swagger} alt="my aplicant" className="my-2" />
          </div>
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

export default LacakMobile;
