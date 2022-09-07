import Logo from '../Logo/Logo.jsx'
import favorite from './img/favorite.svg'
import profile from './img/profile.svg'
import shoppingCart from './img/shopping-cart.svg'
import SearchForm from '../SearchForm/SearchForm'
import style from './Header.module.css'
import { Link } from 'react-router-dom'
import SignIn from '../Modal/Auth/SignIn.jsx'
import Modal from '../Modal/Modal.jsx'
import { useState } from 'react'

const Header = ({searchText, appHeandlerText}) => {

    const SearchHandlerHeader = (inputValue) => {
        appHeandlerText(inputValue)
    }

    const SignInHeandler = (e) => {
        console.log('signIn');
    }
    
    const [viewModal, setViewModal] = useState(false)

    const openModal = () => {
        setViewModal(true)
    }
    // const closeModal = () => {
    //     setViewModal(false)
    // }
    
    return (
        <header>
            <div className='container'>
                <Logo />
                <SearchForm searchText={searchText} SearchHandlerHeader={SearchHandlerHeader} />
                <nav className={style.navigationBar}>
                    <Link  to="/favorites">
                        <img className={style.navigation_favoriteIcon} src={favorite} alt="favorite icon"/>
                    </Link>
                    <Link  to="/cart">
                        <img className={style.navigation_shoppingCartIcon} src={shoppingCart} alt="shopping cart icon"/>
                    </Link>
                    
                    <Link  to="/profile" onClick={openModal}>
                        <img className={style.navigation_profileIcon} src={profile} alt="profile icon"/>
                    </Link>
                    <p className={style.navigation__btn__signIn} onChange={e=> e.preventDefault()} onClick={SignInHeandler}>SignIn</p>
                    {/* <p className={style.navigation__btn__signUp} onChange={e=> e.preventDefault()} onClick={SignUpHeandler}>SignUp</p> */}
                </nav>
            </div>
            <Modal modalState={viewModal}>
                <SignIn />
            </Modal>
        </header>
    )
}
export default Header