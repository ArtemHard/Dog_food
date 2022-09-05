import Logo from '../Logo/Logo.jsx'
import favorite from './img/favorite.svg'
import profile from './img/profile.svg'
import shoppingCart from './img/shopping-cart.svg'
import SearchForm from '../SearchForm/SearchForm'
import style from './Header.module.css'
import { Link } from 'react-router-dom'

const Header = ({searchText, appHeandlerText}) => {

    const SearchHandlerHeader = (inputValue) => {
        appHeandlerText(inputValue)
    }
    
    return (
        <header>
            <div className='container'>
                <Logo />
                <SearchForm searchText={searchText} SearchHandlerHeader={SearchHandlerHeader} />
                <nav className={style.navigationBar}>
                    {/* <Link  to="/">Главная</Link> */}
                    {/* <Link  to="/catalog">Каталог</Link> */}
                    <Link  to="/favorites">
                        <img className={style.navigation_favoriteIcon} src={favorite} alt="favorite icon"/>
                    </Link>
                    <Link  to="/cart">
                        <img className={style.navigation_shoppingCartIcon} src={shoppingCart} alt="shopping cart icon"/>
                    </Link>
                    {/* <Link  to="/product">Товар</Link> */}
                    <Link  to="/profile">
                        <img className={style.navigation_profileIcon} src={profile} alt="profile icon"/>
                    </Link>
                    {/* <Link  to="/contacts">Контакты</Link> */}
                </nav>

            </div>
        </header>
    )
}
export default Header