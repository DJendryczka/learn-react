import React,  {useState} from "react";
import TodoList from "./TodoList";

function App() {
   useState([])
  return (
    <>
      <TodoList />
      <input type="text" />
      <button>Add to do</button>
      <button>Clear</button>
      <div>Ready</div>
    </>
  )
}

export default App;
