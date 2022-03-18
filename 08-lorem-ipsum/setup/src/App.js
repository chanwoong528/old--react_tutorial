import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const onChangeCount = (e) => {
    setCount(e.target.value);
  };

  const onGenerate = (e) => {
    e.preventDefault();

    let amount = +count;
    if (count <= 0) {
      amount = 1;
    }
    if (count > data.length - 1) {
      amount = data.length - 1;
    }
    console.log("count: ", count);
    console.log("amount:", amount);

    setText(data.slice(0, amount));
  };
  return (
    <section className="section-center">
      <h3>Tired of boring lorem ipsum?</h3>
      <form className="lorem-form " onSubmit={onGenerate}>
        <label htmlFor="amount">paragraph:</label>
        <input
          type="number"
          id="amount"
          name="amount"
          onChange={onChangeCount}
          value={count}
        />
        <button className="btn" type="submit">
          Generate
        </button>
      </form>

      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
