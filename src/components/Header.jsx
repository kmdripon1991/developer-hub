import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="my-container">
      <Navbar></Navbar>
      <header className="my-10">
        <div className="flex">
          <div className="flex-col">
            <h1 className="font-extrabold text-7xl">
              Unlock Tech <br />
              <span className="text-cyan-400">DeveloperHub</span> <br /> Pathway
              to Success
            </h1>
            <p className="my-5 font-bold text-lg text-gray-700">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button className="btn-primary">Get Started</button>
          </div>
          <img className="bg-gray-300" src="./images/user.png" alt="" />
        </div>
      </header>
    </div>
  );
};

export default Header;
