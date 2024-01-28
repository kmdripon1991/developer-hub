import React from 'react';

const Category = ({singleCategory}) => {
    const {logo, category_name, availability}= singleCategory
    
    return (
        <div className='p-5 bg-gray-400 rounded-md w-auto gap-2'>
            <img className='w-12 h-12' src={logo} alt="" />
            <h1 className='font-extrabold my-2 text-xl'>{category_name}</h1>
            <p>{availability}</p>
        </div>
    );
};

export default Category;