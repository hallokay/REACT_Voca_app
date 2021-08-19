import React, { useRef, useState } from "react";
import { useHistory } from "react-router";
import useFetch from "../hooks/useFetch";

const CreateWord = () => {
  const days = useFetch(`http://localhost:3001/days`);
  const history = useHistory();
  const [isLoading, setLoading] = useState(false);

  function onSubmit(e) {
    e.preventDefault();

    // 로딩중에 생성 더 안되게 막기
    // isLoding 로딩상태가 아닐때 새로운 단어 생성 가능
    if (!isLoading) {
      setLoading(true);
      // 통신 중일땐 isLoding이 true가됨
      fetch(`http://localhost:3001/words/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          day: dayRef.current.value,
          eng: engRef.current.value,
          kor: korRef.current.value,
          isDone: false,
        }),
      }).then((res) => {
        if (res.ok) {
          alert("생성이 완료되었습니다.");
          history.push(`/day/${dayRef.current.value}`);
          setLoading(false);
        }
      });
    }
  }

  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);
  // ref를 써주면 돔 요소가 생성된 후 접근 가능

  return (
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label htmlFor="">Eng</label>
        <input type="text" placeholder="영단어" ref={engRef} />
      </div>
      <div className="input_area">
        <label htmlFor="">Kor</label>
        <input type="text" placeholder="뜻" ref={korRef} />
      </div>
      <div className="input_area">
        <label htmlFor="">Day</label>
        <select ref={dayRef}>
          {days.map((day) => (
            <option key={day.id} value={day.day}>
              {day.day}
            </option>
          ))}
        </select>
      </div>
      <button
        style={{
          opacity: isLoading ? 0.3 : 1,
        }}
      >
        {isLoading ? "Saving..." : "저장"}
      </button>
    </form>
  );
};

export default CreateWord;
