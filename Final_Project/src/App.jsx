import {BrowserRouter, Routes, Route  } from "react-router-dom";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Home";
import All from "./All";
import Actives from "./Actives";
import Completed from "./Completed";

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const incompleteTodos = todos.filter(todo => !todo.completed)
  const completedTodos = todos.filter(todo => todo.completed)
  return (
    <>
    <div>
      
      
    </div>
      <BrowserRouter>
      <Home></Home>
        <Routes>

          <Route path="/" element={<All todos={todos} setTodos={setTodos} />} />
          <Route path="/actives" element={<Actives todos={incompleteTodos} setTodos={setTodos} />} />
          <Route path="/completed" element={<Completed todos={completedTodos} setTodos={setTodos}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
