import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      console.log(colors);
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };
  const onChangeColor = (e) => {
    setColor(e.target.value);
  };

  return (
    <>
      <section className="container ">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={onChangeColor}
            className={`${error ? `error` : null}`}
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((item, index) => {
          return (
            <SingleColor key={index} {...item} index={index}></SingleColor>
          );
        })}
      </section>
    </>
  );
}

export default App;
