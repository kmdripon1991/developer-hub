import React from 'react';

const Header = () => {
    return (
        <header>
            <div>
                <h1 className='font-extrabold text-7xl'>One Step <br />Closer To Your <br /><span className='text-cyan-400'>Dream Job</span></h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button>Get Started</button>
            </div>
            <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Flovepik.com%2Fimages%2Fpng-programmer.html&psig=AOvVaw1dpHVFFpReVuFnOuMsLLL9&ust=1706435631210000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCLDEo6mm_YMDFQAAAAAdAAAAABAE' alt="" />
        </header>
    );
};

export default Header;