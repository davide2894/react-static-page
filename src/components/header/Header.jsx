import logo from '../../logo.svg';
import './Header.scss';

export default function Header() {
    return(
        <header className='header'>
            <nav className="menu">
                <img src={logo} className='logo'></img>
                <ul className='menu__items'>
                    <li className='menu__item'>Pricing</li>
                    <li className='menu__item'>About</li>
                    <li className='menu__item'>Contact</li>
                </ul>
            </nav>
      </header>
    )
}