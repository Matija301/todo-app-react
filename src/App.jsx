import React from "react";
import { Footer } from "./components/Footer";
import Header from "./components/header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <>
      <Header></Header>
      <TodoForm></TodoForm>
      <TodoList></TodoList>
      <Footer></Footer>
    </>
  );
};

export default App;
