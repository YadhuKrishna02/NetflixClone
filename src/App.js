import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

//Functional Components
const AppLayout = () => (
    <>
        <Navbar />
        <Outlet />
    </>

);
const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
        ]
    }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

