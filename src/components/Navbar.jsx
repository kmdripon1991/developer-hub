import React from "react";

const Navbar = () => {
  return (
    <nav className=" flex items-center justify-between">
      <h1 className="font-extrabold text-3xl tracking-wider">DeveloperHub</h1>
      <ul className="flex justify-around gap-10 font-medium text-cyan-400">
        <li>Statistics</li>
        <li>Applied Jobs</li>
        <li>Blog</li>
      </ul>
      <button className="btn-primary">
        Start Applying
      </button>
    </nav>
  );
};

export default Navbar;
