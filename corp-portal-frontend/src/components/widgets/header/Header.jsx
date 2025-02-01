import './header.css'
import MainMenu from "../mainMenu/MainMenu";

function Header () {
    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <div className="header__logo">LOGO</div>
                    <MainMenu />
                </div>

            </div>
        </header>
    )
}

export default Header;