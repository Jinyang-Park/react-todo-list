import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Input({ setTodos }) {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const handleSubmitClick = (event) => {
    event.preventDefault(); // 추가를 눌르면 새로고침 되지않고 출력되게 만든다. 리렌더링 방지
    // 값 체크
    if (!title) {
      // title === "" || contents === ""이라고 적어도 된다
      alert("제목을 입력해주세요");
      return; //함수형은 리턴이 있을때까지 작동한다. 리턴을 넣어야 하나만 작성해도 작동이 되지 않도록 만들어야된다.
    }
    if (!contents) {
      alert("내용을 입력해주세요");
      return;
    }

    const newTodo = {
      title: title,
      contents: contents,
      isDone: false,
      id: uuidv4(),
    };
    // 지금 세팅된 title과 contents를 todos에 넣어주는 작업!
    setTodos((prev) => {
      return [...prev, newTodo];
    });

    // 값 초기화!
    setTitle("");
    setContents("");
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value); // 제목에 타이핑이 들어간 값이 value이다. setTitle에 넣어준다. 그리고 title에 계속 넣어준다.  state가 계속 갱신한다.
  };

  const handleContentsChange = (event) => {
    setContents(event.target.value); // 내용에 타이핑이 들어간 값이 value이고 setContents에 넣어주면 contents에 계속 넣어준다. state가 계속 갱신한다.
  };

  return (
    <div className='input_container'>
      <section>
        <form className='input_form' onSubmit={handleSubmitClick}>
          <label className='input_label'>Title </label>
          <input className='input_title' value={title} onChange={handleTitleChange} placeholder='Add Todo...' />
          <label className='input_label'>Contents</label>
          <input className='input_contents' value={contents} onChange={handleContentsChange} placeholder='Add Contents...' />
          <button className='submit_btn'>Submit</button>
        </form>
      </section>
    </div>
  );
}

export default Input;
