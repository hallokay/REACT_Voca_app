// 특정 날짜를 클릭했을 때 단어들이 나오는 페이지

import React from "react";
import { useParams } from "react-router";
import Word from "./Word";
import useFetch from "../hooks/useFetch";

const Day = () => {
  const {day} = useParams();
const words = useFetch(`http://localhost:3001/words?day=${day}`)

  return (
    <>
    <h2>Day {day}</h2>
    {words.length === 0 && <span>Loding...</span>}
      <table>
        <tbody>
          {words.map((word) => (
           <Word key={word.id} word={word}/>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Day;
