import {useState} from "react";

import './Root.css';
import {Link, Outlet} from "react-router-dom";

export default function Root() {
    const [activeTab, setActiveTab] = useState('tab1');

    return (
        <div>
            <ul className="tabs">
                <li
                    className={activeTab === 'tab1' ? 'active' : ''}
                    onClick={() => setActiveTab('tab1')}
                >
                    <Link to="/" >Сайт</Link>
                </li>
                <li
                    className={activeTab === 'tab2' ? 'active' : ''}
                    onClick={() => setActiveTab('tab2')}
                >
                    <Link to="/admin" >Администрирование</Link>
                </li>
            </ul>

            <div className="content">
                <Outlet />
            </div>
        </div>
    );
}
