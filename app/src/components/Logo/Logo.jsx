import { Link } from 'react-router-dom'
import logo from './flower-48px.png'

const Logo = () => {

    return (
        <Link to="/" className='logo'>
            <img src={logo} alt="Logo" className='logo__pic'/>
        </Link>
    )
}

export default Logo