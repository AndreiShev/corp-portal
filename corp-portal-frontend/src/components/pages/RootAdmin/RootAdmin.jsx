import './RootAdmin.css'
import { Outlet} from "react-router-dom";
import Sidebar from "./components/Sidebar";

function RootAdmin() {

    return (
        <div className="admin_body">
            <div className="admin_body_container">
                <Sidebar />
                <main className="admin_main" id="detail">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default RootAdmin;