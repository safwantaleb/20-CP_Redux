import React from "react";
import { connect, useSelector } from "react-redux";
import ToDoCard from "./ToDoCard";

const ToDoList = () => {
  const tasks = useSelector((state) => state.tasks);
  return (
    <div className="Container">
      <div>
        <h2>‟ Don't Just Say It... DO IT! ”</h2>
      </div>
      <div>
        <ul id="myUl">
          {tasks.map((el, i) => (
            <ToDoCard task={el} key={i} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default connect()(ToDoList);
