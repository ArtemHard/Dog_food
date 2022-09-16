import style from "./signUp.module.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target).entries());
    console.log(formData);
    const response = await fetch("https://api.react-learning.ru/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      const userFromServer = await response.json();
      // получаем токен и надо засунуть кудато
    }
  };

  return (
    <div className={style.wrapper}>
      <form className={style.modal__form} onSubmit={submitHandler}>
        <div className={style.modal__inner}>
          <h3 className={style.modal__inner__textLogIn}>Вход</h3>
          <input
            className={style.modal__inner__input}
            type='email'
            name='email'
            placeholder='Email'
            autoComplete='email'
          />
          <input
            className={style.modal__inner__input}
            type='password'
            name='password'
            placeholder='Пароль'
            autoComplete='off'
          />
          <button className={style.modal__inner__btnConfirm} type='submit'>
            <strong>Зарегистрироваться</strong>
          </button>
          <Link to='/signin' className={style.modal__inner__link}>
            <button className={style.modal__inner__btnReg} type='submit'>
              <strong>Войти</strong>
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
