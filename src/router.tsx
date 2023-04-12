import { createBrowserRouter, Outlet } from 'react-router-dom';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <div>home<Outlet/></div>,
        children: [
            {
                path: "/lalala",
                element: <div>lalala</div>
            }
        ]
    }
])