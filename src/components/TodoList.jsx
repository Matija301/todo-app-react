import React from "react";
import SvgClose from "../svg/SvgClose";
import TodoItem from "./TodoItem";

const TodoList = ({ setList, list, configList, setConfigList }) => {
  function clearCompleted(complete) {
    const newList = list.filter((item) => !complete);
    setList(newList);
  }

  function deleteTask(key) {
    const newList = list.filter((item) => item.key !== key);
    setList(newList);
  }

  function changeComplete(key) {
    const newList = list.map((item) => {
      if (item.key !== key) {
        return item;
      } else {
        return { ...item, complete: !item.complete };
      }
    });
    setList(newList);
  }

  return (
    <>
      <ul className="todo">
        {list.map((item) => {
          const { task, key } = item;
          if (configList === "All") {
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
          } else if (configList === "Active" && item.complete === false) {
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
          } else if (configList === "Completed" && item.complete === true) {
            return (
              <li key={key} className="todo-list">
                <input
                  type="checkbox"
                  className="list__button"
                  name="listItem1"
                  checked="true"
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
          }
        })}
        <li className="todo-info">
          <p className="info__left">5 items left</p>
          <div className="info__display">
            <p
              className="display__all info__active"
              onClick={() => setConfigList("All")}
            >
              All
            </p>
            <p
              className="display__active"
              onClick={() => setConfigList("Active")}
            >
              Active
            </p>
            <p
              className="display__completed"
              onClick={() => setConfigList("Completed")}
            >
              Completed
            </p>
          </div>
          <p className="info__clear">Clear Completed</p>
        </li>
      </ul>
    </>
  );
};

export default TodoList;
