import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Project from "./routes/Projects";
import Contact from "./routes/Contact";
import About from "./routes/About";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "projects",
        element: <Project />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "about",
        element: <About />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")as HTMLElement).render(
  <RouterProvider router={router} />
);

