import React from "react";

function Todo({ item, isActive, setTodos }) {
  const handleDeleteButtonClick = () => {
    // prev에는 현재 상태의 state가 들어있는 것!
    // prev에는 현재 세개가 들어가 있다. 제목1, 제목2, 제목3 베열인데 객체로 이루어진 애들이 들어가 있다.
    // t에는 제목1 한개가 들어가있고 그 다음 제목2가 들어가있다.
    // 누른거만 빼고 필터링하자! 누른거만 빼고 나머지를 출력하자
    // t.id는 첫번째 제목 1의 id이다.
    // item.id는 내가 눌른 id이다.
    setTodos((prev) =>
      prev.filter((t) => {
        return t.id !== item.id;
      })
    );
  };

  //map을 쓴 이유는 ? 기존의 값에 갯수는 유지하고 그 안에 값만 살짝 바꾸는것이다.
  // t.id와 item.id가 같으면 isDone을 반대로 바꿔줘라!
  const handleSwitchButtonClick = () => {
    setTodos((prev) =>
      prev.map((t) => {
        if (t.id === item.id) {
          return { ...t, isDone: !t.isDone };
          // isDone을 반대로 바꿔줘라! !t.isDone으로 쓴다.
        } else {
          return t;
        }
      })
    );
  };
  return (
    <div className='todo_container' key={item.id}>
      <h5 className='todo_title'>{item.title}</h5>
      <p className='todo_contents'>{item.contents}</p>
      <div className='buttons'>
        <button className='todo_btns' onClick={handleSwitchButtonClick}>
          {isActive ? "Done" : "Cancel"}
        </button>
        <button className='todo_btns' onClick={handleDeleteButtonClick}>
          Delete
        </button>
      </div>
      {/* <button onClick={handleDeleteButtonClick()}>삭제</button> ()를 적으면 호출이다. */}
    </div>
  );
}

export default Todo;
