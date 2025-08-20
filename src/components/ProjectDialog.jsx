import TodoList from "./projectDialog/Todolist";
import CareerConnect from "./projectDialog/CareerConnect";
import Calculator from "./projectDialog/Calculator";
import MaqdisAcademy from "./projectDialog/MaqdisAcademy";
import MiniDispatch from "./projectDialog/MiniDispatch";
import LacakMobile from "./projectDialog/LacakMobile";

const BackdropProduct = ({ onClose, type }) => {
  return (
    <>
      {type === "lacak-mobile" ? (
        <LacakMobile onClose={onClose} />
      ) : type === "mini-dispatch" ? (
        <MiniDispatch onClose={onClose} />
      ) : type === "maqdis" ? (
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
