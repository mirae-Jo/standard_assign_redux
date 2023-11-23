import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import uuid from "react-uuid";
import { addTodo } from "../redux/modules/todos";
import shortid from "shortid";

const Home = () => {
  const todos = useSelector((state) => state.todos);
  console.log(todos);

  const dispatch = useDispatch();

  const [content, setContent] = useState();
  const newTodo = {
    id: shortid.generate(),
    content: content,
    isDone: false,
  };

  return (
    <div>
      <h1>TODOLIST</h1>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(addTodo(newTodo));
            setContent("");
          }}
        >
          <input
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
          <button>입력</button>
        </form>
      </div>
      {todos &&
        todos.map((todo) => {
          return <div>{todo.content}</div>;
        })}
    </div>
  );
};

export default Home;
