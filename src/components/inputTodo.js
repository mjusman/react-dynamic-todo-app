import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const InputTodo = (props) => {
 
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodoProps();
  };
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <button className="input-submit">
        <FontAwesomeIcon icon={faPlus} size="2x" />
      </button>
    </form>
  );
};

export default InputTodo;
