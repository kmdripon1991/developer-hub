import React from 'react';

const Navbar = () => {
    return (
        <nav className='flex items-center justify-around m-10'>
            <h1 className='font-extrabold text-3xl'>DeveloperHub</h1>
            <ul className='flex justify-around gap-10 font-medium text-cyan-400'>
                <li>Statistics</li>
                <li>Applied Jobs</li>
                <li>Blog</li>
            </ul>
            <button className='bg-blue-400 py-3 px-4 rounded-md text-white hover:bg-cyan-400'>Start Applying</button>
        </nav>
    );
};

export default Navbar;