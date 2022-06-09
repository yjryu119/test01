import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const Child = ({ setData, onClick, ex01 }) => {
  let word;
  const onChangeHandler = (e) => {
    word = e.target.value;
  };

  return (
    <>
      <input onChange={onChangeHandler}></input>
      <button onClick={onClick}>send</button>
      <button
        onClick={(whateve) => {
          ex01(whateve);
        }}
      >
        example1
      </button>
      <button
        onClick={() => {
          ex01(3);
        }}
      >
        example2
      </button>
    </>
  );
};
export default Child;
