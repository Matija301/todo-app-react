import React, { useRef, useState } from "react";
import TodoItemAll from "./TodoItem";

const TodoList = ({ setList, list, configList, setConfigList }) => {
  function clearCompleted() {
    const newList = list.filter((item) => !item.complete);
    setList(newList);
  }
  function deleteTask(key) {
    const newList = list.filter((item) => item.key !== key);
    setList(newList);
  }

  function moveTodo(dragId, hoverId) {
    const listNew = list.map((item) => item);
    const dragItem = list.find((item) => item.key === dragId);
    const dragIndex = dragItem.index;
    const hoverItem = list.find((item) => item.key === hoverId);
    const hoverIndex = hoverItem.index;
    listNew[hoverIndex] = listNew[dragIndex];
    listNew[hoverIndex].index = hoverIndex;
    listNew[dragIndex] = hoverItem;
    listNew[dragIndex].index = dragIndex;
    setList(listNew);
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
          if (configList === "All") {
            return (
              <TodoItemAll
                key={item.key}
                id={item.key}
                itemTodo={item}
                deleteTask={deleteTask}
                changeComplete={changeComplete}
                moveTodo={moveTodo}
              ></TodoItemAll>
            );
          } else if (configList === "Active" && item.complete === false) {
            return (
              <TodoItemAll
                key={item.key}
                id={item.key}
                itemTodo={item}
                deleteTask={deleteTask}
                changeComplete={changeComplete}
                moveTodo={moveTodo}
              ></TodoItemAll>
            );
          } else if (configList === "Completed" && item.complete === true) {
            return (
              <TodoItemAll
                key={item.key}
                id={item.key}
                itemTodo={item}
                deleteTask={deleteTask}
                changeComplete={changeComplete}
                moveTodo={moveTodo}
              ></TodoItemAll>
            );
          }
        })}
        <li className="todo-info">
          <p className="info__left">{`${list.reduce((sum, value) => {
            if (!value.complete) {
              return sum + 1;
            } else {
              return sum;
            }
          }, 0)} items left`}</p>
          <div className="info__display">
            <p
              className={`display__all ${
                configList === "All" ? "info__active" : ""
              }`}
              onClick={() => setConfigList("All")}
            >
              All
            </p>
            <p
              className={`display__active ${
                configList === "Active" ? "info__active" : ""
              }`}
              onClick={() => setConfigList("Active")}
            >
              Active
            </p>
            <p
              className={`completed ${
                configList === "Completed" ? "info__active" : ""
              }`}
              onClick={() => setConfigList("Completed")}
            >
              Completed
            </p>
          </div>
          <p className="info__clear" onClick={clearCompleted}>
            Clear Completed
          </p>
        </li>
      </ul>
    </>
  );
};

export default TodoList;
