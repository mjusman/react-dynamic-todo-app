import React from "react";
import { useState } from "react";
import styles from "../TodoItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

// todo single item

const TodoItem = (props) => {
  const [textVal, setTextVal] = useState();
  const { id } = props.todo;
  
  return (
    <div className="container">
      <li className="todo-list">
      <div className="elements">
      <input
          type="text"
          value={textVal}
          onChange={(e) => setTextVal(e.target.value)}
          className="input-todo-title"
        />
        <button className="move-btn" onClick={() => props.handleMoveUpProps(id)}>
          <FontAwesomeIcon icon={faArrowUp} size="2x" />
        </button>
        <button className="move-btn" onClick={() => props.handleMoveDownProps(id)}>
          <FontAwesomeIcon icon={faArrowDown} size="2x" />
        </button>
        <button className="delete-btn"onClick={() => props.handleDeleteProps(id)}>
          <FontAwesomeIcon icon={faTrashAlt} size="2x" />
        </button>
        
      </div>
    </li>
    </div>
  );
};

export default TodoItem;
