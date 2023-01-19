import React from "react";
import SvgClose from "../svg/SvgClose";
SvgClose;

const TodoList = () => {
  return (
    <>
      <ul className="todo">
        <li className="todo-list">
          <input
            type="checkbox"
            className="list__button"
            name="listItem1"
          ></input>
          <label for="listItem1" className="list__text">
            Test 123
          </label>
          <div className="list__delete">
            <SvgClose />
          </div>
        </li>
        <li className="todo-list">
          <input
            type="checkbox"
            className="list__button"
            name="listItem1"
          ></input>
          <label for="listItem1" className="list__text">
            Test 123
          </label>
          <div className="list__delete">
            <SvgClose />
          </div>
        </li>
        <li className="todo-list">
          <input
            type="checkbox"
            className="list__button"
            name="listItem1"
          ></input>
          <label for="listItem1" className="list__text">
            Test 123
          </label>
          <div className="list__delete">
            <SvgClose />
          </div>
        </li>
        <li className="todo-info">
          <p className="info__left">5 items left</p>
          <div className="info__display">
            <p className="display__all info__active">All</p>
            <p className="display__active">Active</p>
            <p className="display__completed">Completed</p>
          </div>
          <p className="info__clear">Clear Completed</p>
        </li>
      </ul>
    </>
  );
};

export default TodoList;
