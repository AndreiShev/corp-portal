import './RootAdmin.css'
import {Link, Outlet} from "react-router-dom";

function RootAdmin() {
    return (
        <body className="admin_body">
            <div className="admin_body_container">
                <aside className="left_sidebar">
                    <ul className="sidebar_body">
                        <li className="sidebar_item active"><Link className="link" to={'/admin/dashboard'}>Дашборд</Link></li>
                        <li className="sidebar_item"><Link className="link" to={'/admin/content'}>Контент</Link></li>
                        <li className="sidebar_item"><Link className="link" to={'/admin/services'}>Сервисы</Link></li>
                        <li className="sidebar_item"><Link className="link" to={'/admin/settings'}>Настройки</Link></li>
                    </ul>
                </aside>
                <main className="admin_main" id="detail">
                    <Outlet />
                </main>
            </div>
        </body>
    );
}

export default RootAdmin;