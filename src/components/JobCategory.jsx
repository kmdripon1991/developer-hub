import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Category from "./Category";
import { CategoryListContext } from "../App";

const JobCategory = () => {
  const categoryList = useContext(CategoryListContext);
  console.log(categoryList);
  return (
    <div className="my-12 mx-auto">
      <h2 className="font-bold text-2xl text-center">Job Category List</h2>
      <p className="text-sm text-gray-400 text-center my-4">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>

      <div className="flex my-6 items-center justify-between mx-20 px-20">
        {categoryList.map((singleCategory) => (
          <Category
            key={singleCategory.id}
            singleCategory={singleCategory}
          ></Category>
        ))}
      </div>
    </div>
  );
};

export default JobCategory;
