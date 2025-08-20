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
import vehicle from "../../assets/img/project/mini-dispatch/vehicle.png"
import map from "../../assets/img/project/mini-dispatch/map.png"
import timeline from "../../assets/img/project/mini-dispatch/timeline.png"

const MiniDispatch = ({ onClose }) => {
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
          <h1>Mini Dispatch</h1>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <p>
            Mini Dispatch is a web-based monitoring system developed at Lacak.io
            to track vehicle activities in mining operations and monitor driver
            statuses in real-time. The project was built collaboratively by the
            backend team using Spring Boot and integrated with Flespi as the IoT
            data source.
          </p>
          <h2 className="mt-2 font-semibold">My Contribution</h2>
          <ul className="list-disc">
            <li>
              Built Driver Status API to manage real-time driver activities
              (working, resting, unavailable).
            </li>
            <li>
              Implemented API for drag-and-drop timeline assignment, enabling
              dispatchers to link excavators, vehicles, disposal areas, and
              regions.
            </li>
            <li>
              Contributed to the development of WebSocket communication in
              Spring Boot using STOMP protocol for real-time updates.
            </li>
            <li>
              Collaborated within a team to ensure API integration with the
              monitoring dashboard and system reliability.
            </li>
          </ul>
        </DialogContentText>
        <DialogContentText>
          Year Built: <span className="font-bold inline">2025</span>
        </DialogContentText>
        <DialogContentText>
          Skills:{" "}
          <span className="font-bold inline">
            Java, Spring Boot, MySql, Flespi, Mqtt
          </span>
          <img src={vehicle} alt="herosection" className="my-2" />
          <img src={timeline} alt="dashboard home" className="my-2" />
          <img src={map} alt="my aplicant" className="my-2" />
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

export default MiniDispatch;
