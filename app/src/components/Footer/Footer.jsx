import Logo from '../Logo/Logo'
import style from './index.css'

const Footer = () => {

    return (
        <footer className="container">
            <div className="column">
                <Logo />
                <div>Copy</div>
            </div>
            <ul className="column">
                <li>text</li>
                <li>text</li>
                <li>text</li>
                <li>text</li>
            </ul>
            <ul className="column">
                <li>text</li>
                <li>text</li>
                <li>text</li>
                <li>text</li>
            </ul>
            <div className="column">
                <div>text</div>
                <div>phone</div>
                <div>mail</div>
                <ul className='soc'>
                    <li>soc</li>
                    <li>soc</li>
                    <li>soc</li>
                    <li>soc</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer