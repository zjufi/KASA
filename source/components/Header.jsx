import logo from '../assets_images/logo/LOGO_header.png';
import Nav from './nav';
import '../style/header.css';
import '../style/main.css';
function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="Logo du site" />
            <Nav className="nav-header"/>
        </header>
    );
}

export default Header;

