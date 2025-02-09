import './styles/common.css'
import Root from './components/pages/Root/Root';
import ErrorPage from './error-page';
import Company from "./components/pages/Company/Company";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import RootAdmin from "./components/pages/RootAdmin/RootAdmin";
import Content from "./components/pages/Content/Content";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Services from "./components/pages/Services/Services";
import Settings from "./components/pages/Settings/Settings";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
    },
    {
        path: "company",
        element: <Company />
    },
    {
        path: "admin",
        element: <RootAdmin />,
        children: [
            {
                path: "content",
                element: <Content />
            },
            {
                path: "dashboard",
                element: <Dashboard />
            },
            {
                path: "services",
                element: <Services />
            },
            {
                path: "settings",
                element: <Settings />
            }
        ]
    }
]);


function App() {
    return (
        <RouterProvider router={router} />
  );
}

export default App;
