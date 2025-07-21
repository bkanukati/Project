import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// Get the root element
const rootElement = document.getElementById("root");

// Create a root using React 18's createRoot API
const root = createRoot(rootElement);

// Render the app inside the root
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
