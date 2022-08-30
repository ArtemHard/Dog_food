import logo from './flower-48px.png'

const Logo = () => {

    return (
        <a href="/" className='logo'>
            <img src={logo} alt="Logo" className='logo__pic'/>
        </a>
    )
}

export default Logo