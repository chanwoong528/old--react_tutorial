import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [show, setShow] = useState(false);
  const onShow = (toggle) => {
    setShow(toggle);
  };
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button
          className="btn"
          onClick={() => {
            onShow(!show);
          }}
        >
          {show ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {show ? <p>{info}</p> : null}
    </article>
  );
};

export default Question;
