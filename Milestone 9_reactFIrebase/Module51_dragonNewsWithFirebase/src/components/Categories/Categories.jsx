import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch('/categories.json').then((res) => res.json());

const Categories = () => {
  const categories = use(categoryPromise);

  return (
    <div>
      <h2 className="font-bold">All Categories</h2>
      <div className="grid grid-cols-1 mt-5">
        {categories.map((category) => (
          <NavLink to={`/category/${category.id}`} className="btn font-semibold text-accent bg-base-100 border-0 hover:bg-base-200 " key={category.id}>{category.name}</NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
