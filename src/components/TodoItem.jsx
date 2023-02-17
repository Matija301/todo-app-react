import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "../DND-types/types";
import SvgClose from "../svg/SvgClose";

const TodoItem = ({ deleteTask, changeComplete, itemTodo, moveTodo, id }) => {
  const { task, complete } = itemTodo;
  const ref = useRef(null);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.TODO,
    item: () => {
      return { id };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));
  const opacity = isDragging ? 0.4 : 1;

  const [{ handlerId, isOver }, drop] = useDrop({
    accept: ItemTypes.TODO,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
        isOver: !!monitor.isOver(),
      };
    },
    drop(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.id;
      const hoverIndex = id;
      if (dragIndex === hoverIndex) {
        return;
      }
      moveTodo(dragIndex, hoverIndex);
    },
  });
  drag(drop(ref));
  return (
    <li
      ref={ref}
      style={{
        opacity,
        backgroundColor: isOver && "#f2eaa1",
      }}
      className="todo-list"
      data-handler-id={handlerId}
    >
      <input
        type="checkbox"
        className="list__button"
        name="listItem1"
        onClick={() => changeComplete(id)}
        checked={complete}
        readOnly
      ></input>
      <label htmlFor="listItem1" className="list__text">
        {task}
      </label>
      <div className="list__delete" onClick={() => deleteTask(id)}>
        <SvgClose />
      </div>
    </li>
  );
};

export default TodoItem;
