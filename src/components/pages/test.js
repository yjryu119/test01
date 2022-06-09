import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Child from "./child";

const Test = () => {
  const [data, setData] = useState(false);

  const onClickParents = (e) => {
    console.log(e);
  };

  const ex01 = (index) => {
    console.log(index);
  };

  return (
    <>
      <Child setData={setData} ex01={ex01}></Child>
      <div>{data}</div>
    </>
  );
};
export default Test;
