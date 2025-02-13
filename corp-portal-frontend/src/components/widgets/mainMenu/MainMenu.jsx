import './mainMenu.css'
import {Link} from "react-router-dom";


function MainMenu() {

    return (
        <div className="main-menu">
            <ul className="nav">
                <li className="nav-item"><Link to={'/'}>Главная</Link></li>
                <li className="nav-item"><Link to={'company'}>Компания</Link></li>
                <li className="nav-item"><Link to={'staff'}>Персонал</Link></li>
                <li className="nav-item"><Link to={'documents'}>Документы</Link></li>
                <li className="nav-item"><Link to={'services'}>Сервисы</Link></li>
                <div className="clear"></div>
            </ul>
        </div>
    );
}

export default MainMenu;

