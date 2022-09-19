import Logo from "../Logo/Logo.jsx";
import favorite from "./img/favorite.svg";
import profile from "./img/profile.svg";
import shoppingCart from "./img/shopping-cart.svg";
import SearchForm from "../SearchForm/SearchForm";
import style from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = ({
  searchText,
  appHeandlerText,
  modalActiv,
  setModalActiv,
  store,
}) => {
  const SearchHandlerHeader = (inputValue) => {
    appHeandlerText(inputValue);
  };

  const SignInHeandler = (e) => {
    // e.preventDefault();
    setModalActiv(!modalActiv);
  };

  let cnt = 0;

  store.forEach((el) => {
    cnt += el.cnt || 0;
  });

  return (
    <header>
      <div className='container'>
        <Logo />
        <SearchForm
          searchText={searchText}
          SearchHandlerHeader={SearchHandlerHeader}
        />
        <nav className={style.navigationBar}>
          <Link to='/favorites'>
            <img
              className={style.navigation_favoriteIcon}
              src={favorite}
              alt='favorite icon'
            />
          </Link>
          <Link to='/cart' title={cnt}>
            <img
              className={style.navigation_shoppingCartIcon}
              src={shoppingCart}
              alt='shopping cart icon'
            />
          </Link>
          <Link to='/profile'>
            <img
              className={style.navigation_profileIcon}
              src={profile}
              alt='profile icon'
            />
          </Link>
          <Link
            to='/signin'
            className={style.navigation__btn__signIn}
            onClick={SignInHeandler}
          >
            SignIn
          </Link>
          <Link
            to='/signup'
            className={style.navigation__btn__signUp}
            onClick={SignInHeandler}
          >
            SignUp
          </Link>
          <Link
            to='/createproduct'
            // className={style.navigation__btn__signUp}
            // onClick={SignInHeandler}
          >
            CreateProduct
          </Link>
        </nav>
      </div>
    </header>
  );
};
export default Header;
