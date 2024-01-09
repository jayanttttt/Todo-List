import React, { useState } from "react";
import api from "../api";

const Create = ({ setTodos, setLoading }) => {
  const [task, setTask] = useState("");
  const handleAdd = () => {
    setLoading(true);
    const user_id = localStorage.getItem("user_id");
    api
      .post("/todo/create", { task: task, user_id: user_id })
      .then(({ data }) => setTodos(data))
      .catch((error) => console.log(error))
      .finally(() => {
        setTask("");
        setLoading(false);
      });
  };

  return (
    <div className="create_form">
      <input
        type="text"
        placeholder="Enter Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="button" onClick={() => handleAdd()}>
        Add
      </button>
    </div>
  );
};

export default Create;
