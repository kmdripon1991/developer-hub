import React, { createContext } from "react";
import Header from "./components/Header";
import { Outlet, RouterProvider, useLoaderData } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import JobCategory from "./components/JobCategory";
import Home from "./components/Home";

export const CategoryListContext = createContext([]);

const App = () => {

  const jobCategoryList = useLoaderData()
  
  return (
    <div className="">
      <CategoryListContext.Provider value={jobCategoryList}>
        <Header></Header>
        <Outlet>
          <Home></Home>
        </Outlet>
        <Footer></Footer>
      </CategoryListContext.Provider>
    </div>
  );
};

export default App;
