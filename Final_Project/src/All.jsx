import { useState } from "react";

const All = ({todos, setTodos}) => {
  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };


  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedNewTodo = newTodo.trim();

    if (trimmedNewTodo) {
      setTodos([
        ...todos,
        {
          id: Date.now(), // id duy nhất
          text: trimmedNewTodo,
          completed: false,
        },
      ]);
      setNewTodo("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} style={{ margin: "30px" }}>
        <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
        <button type="submit">Add</button>
      </form>

      {todos.map((todo) => (
        <div key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          {todo.text}
        </div>
      ))}
    </>
  );
};

export default All;
