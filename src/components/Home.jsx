import React from 'react';
import Header from './Header';
import JobCategory from './JobCategory';
import { useLoaderData } from 'react-router-dom';
// import { useLoaderData } from 'react-router-dom';

const Home = () => {
    
    
    return (
        <div>
            <JobCategory></JobCategory>
        </div>
    );
};

export default Home;