import React, { useState } from "react";
import api from "./api";

const Create = ({ setTodos }) => {
  const [task, setTask] = useState("");
  const handleAdd = () => {
    api
      .post("/todo/create", { task: task })
      .then(({ data }) => setTodos(data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="create_form">
      <input
        type="text"
        placeholder="Enter Task"
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="button" onClick={() => handleAdd()}>
        Add
      </button>
    </div>
  );
};

export default Create;
