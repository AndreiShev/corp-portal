import './styles/common.css'
import Root from './components/pages/Root/Root';
import ErrorPage from './error-page';
import Contact from './routes/Contact';


import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Company from "./components/pages/Company/Company";


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
]);


function App() {
    return (
        <RouterProvider router={router} />
  );
}

export default App;
