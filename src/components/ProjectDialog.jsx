import TodoList from "./projectDialog/Todolist";
import CareerConnect from "./projectDialog/CareerConnect";
import Calculator from "./projectDialog/Calculator";
import MaqdisAcademy from "./projectDialog/MaqdisAcademy";

const BackdropProduct = ({ onClose, type }) => {
  return (
    <>
      {type === "maqdis" ? (
        <MaqdisAcademy onClose={onClose} />
      ) : type === "todo" ? (
        <TodoList onClose={onClose} />
      ) : type === "career" ? (
        <CareerConnect onClose={onClose} />
      ) : (
        <Calculator onClose={onClose} />
      )}
    </>
  );
};

export default BackdropProduct;
