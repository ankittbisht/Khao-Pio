import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Error from "./components/Error.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import Cart from "./components/Cart.jsx";
//act as a bridge between react and reduxtookit
import { Provider } from "react-redux";
import appStore from "./utils/appStore.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/About",
    element: <About />,
  },
  { path: "/Contact", element: <Contact /> },
  { path: "/restaurants/:resid", element: <RestaurantMenu /> },
  { path: "cart", element: <Cart /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={appStore}>
    {/* // provider by react-redux to use */}
    <RouterProvider router={appRouter} />
    </Provider>
    
  </React.StrictMode>
);
