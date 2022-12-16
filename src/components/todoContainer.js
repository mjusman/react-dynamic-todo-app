import React from "react";
import { useState, useEffect } from "react";
import TodoLists from "./todoLists";
import InputTodo from "./inputTodo";
import { v4 as uuidv4 } from "uuid";
import Header from "./header";


//todo container

const TodoContainer = () => {
  // my todo state
  const [todos, setTodos] = useState([
  ]);
  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
    }
    setTodos([...todos, newTodo])
  };

  const handleDelete = (id) => {
    // handle delete todo
    setTodos(
      todos.filter(todo => {
        if(todo.id === id){
          return todo.id !== id
        }
        return todo
      })
    )
  };
  const handleMoveUp = (id) => {
    let index = todos.findIndex(e => e.id === id);
    if (index > 0) {
      let el = todos[index];
      todos[index] = todos[index - 1];
      todos[index - 1] = el;

    }
    setTodos([...todos]);
  };
  
  const handleMoveDown = (id) => {
    let index = todos.findIndex(e => e.id === id);
    if (index !== -1 && index < todos.length - 1) {
      let el = todos[index];
      todos[index] = todos[index + 1];
      todos[index + 1] = el;

    }
    setTodos([...todos]);
  };
  
  useEffect(() => {
    console.log("Happy coding Mahmud!");
  }, [todos]);
  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo addTodoProps={addTodoItem} />
        <TodoLists
          todos={todos}
          handleDeleteProps={handleDelete}
          handleMoveUpProps={handleMoveUp}
          handleMoveDownProps={handleMoveDown}
        />
      </div>
    </div>
  );
};

export default TodoContainer;
