import React from "react";

const TodoForm = ({ setList, setName, name, list }) => {
  function handleSubmit(e) {
    e.preventDefault();
    if (name !== null && name.trim() !== "") {
      const key = crypto.randomUUID();
      setList([
        ...list,
        { key, task: name, complete: false, index: list.length },
      ]);
    }
    setName("");
  }
  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form__wraper">
        <input
          maxLength={35}
          className="form__input"
          name="todoInput"
          type="text"
          onChange={handleChange}
          value={name}
        />
      </div>
    </form>
  );
};

export default TodoForm;
