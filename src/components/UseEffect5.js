import React, { useState, useEffect } from "react";

const UseEffect5 = () => {
  const [count, setCount] = useState(0);
  const [txt, setTxt] = useState(0);

  const changeInput = (e) => {
    const { value } = e.target;
    setTxt(Number(value)); //input의 반환값을 문자열 Number(value) or ParseInt(value) or (+value)로 변경(문자열 => 숫자)
  };
  const increment = () => {
    setCount((num) => num + txt);
  };
  useEffect(() => {
    console.log("setInterval");
    const timer = setInterval(increment, 2000);
    //setInterval 제거 후 재랜더링
    return () => {
      console.log("클린업");
      clearInterval(timer);
    };
  }, [txt]);

  return (
    <div>
      <h2>입력한 값만큼 2초마다 값 증가</h2>
      <p>
        숫자 간격 : <input type="text" value={txt} onChange={changeInput} />
      </p>
      <h3>{count}</h3>
    </div>
  );
};

export default UseEffect5;
