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
        <aside className="left_sidebar">
            <ul className="sidebar_menu">
                {/* Дашборд */}
                <li
                    className={`sidebar_item ${activeMenuItem === 'dashboard' ? 'active' : ''}`}
                    onClick={() => handleClick('dashboard')}
                >
                    <Link className="link" to="/admin/dashboard">
                        <figure>
                            <img src="" alt="Дашборд"/>
                            <figcaption>Дашборд</figcaption>
                        </figure>
                    </Link>
                </li>

                {/* Контент */}
                <li
                    className={`sidebar_item ${activeMenuItem === 'content' ? 'active' : ''}`}
                    onClick={() => handleClick('content')}
                >
                    <Link className="link" to="/admin/content">
                        <figure>
                            <img src="" alt="Контент"/>
                            <figcaption>Контент</figcaption>
                        </figure>
                    </Link>
                </li>

                {/* Сервисы */}
                <li
                    className={`sidebar_item ${activeMenuItem === 'services' ? 'active' : ''}`}
                    onClick={() => handleClick('services')}
                >
                    <Link className="link" to="/admin/services">
                        <figure>
                            <img src="" alt="Сервисы"/>
                            <figcaption>Сервисы</figcaption>
                        </figure>
                    </Link>
                </li>

                {/* Настройки */}
                <li
                    className={`sidebar_item ${activeMenuItem === 'settings' ? 'active' : ''}`}
                    onClick={() => handleClick('settings')}
                >
                    <Link className="link" to="/admin/settings">
                        <figure>
                            <img src="" alt="Настройки"/>
                            <figcaption>Настройки</figcaption>
                        </figure>
                    </Link>
                </li>
            </ul>
            <div className="submenu-container">
                {activeMenuItem === 'dashboard' && (
                    <ul className="submenu">
                        <li><Link className="link" to="#">Подпункт 1</Link></li>
                        <li><Link className="link" to="#">Подпункт 2</Link></li>
                        <li><Link className="link" to="#">Подпункт 3</Link></li>
                    </ul>
                )}
                {activeMenuItem === 'content' && (
                    <ul className="submenu">
                        <li><Link className="link" to="#">Подпункт 4</Link></li>
                        <li><Link className="link" to="#">Подпункт 5</Link></li>
                        <li><Link className="link" to="#">Подпункт 6</Link></li>
                    </ul>
                )}
                {activeMenuItem === 'services' && (
                    <ul className="submenu">
                        <li><Link className="link" to="#">Подпункт 7</Link></li>
                        <li><Link className="link" to="#">Подпункт 8</Link></li>
                        <li><Link className="link" to="#">Подпункт 9</Link></li>
                    </ul>
                )}
                {activeMenuItem === 'settings' && (
                    <ul className="submenu">
                        <li><Link className="link" to="/admin/employees">Сотрудники</Link></li>
                        <li><Link className="link" to="/admin/user-groups">Группы пользователей</Link></li>
                    </ul>
                )}
            </div>
        </aside>
    );
};

export default Sidebar;