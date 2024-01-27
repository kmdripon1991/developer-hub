import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="container">
      <Navbar></Navbar>
      <Outlet>
        <Header></Header>
      </Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;
