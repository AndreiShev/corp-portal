import Header from "../../widgets/header/Header";

import Footer from "../../widgets/footer/Footer";
import {Outlet} from "react-router-dom";

export default function RootEmployee() {

    return (
        <div>
        <Header />
        <Outlet />
        <Footer />
        </div>
    );
}