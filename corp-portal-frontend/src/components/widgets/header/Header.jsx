import './header.css'
import MainMenu from "../mainMenu/MainMenu";
import {Link} from "react-router-dom";

function Header () {
    return (
        <header className="header">
            <div className="container">
                <div className="header-row">
                    <div className="header-logo">LOGO</div>
                    <MainMenu />
                </div>

            </div>
        </header>
    )
}

export default Header;