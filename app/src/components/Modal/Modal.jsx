import ReactDOM from "react-dom";
import { useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Button from "../Elements/Buttons/Button";
import style from "./modal.module.css";
import SignIn from "../Auth/SignIn/SignIn";
import SignUp from "../Auth/SignUp/SignUp";

const Modal = ({ children, ...props }) => {
  const modalRoot = document.getElementById("modal-root");

  return ReactDOM.createPortal(
    props.active && <ModalInner {...props}>{children}</ModalInner>,

    modalRoot
  );
};

export default Modal;

const ModalInner = ({ children, ...props }) => {
  const escHandler = (e) => {
    console.log(e);
    if (e.code === "Escape") {
      props.changeActive(false);
    }
  };

  useEffect(() => {
    window.document.addEventListener("keydown", escHandler);

    return () => {
      window.document.removeEventListener("keydown", escHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div
      className={props.active ? style.modal + " " + style.active : style.modal}
    >
      <div className={style.modal__container}>
        <Routes>
          <Route
            path='/signin'
            element={
              <>
                <SignIn />
              </>
            }
          />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
        <div
          className={style.modal__close}
          onClick={(e) => props.changeActive(!props.active)}
        >
          X
        </div>
      </div>
    </div>
  );
};
