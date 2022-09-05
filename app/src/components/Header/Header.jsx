import Logo from '../Logo/Logo.jsx'
import SearchForm from '../SearchForm/SearchForm'

const Header = ({searchText, appHeandlerText}) => {

    const SearchHandlerHeader = (inputValue) => {
        appHeandlerText(inputValue)
    }
    
    return (
        <header>
            <div className='container'>
                <Logo />
                <SearchForm searchText={searchText} SearchHandlerHeader={SearchHandlerHeader} />
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