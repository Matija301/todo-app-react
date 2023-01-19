import React from "react";

const TodoForm = () => {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form__wraper">
        <input className="form__input" name="todoInput" type="text" />
      </div>
    </form>
  );
};

export default TodoForm;
