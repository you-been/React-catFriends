import React, { useState } from "react";
import CatItem from "./CatItem";

const Cat = ({ catFriendsStyle, onDel, data }) => {
  return (
    <div className={catFriendsStyle.listWrapper}>
      {data.map((item) => (
        <CatItem
          key={item.id}
          item={item}
          catFriendsStyle={catFriendsStyle}
          onDel={onDel}
        />
      ))}
    </div>
  );
};
export default Cat;
