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

const BackdropProduct = ({ onClose, type }) => {
  return (
    <>
      {type === "todo" ? (
        <TodoList onClose={onClose} />
      ) : type === "career" ? (
        <CareerConnect onClose={onClose} />
      ) : (
        <Calculator onClose={onClose} />
      )}
    </>
  );
};

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

export default BackdropProduct;
