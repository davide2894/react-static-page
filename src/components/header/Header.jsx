import logo from '../../logo.svg';
import './Header.scss';

export default function Header() {
    return(
        <header className='header'>
            <nav className="navbar">
                <div className="navbar__brand-wrapper">
                    <img src={logo} className='logo navbar__logo'></img>
                    <h2 className="navbar__brand">ReactFacts</h2>
                </div>
                <h2 className='navbar__breadcrumb'>React Course - Project 1</h2>
            </nav>
        </header>
    )
}