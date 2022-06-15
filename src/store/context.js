import React, { useState } from "react";
import { toast } from "react-toastify";
// create the store
const Context = React.createContext();

// create provider
export function ContextProvider(props) {
  const [todos, setTodos] = useState(["Pending task"]);

  const [editTodo, setEditTodo] = useState(null);
  // { index, value: findTodo }

  const onAddTodo = (todo) => {
    setTodos([...todos, todo]);
    toast("New todo created!");
  };

  const onDeleteTodo = (targetIndex) => {
    const newTodos = todos.filter((item, idx) => idx !== targetIndex);
    setTodos(newTodos);
    toast("Deleted item!");
  };

  const onEditTodo = (index) => {
    const findTodo = todos.find((_, i) => i === index);
    setEditTodo({ index: index, value: findTodo });
  };

  const onEditSubmit = (e) => {
    e.preventDefault();
    const newValue = e.target.todo.value;
    const updateTodos = todos.map((item, idx) => {
      if (idx === editTodo.index) {
        return newValue;
      } else {
        return item;
      }
    });
    setTodos(updateTodos);
    setEditTodo(null);
    toast("Updated item!");
  };

  return (
    <Context.Provider
      value={{
        todos,
        setTodos,
        editTodo,
        setEditTodo,
        onAddTodo,
        onDeleteTodo,
        onEditTodo,
        onEditSubmit
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default Context;
