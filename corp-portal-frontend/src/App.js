import './styles/common.css'
import Root from './components/pages/Root/Root';
import ErrorPage from './error-page';
import Company from "./components/pages/RootEmployee/pages/Company/Company";
import RootAdmin from "./components/pages/RootAdmin/RootAdmin";
import Content from "./components/pages/RootAdmin/pages/Content/Content";
import Dashboard from "./components/pages/RootAdmin/pages/Dashboard/Dashboard";
import Services from "./components/pages/RootAdmin/pages/Services/Services";
import Settings from "./components/pages/RootAdmin/pages/Settings/Settings";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Employees from "./components/pages/RootAdmin/pages/Settings/pages/Employees/Employees";
import UserGroups from "./components/pages/RootAdmin/pages/Settings/pages/UserGroups/UserGroups";
import RootEmployee from "./components/pages/RootEmployee/RootEmployee";
import MainPage from "./components/pages/RootEmployee/pages/Main/MainPage";
import Staff from "./components/pages/RootEmployee/pages/Staff/Staff";
import Documents from "./components/pages/RootEmployee/pages/Documents/Documents";
import EmployeeServices from "./components/pages/RootEmployee/pages/EmployeeServices/EmployeeServices";
import UserAdmin from "./components/pages/RootAdmin/pages/Settings/pages/Employees/components/UserAdmin/UserAdmin";
import Department from "./components/pages/RootAdmin/pages/Content/Department/Department";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "admin",
                element: <RootAdmin />,
                children: [
                    {
                        path: "content",
                        element: <Content />,
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
                    },
                    {
                        path: "employees",
                        element: <Employees />,
                    },
                    {
                        path: "user-groups",
                        element: <UserGroups />
                    },
                    {
                        path: "employees/:userId",
                        element: <UserAdmin />
                    },
                    {
                        path: "department",
                        element: <Department />
                    }
                ]
            }, {
                path: "/",
                element: <RootEmployee />,
                children: [
                    {
                        path: '/',
                        element: <MainPage />
                    },
                    {
                        path: "company",
                        element: <Company />
                    },
                    {
                        path: "staff",
                        element: <Staff />
                    },
                    {
                        path: "documents",
                        element: <Documents />
                    },
                    {
                        path: "services",
                        element: <EmployeeServices />
                    }
                ]
            }
        ]
    },

]);


function App() {
    return (
        <RouterProvider router={router} />
  );
}

export default App;
