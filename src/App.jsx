import React, { useState } from "react";
import { Footer } from "./components/Footer";
import Header from "./components/header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [list, setList] = useState([]);
  const [name, setName] = useState("");
  const [configList, setConfigList] = useState("All");

  return (
    <>
      <Header></Header>
      <TodoForm
        setList={setList}
        setName={setName}
        name={name}
        list={list}
      ></TodoForm>
      <TodoList
        setList={setList}
        list={list}
        configList={configList}
        setConfigList={setConfigList}
      ></TodoList>
      <Footer></Footer>
    </>
  );
};

export default App;
