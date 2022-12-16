import React from "react";
import TodoItem from "./todoItem";

// todo lists

const TodoLists = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleMoveUpProps={props.handleMoveUpProps}
          handleMoveDownProps={props.handleMoveDownProps}
          handleDeleteProps={props.handleDeleteProps}
          
        />
      ))}
    </ul>
  );
};

export default TodoLists;
