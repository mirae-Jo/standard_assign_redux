// import uuid from "react-uuid";
import shortid from "shortid";

const ADD_TODO = "todos/ADD_TODO";

export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};

const initialState = [];

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload]; //TODO: 여기 작성

    // case "DELETE_TODO":
    //   return; //TODO: 여기 작성

    // case "SWITCH_TODO":
    //   return; //TODO: 여기 작성

    default:
      return state;
  }
};

export default todos;
