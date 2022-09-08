import ReactDOM from "react-dom";
import { Link, Route, Routes } from "react-router-dom";
import Button from "../Elements/Buttons/Button";
// import SignIn from "../Auth/SignIn/SignIn";
import style from "./modal.module.css";

const Modal = (props) => {
  const modalRoot = document.getElementById("modal-root");

  return ReactDOM.createPortal(
    <div
      className={props.active ? style.modal + " " + style.active : style.modal}
    >
      <div className={style.modal__container}>
        <Routes>
          <Route
            path='/signin'
            element={
              <>
                <h2>Войти</h2>
                <Button text='Войти' type='yellow' />
                <Link to="/signup">
                <Button text='Регистрация' />
                </Link>
              </>
            }
          />
          <Route
            path='/signup'
            element={
              <>
                <h2>Регистрация</h2>
                <Button text='Зарегистрироваться' type='yellow' />
                <Link to="/signin">
                <Button text='Войти' />
                </Link>
              </>
            }
          />
        </Routes>
        <div
          className={style.modal__close}
          onClick={(e) => props.changeActive(!props.active)}
        >
          X
        </div>
      </div>
      {/* <SignIn /> */}
    </div>,
    modalRoot
  );
};

export default Modal;
