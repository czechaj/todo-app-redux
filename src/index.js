import React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "./contexts/ThemeContext";
import { store } from "./redux/store";
import "antd/dist/antd.min.css";
import "focus-visible/dist/focus-visible";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

root.render(
  <ChakraProvider>
    <ThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </ChakraProvider>
);
