import style from './Header.module.css'
import Logo from '../Logo/Logo.jsx'
import SearchForm from '../SearchForm/SearchForm'

const Header = () => {

    return (
        <header>
            <div className='container'>
                <Logo />
                <SearchForm />
                <nav>
                    <a href="">pic 1</a>
                    <a href="">pic 2</a>
                    <a href="">pic 3</a>
                </nav>

            </div>
        </header>
    )
}
export default Header