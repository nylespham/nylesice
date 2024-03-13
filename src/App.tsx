import React from "react";
import Footer from "./components/Footer";
import Home from "./routes/Home";
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
