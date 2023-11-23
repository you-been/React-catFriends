import React, { useState, useEffect, useCallback } from "react";

const UseEffect3sub = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const onMove = useCallback(
    (e) => {
      setX(e.clientX);
      setY(e.clientY);
    },
    [setX, setY]
  );

  useEffect(() => {
    console.log("실행");
    window.addEventListener("mousemove", onMove); //리액트에선 window객체 생략 안됨

    // clean-up 함수: 살아있는 이벤트를 제거
    return () => {
      console.log("클린 업");
      window.removeEventListener("mousemove", onMove);
    };
  }, [onMove]); //onMove함수가 실행될때마다 useEffect실행 / []값없으면 한번만 실행

  return (
    <div>
      <h3>마우스 좌표</h3>
      <div
        style={{
          border: "1px solid #000",
          width: "60vw",
          padding: 20,
          margin: 5,
          fontSize: 30,
        }}>
        x축 : {x} / y축 : {y}
      </div>
    </div>
  );
};

export default UseEffect3sub;

/* 
useCallback(()=>{},[]);
함수를 memorizaion 함. 즉 이전에 계산된 값으로 저장했다가 동일한 상황이 다시 발생하면 다시 계산하지 않고 저장된 값을 반환.
주로 하위 컴포넌트에 콜백함수를 전달할 때 사용.
*/
