import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Redux/Actions/action";

const AddToDo = () => {
  const [input, setInput] = useState("");
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  let id = tasks.length + 1;

  return (
    <div >
      <div className="add-element">
        <h1>Welcome to your ToDo APP!</h1>
        <h4>Add a new Task</h4>
        <div>
          <input
            type="text"
            id="myInput"
            placeholder="Enter New Task..."
            onChange={(el) => setInput(el.target.value)}
            value={input}
          />
          <br />
          <button
            className="add-Btn"
            onClick={() => {
              input.trim()
                ? dispatch(addTodo({ id, description: input, isDone: false }))
                : alert(`Please enter a new TASK `);
              setInput("");
            }}
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default connect()(AddToDo);
