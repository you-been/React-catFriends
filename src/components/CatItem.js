import React from "react";

const CatItem = ({ item, catFriendsStyle, onDel }) => {
  const { id, image, name, age } = item;
  const path = process.env.PUBLIC_URL;
  return (
    <div className={catFriendsStyle.friendWrapper}>
      <img src={path + image} alt="cat" className={catFriendsStyle.img} />
      <div className={catFriendsStyle.txtWrapper}>
        <strong>이름: {name}</strong>
        <p>나이: {age}</p>
        <button onClick={() => onDel(id)} className={catFriendsStyle.delBtn}>
          삭제
        </button>
      </div>
    </div>
  );
};

export default CatItem;
