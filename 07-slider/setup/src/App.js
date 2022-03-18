import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [people, setPeople] = useState(data);
  const [personIndex, setPersonIndex] = useState(0);
  useEffect(() => {
    const lastIndex = people.length - 1;
    const firstIndex = 0;
    if (personIndex < 0) {
      setPersonIndex(lastIndex);
    }
    if (personIndex > people.length - 1) {
      setPersonIndex(firstIndex);
    }
  }, [personIndex, people]);
  useEffect(() => {
    let slider = setInterval(() => {
      setPersonIndex(personIndex + 1);
    }, 1000);
    return () => clearInterval(slider);
  }, [personIndex]);
  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>Reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, index) => {
          const { id, image, name, title, quote } = person;

          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastIndex";
          }
          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title"> {title}</p>
              <p className="text"> {quote}</p>
              <FaQuoteRight className="icon"></FaQuoteRight>
            </article>
          );
        })}
        <button
          className="prev"
          onClick={() => setPersonIndex(personIndex - 1)}
        >
          <FiChevronLeft></FiChevronLeft>
        </button>
        <button
          className="next"
          onClick={() => setPersonIndex(personIndex + 1)}
        >
          <FiChevronRight></FiChevronRight>
        </button>
      </div>
    </section>
  );
}

export default App;
