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

const TodoList = ({ onClose }) => {
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
          <h1>To Do List App</h1>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          This project was made in as a way to participate Gethired Devcode
          Front-end Challenge. I also used it to learn how to implement an UI
          design to Front-end Code and integration from Back-end using API. It
          shows To Do App for managing tasks. I made using Javascript and
          ReactJS with Tailwind and MUI as a CSS Framework. The user could add
          his/her activities and todo items with its priority. If the user has
          done the todo items, the items could be checked as done.
        </DialogContentText>
        <DialogContentText>
          Year Built: <span className="font-bold inline">2024</span>
        </DialogContentText>
        <DialogContentText>
          Skills:{" "}
          <span className="font-bold inline">
            Javascript, ReactJS, TailwindCSS, MUI, Vite, Axios
          </span>
          <img src="todo_home.png" alt="" className="my-2" />
          <img src="todo_act.png" alt="" className="my-2" />
          <img src="todo_home.png" alt="" className="my-2" />
          <img src="todo_login.png" alt="" className="" />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() =>
            (window.location.href = "https://github.com/inalMahpud824/todolist")
          }
          variant="contained"
          sx={{ backgroundColor: "white", color: "black" }}
        >
          Source Code
        </Button>
        <Button
          onClick={() =>
            (window.location.href = "https://todolist-red-gamma.vercel.app/")
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

export default TodoList;