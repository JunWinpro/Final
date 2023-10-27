import { useState } from "react";
const deleteTodo = (id) => {
  setTodos((prev) => {
    return prev.filter((todo) => todo.id !== id);
  });
};
const Completed = ({ todos, setTodos }) => {
const completedTodos = todos.filter(todo => todo.completed)
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

      {completedTodos.map(todo => (
        <div key={todo.id}>
          <button onClick={() => deleteTodo(todo.id)}>
            Xóa
          </button>
          {todo.text} 
        </div>
      ))}

      <button onClick={() => setTodos([])}>
        Xóa tất cả
      </button>

      <button onClick={() => setTodos([])}>Xóa tất cả</button>
    </>
  );
};

export default Completed;
