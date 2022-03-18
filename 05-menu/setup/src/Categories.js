import React from "react";

const Categories = ({ filterItems, categories }) => {
  return (
    <div className="btn-container">
      {categories.map((cate) => (
        <button
          className="filter-btn"
          onClick={() => {
            filterItems(cate);
          }}
        >
          {cate}
        </button>
      ))}
    </div>
  );
};

export default Categories;
