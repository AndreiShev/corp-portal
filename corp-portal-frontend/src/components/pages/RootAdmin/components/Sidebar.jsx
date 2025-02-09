import { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [activeMenuItem, setActiveMenuItem] = useState(null);

    const handleClick = (menuItem) => {
        if (activeMenuItem !== menuItem) {
            setActiveMenuItem(menuItem); // Открываем новое подменю
        }
    };

    return (
        <ul className="sidebar_menu">
            {/* Дашборд */}
            <li
                className={`sidebar_item ${activeMenuItem === 'dashboard' ? 'active' : ''}`}
                onClick={() => handleClick('dashboard')}
            >
                <Link className="link" to="/admin/dashboard">Дашборд</Link>
                {activeMenuItem === 'dashboard' && (
                    <ul className="submenu">
                        <li><Link className="link" to="#">Подпункт 1</Link></li>
                        <li><Link className="link" to="#">Подпункт 2</Link></li>
                        <li><Link className="link" to="#">Подпункт 3</Link></li>
                    </ul>
                )}
            </li>

            {/* Контент */}
            <li
                className={`sidebar_item ${activeMenuItem === 'content' ? 'active' : ''}`}
                onClick={() => handleClick('content')}
            >
                <Link className="link" to="/admin/content">Контент</Link>
                {activeMenuItem === 'content' && (
                    <ul className="submenu">
                        <li><Link className="link" to="#">Подпункт 4</Link></li>
                        <li><Link className="link" to="#">Подпункт 5</Link></li>
                        <li><Link className="link" to="#">Подпункт 6</Link></li>
                    </ul>
                )}
            </li>

            {/* Сервисы */}
            <li
                className={`sidebar_item ${activeMenuItem === 'services' ? 'active' : ''}`}
                onClick={() => handleClick('services')}
            >
                <Link className="link" to="/admin/services">Сервисы</Link>
                {activeMenuItem === 'services' && (
                    <ul className="submenu">
                        <li><Link className="link" to="#">Подпункт 7</Link></li>
                        <li><Link className="link" to="#">Подпункт 8</Link></li>
                        <li><Link className="link" to="#">Подпункт 9</Link></li>
                    </ul>
                )}
            </li>

            {/* Настройки */}
            <li
                className={`sidebar_item ${activeMenuItem === 'settings' ? 'active' : ''}`}
                onClick={() => handleClick('settings')}
            >
                <Link className="link" to="/admin/settings">Настройки</Link>
                {activeMenuItem === 'settings' && (
                    <ul className="submenu">
                        <li><Link className="link" to="/admin/employees">Сотрудники</Link></li>
                        <li><Link className="link" to="/admin/user-groups">Группы пользователей</Link></li>
                    </ul>
                )}
            </li>
        </ul>
    );
};

export default Sidebar;