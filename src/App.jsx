import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

function App() {
  //todos: todo라는 객체를 여러개 가지고 있는 배열!
  const [todos, setTodos] = useState(initialState);
  //todos 변수 , setTodos 변수를 제어하는 메서드(방법)
  // 리액트에서는 setTodos는 (function (previous)) 이전의 값을 갖는 법칙이있다.

  return (
    <div className='container'>
      {/*<header>헤더입니다.</header>*/}
      <Header>Todo</Header>
      <main className='main_container'>
        {/*인풋을 만들어 입력하는 부분 */}

        <Input setTodos={setTodos} />

        {/*todoList을 출력하는 부분 */}
        <div className='todo_list'>
          <TodoList isActive={true} todos={todos} setTodos={setTodos} />
          <TodoList isActive={false} todos={todos} setTodos={setTodos} />
        </div>
      </main>
      <Footer>Mate</Footer>
    </div>
  );
}

const initialState = [
  {
    title: "리액트 todo완료하기",
    contents: "유튜브 영상 찍어서 제출하기",
    isDone: false,
    id: uuidv4(),
  },
  {
    title: "호두 산책",
    contents: "공놀이하기",
    isDone: true,
    id: uuidv4(),
  },
  {
    title: "저녁 해먹기",
    contents: "배달 금지!!!!!",
    isDone: false,
    id: uuidv4(),
  },
];

export default App;
