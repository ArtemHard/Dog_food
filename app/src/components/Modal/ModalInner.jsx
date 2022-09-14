import { useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Button from "../Elements/Buttons/Button";
import style from "./modal.module.css";

const ModalInner = ({ children, ...props }) => {
  const btnAuthLink = "modal__btnAuthLink";

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
                <h2>Войти</h2>
                <Button text='Войти' type='yellow' />
                <Link to='/signup'>
                  <Button type={btnAuthLink} text='Регистрация' />
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
                <Link to='/signin'>
                  <Button type={btnAuthLink} text='Войти' />
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
    </div>
  );
};

export default ModalInner;
