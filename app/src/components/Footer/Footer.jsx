import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'
import classmates_icon from './img/icons/classmates.svg'
import phone_icon from './img/icons/phone-solid.svg'
import telegram_icon from './img/icons/telegram.svg'
import viber_icon from './img/icons/viber.svg'
import vk_icon from './img/icons/vk_icon.svg'
import './index.css'

const Footer = () => {

    return (
        <footer className="container">
            <div className="column">
                <Logo />
                <div>Copy</div>
            </div>
            <ul className="column">
                <li>
                    <Link className='foooterContainer__column__link' to="/catalog">
                Каталог
                </Link>
                </li>
                <li>
                    <Link className='foooterContainer__column__link' to="/">
                Акции
                </Link>
                </li>
                <li>
                    <Link className='foooterContainer__column__link' to="/">
                Новости
                </Link>
                </li>
                <li>
                    <Link className='foooterContainer__column__link' to="/">
                Отзывы
                </Link>
                </li>
            </ul>
            <ul className="column">
                <li>Оплата и доставка</li>
                <li>Часто задаваемые вопросы</li>
                <li>Обратная связь</li>
                <li>
                    <Link className='foooterContainer__column__link' to="/">
                    Контакты
                    </Link>
                </li>
            </ul>
            <div className="column">
                <div>
                    <strong>Мы на связи</strong>
                </div>
                <div>
                    <b>+7 (499) 252-19-68</b>
                </div>
                <div>
                    anyemail@mail.ru
                </div>
                <ul className='soc'>
                    <Link to="">
                        <img className='soc__imgLogo' src={classmates_icon} alt="classmates icon" />
                    </Link>
                    <Link to="">
                        <img className='soc__imgLogo' src={phone_icon} alt="phone icon" />
                    </Link>
                    <Link to="">
                        <img className='soc__imgLogo' src={telegram_icon} alt="telegram icon" />
                    </Link>
                    <Link to="">
                        <img className='soc__imgLogo' src={viber_icon} alt="viber icon" />
                    </Link>
                    <Link to="">
                        <img className='soc__imgLogo' src={vk_icon} alt="vk icon" />
                    </Link>
                    
                </ul>
            </div>
        </footer>
    )
}

export default Footer