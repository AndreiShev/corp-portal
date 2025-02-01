import './mainMenu.css'
import {Link} from "react-router-dom";


function MainMenu() {

    return (
        <div className="mainMenu">
            <ul className="nav">
                <li className="nav-item"><Link to={'/'}>Главная</Link></li>
                <li className="nav-item"><Link to={'company'}>Компания</Link></li>
                <li className="nav-item">Персонал</li>
                <li className="nav-item">Документы</li>
                <li className="nav-item">Сервисы</li>
            </ul>
        </div>
    );
}

export  default MainMenu;

