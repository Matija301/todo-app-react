import React, { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {
  MouseTransition,
  MultiBackend,
  TouchTransition,
} from "react-dnd-multi-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import Footer from "./components/Footer";
import Header from "./components/header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
HTML5Backend;

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

  const CustomHTML5toTouch = {
    backends: [
      {
        backend: HTML5Backend,
        transition: MouseTransition,
      },
      {
        backend: TouchBackend,
        options: { enableMouseEvents: true },
        transition: TouchTransition,
        skipDispatchOnTransition: true,
      },
    ],
  };

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
      <DndProvider backend={MultiBackend} options={CustomHTML5toTouch}>
        <TodoList
          setList={setList}
          list={list}
          configList={configList}
          setConfigList={setConfigList}
        ></TodoList>
      </DndProvider>
      <Footer></Footer>
    </>
  );
};

export default App;
