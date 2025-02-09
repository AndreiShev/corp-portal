import './header.css'
import MainMenu from "../mainMenu/MainMenu";
import {Link} from "react-router-dom";

function Header () {
    return (
        <header className="header">
            <div className="admin_panel">
                <Link to={'admin'}>Панель администратора</Link>
            </div>
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