import React, { useState } from "react";
import catFriendsStyle from "../assets/Style/catFriends.module.css";
import catDB from "../assets/DB/catData";
import Cat from "./Cat";
import CatAdd from "./CatAdd";

const CatFriends = () => {
  const [data, setData] = useState(catDB);
  const [isChk, setIsChk] = useState(false);
  const onAdd = (text, number, url) => {
    setData([
      ...data,
      {
        id: catDB.length++,
        name: text,
        age: number,
        image: url,
      },
    ]);
  };
  const onDel = (id) => {
    setData(data.filter((data) => data.id !== id));
  };

  const onAllDel = () => {
    setData([]);
  };
  const onReset = () => {
    setData(catDB);
  };
  const onCheck = (evt) => {
    const { checked } = evt.target;
    setIsChk(checked);
  };
  return (
    <div className={catFriendsStyle.wrapper}>
      <h2>고양이 친구들 : {data.length}마리</h2>
      <label htmlFor="">
        <input type="checkbox" id="chk" onChange={onCheck} checked={isChk} />
        고양이 추가 🐱
      </label>
      {data && (
        <Cat catFriendsStyle={catFriendsStyle} onDel={onDel} data={data} />
      )}
      <div className={catFriendsStyle.btnWrapper}>
        <button onClick={onAllDel} className={catFriendsStyle.mainBtn}>
          모두 삭제
        </button>
        <button onClick={onReset} className={catFriendsStyle.mainBtn}>
          초기 복구
        </button>
      </div>
      {isChk && <CatAdd onAdd={onAdd} catFriendsStyle={catFriendsStyle} />}
    </div>
  );
};

export default CatFriends;
