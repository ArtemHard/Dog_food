import style from './Header.module.css'
import Logo from '../Logo/Logo.jsx'

const Header = () => {

    return (
        <header>
            <div className='container'>
                <Logo />
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