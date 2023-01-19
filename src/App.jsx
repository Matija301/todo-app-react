import React, { useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import Header from "./components/header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
const keyStorage = "key-local";

function getList() {
  const getData = localStorage.getItem(keyStorage);
  if (getData) {
    const data = JSON.parse(getData);
    return data;
  } else {
    return [];
  }
}

const App = () => {
  const [list, setList] = useState(getList);
  const [name, setName] = useState("");
  const [configList, setConfigList] = useState("All");

  useEffect(() => {
    localStorage.setItem(keyStorage, JSON.stringify(list));
  }, [list]);

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
