import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
const allCate = ["all", ...new Set(items.map((item) => item.category))];
function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCate);

  const filterItems = (category) => {
    console.log(menuItems);
    console.log(categories);
    if (category === "all") {
      console.log("all");
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories
          categories={categories}
          filterItems={filterItems}
        ></Categories>
        <Menu items={menuItems}></Menu>
      </section>
    </main>
  );
}

export default App;
