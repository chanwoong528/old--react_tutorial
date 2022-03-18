import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  return (
    <article className="review">
      <div className="img-container">
        <img className="person-img" src={image} alt={name} />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button
          className="next-btn"
          onClick={() => {
            console.log("index: ", index);
            console.log("people: ", people.length - 1);
            if (index >= people.length - 1) {
              setIndex(0);
            } else {
              setIndex(index + 1);
            }
          }}
        >
          <FaChevronLeft></FaChevronLeft>
        </button>
        <button
          className="prev-btn"
          onClick={() => {
            console.log("index: ", index);
            if (index <= 0) {
              setIndex(people.length - 1);
            } else {
              setIndex(index - 1);
            }
          }}
        >
          <FaChevronRight></FaChevronRight>
        </button>
      </div>
      <button
        className="random-btn"
        onClick={() => {
          const randNum = Math.floor(Math.random() * people.length);
          console.log(randNum);
          setIndex(randNum);
        }}
      >
        Suprise Me
      </button>
    </article>
  );
};

export default Review;
