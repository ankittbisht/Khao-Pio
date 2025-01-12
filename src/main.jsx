import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
//act as a bridge between react and reduxtookit
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  
    <Provider store={appStore}>
      {/* // provider by react-redux to use */}
      <App />
    </Provider>
  </React.StrictMode>
);
