import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

const keyStorage = "key-local";
const lightModeKey = "light-local";

function getList() {
  const getData = localStorage.getItem(keyStorage);
  if (getData) {
    const data = JSON.parse(getData);
    return data;
  } else {
    return [];
  }
}

function getLightMode() {
  const getData = localStorage.getItem(lightModeKey);
  if (getData) {
    const data = getData;
    return data;
  } else {
    return "light";
  }
}

const App = () => {
  const [list, setList] = useState(getList);
  const [name, setName] = useState("");
  const [configList, setConfigList] = useState("All");
  const [lightMode, setLightMode] = useState(getLightMode);

  useEffect(() => {
    localStorage.setItem(keyStorage, JSON.stringify(list));
  }, [list]);
  useEffect(() => {
    if (lightMode === "light") {
      document.body.classList.add("darkmode");
    } else if (lightMode === "dark") {
      document.body.classList.remove("darkmode");
    }
    localStorage.setItem(lightModeKey, lightMode);
  }, [lightMode]);

  return (
    <>
      <Header lightMode={lightMode} setLightMode={setLightMode}></Header>
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
