import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { GlobalProvider } from "./context/global-context";
import "./index.css";
import { ProductProvider } from "./context/products-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </GlobalProvider>
    </BrowserRouter>
  </React.StrictMode>
);
