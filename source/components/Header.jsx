import logo from '../assets_images/logo/LOGO_header.png';
import Nav from './nav';
import '../style/header.scss';

function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="Logo du site" />
            <Nav />
        </header>
    );
}

export default Header;

