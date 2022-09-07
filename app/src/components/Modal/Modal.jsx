import ReactDOM from "react-dom";
import style from "./modal.module.css";

const Modal = ({ children, modalState = false }) => {
    if (!modalState) return null
  const modalRoot = document.getElementById("modal-root");

  return ReactDOM.createPortal(
    (<div className={style.wrapper}>
      {children}
    </div>),
    modalRoot,
  );
};

export default Modal;
