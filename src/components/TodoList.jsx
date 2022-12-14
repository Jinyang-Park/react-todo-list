import React from "react";
import Todo from "./Todo";

function TodoList({ todos, isActive, setTodos }) {
  return (
    <div className='todo_list_container'>
      <h2 className='todo_list_title'>{isActive === true ? "Active" : "Done"}</h2>
      {todos
        //isDone일 때는 isActive이 기본값(true)의 반대이면 false인 값만 표시
        //isDone일 때는 isActive이 기본값(false)의 반대이면 true인 값만 표시
        .filter((item) => item.isDone === !isActive)
        .map((item) => {
          return <Todo key={item.id} item={item} isActive={isActive} setTodos={setTodos}></Todo>;
        })}
    </div>
  );
}

export default TodoList;
