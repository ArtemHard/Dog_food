import { Link } from 'react-router-dom'
import logo from './img/dog-face.svg'

const Logo = () => {

    return (
        <Link to="/" className='logo'>
            <img src={logo} alt="Logo" className='logo__pic'/>
        </Link>
    )
}

export default Logo