import React, { useState } from "react";

///////////////////////////////////
// 함수형 컴포넌트
// 기존에 setState와 ref를 못썻지만
// 쓸수 있게 나온게 Hooks 이다.
///////////////////////////////////
const GugudanM = () => {
  const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = React.useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = React.useState("");
  const [result, setResult] = React.useState("");
  const inputRef = React.useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (parseInt(value) === first * second) {
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue("");
      setResult(value + " 정답!");
      inputRef.current.focus();
    } else {
      setValue("");
      setResult("땡");
      inputRef.current.focus();
    }
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <React.Fragment>
      <div>
        {first}곱하기 {second}는?
      </div>
      <form onSubmit={onSubmitForm}>
        <input
          ref={inputRef}
          onChange={onChangeInput}
          type="number"
          value={value}
        />
        <button>입력</button>
      </form>
      <div id="result">{result}</div>
    </React.Fragment>
  );
};

export default GugudanM;
