import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "../DND-types/types";
import SvgClose from "../svg/SvgClose";

const TodoItem = ({
  deleteTask,
  changeComplete,
  itemTodo,
  index,
  moveTodo,
}) => {
  const { task, key, complete } = itemTodo;
  const ref = useRef(null);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.TODO,
    item: () => {
      return { key, index };
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

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
      const dragIndex = item.index;
      const hoverIndex = index;

      console.log(dragIndex);
      console.log(hoverIndex);
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
        opacity: isDragging ? 0.8 : 1,
        backgroundColor: isOver && "#f2f2f2",
      }}
      className="todo-list"
      data-handler-id={handlerId}
    >
      <input
        type="checkbox"
        className="list__button"
        name="listItem1"
        onClick={() => changeComplete(key)}
        checked={complete}
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
