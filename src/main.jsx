import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.js";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <PersistGate loading={null} persistor={persistor}></PersistGate>
      <Provider store={store}>
        <App />
        <Toaster />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
