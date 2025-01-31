import './styles/common.css'
import Root from './routes/Root';
import ErrorPage from './error-page';
import Contact from './routes/Contact';


import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
    },
    {
        path: "contacts/:contactId",
        element: <Contact />,
    },
]);


function App() {
    return (
        <RouterProvider router={router} />
  );
}

export default App;
