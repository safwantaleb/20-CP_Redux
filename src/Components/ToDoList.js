import React from "react";
import { connect, useSelector } from "react-redux";
import ToDoCard from "./ToDoCard";

const ToDoList = ({taskFilter}) => {
  const tasks = useSelector((state) => state.tasks);
  return (
    <div className="Container">
      <div>
        <h2>‟ Don't Just Say It... DO IT! ”</h2>
      </div>
      <div>
        <ul id="myUl">
          {tasks
          .filter((el) => {
            switch (taskFilter) {
              case "completed" : return el.isDone === true;
              case "uncompleted" : return el.isDone===false;
              default: return el;
            }
          })
          .map((el, i) => (
            <ToDoCard task={el} key={i} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default connect()(ToDoList);
