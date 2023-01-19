import React from "react";
import SvgClose from "../svg/SvgClose";

const TodoItem = ({ key, task, deleteTask, changeComplete }) => {
  return (
    <li key={key} className="todo-list">
      <input
        type="checkbox"
        className="list__button"
        name="listItem1"
        onClick={() => changeComplete(key)}
      ></input>
      <label htmlFor="listItem1" className="list__text">
        {task}
      </label>
      <div className="list__delete" onClick={() => deleteTask(key)}>
        <SvgClose />
      </div>
    </li>
  );
};

export default TodoItem;
