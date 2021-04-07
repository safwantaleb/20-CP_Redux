import "./App.css";
import React, { useState } from "react";
import AddToDo from "./Components/AddToDo";
import ToDoList from "./Components/ToDoList";

function App() {
  const [taskFilter, setTaskFilter] = useState("all");
  return (
    <div>
      <div className="Input-Container">
        <AddToDo />
        <div className="select-class">
          <select
            className="task-filter"
            onChange={(el) => {
              setTaskFilter(el.target.value);
            }}
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </div>
      <ToDoList taskFilter={taskFilter} />
    </div>
  );
}

export default App;
