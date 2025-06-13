import logo from '../assets_images/logo/logo.png';
import Nav from './nav';

function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="Logo du site" />
            <Nav className="nav-header"/>
        </header>
    );
}

export default Header;

