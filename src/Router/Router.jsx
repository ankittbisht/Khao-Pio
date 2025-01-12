import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '../Layout/Layout'
import Home from '../Pages/home/Home'
import Menu from '../Pages/RestaurantMenu/Menu'
import Error from '../components/Error'
import SearchPage from '../Pages/Searchpage/SearchPage'
import About from '../Pages/About/About'
import ContactUs from '../Pages/Contact/Contact'

function Router() {
    const router = createBrowserRouter([{
        path: "/",
        element: < Layout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/About",
                element: <About />,
            },
            { path: "/Contact", element: <ContactUs /> },
            { path: "/restaurants/:resid", element: <Menu /> },

            { path: "search-result", element: <SearchPage /> },
        ]
    }])
    return (
        <RouterProvider router={router} />
    )
}

export default Router