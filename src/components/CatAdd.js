import React, { useRef, useState } from "react";

const CatAdd = ({ onAdd, catFriendsStyle }) => {
  const [text, setText] = useState("");
  const [number, setNumber] = useState("");
  const [url, setUrl] = useState("");
  const focusRef = useRef();

  const changeInputText = (e) => {
    const { value } = e.target;
    setText(value);
  };
  const changeInputNumber = (e) => {
    const { value } = e.target;
    setNumber(value);
  };
  const changeInputUrl = (e) => {
    const { value } = e.target;
    setUrl(value);
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("내용을 입력하세요");
      return;
    }
    // 추가 함수
    onAdd(text, number, url);
    setText("");
    setNumber(0);
    setUrl("");

    focusRef.current.focus();
  };

  return (
    <form onSubmit={onSubmit} className={catFriendsStyle.formWrapper}>
      <label>
        이름:
        <input
          type="text"
          value={text}
          onChange={changeInputText}
          ref={focusRef}
          className={catFriendsStyle.input}
        />
      </label>
      <label>
        나이:
        <input
          type="number"
          value={number <= 0 ? "" : null}
          onChange={changeInputNumber}
          ref={focusRef}
          className={catFriendsStyle.input}
        />
      </label>
      <label>
        사진:
        <input
          type="url"
          value={url}
          onChange={changeInputUrl}
          ref={focusRef}
          className={catFriendsStyle.input}
        />
      </label>
      <button type="submit" className={catFriendsStyle.addBtn}>
        추가
      </button>
    </form>
  );
};

export default CatAdd;
