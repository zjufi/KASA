import logo_footer from '../assets_images/logo/logo_footer.png';

import '../style/footer.scss';

function Footer() {
    return (
        <footer className='footer'>
            <img src={logo_footer} alt="Logo du site" className="footer__logo"/>
            <p className="footer__text">© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;