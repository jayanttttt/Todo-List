import React, { useEffect, useState } from "react";
import Create from "./Create";
import api from "./api";
import deleteImage from "./assets/icons/White.svg";

const Home = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    api
      .get("/todo/get", {})
      .then(({ data }) => setTodos(data))
      .catch((error) => console.log(error));
  }, []);

  const handleEdit = (value) => {
    api
      .put("/todo/update/" + value._id, {
        done: !value.done,
      })
      .then(({ data }) => setTodos(data))
      .catch((error) => console.log(error));
  };

  const handleDelete = (value) => {
    api
      .post("/todo/delete", {
        id: value._id,
      })
      .then(({ data }) => setTodos(data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="home">
      <h2>Todo list</h2>
      <Create setTodos={(data) => setTodos(data)} />
      {todos.length === 0 ? (
        <div>
          <h2>No record found</h2>
        </div>
      ) : (
        todos.map((item, i) => (
          <div key={i} className="task">
            <div onClick={() => handleEdit(item)}>
              <input
                type="checkbox"
                checked={item.done ? true : false}
                onChange={() => ""}
              />
              <p style={item.done ? { textDecoration: "line-through" } : {}}>
                {item.task}
              </p>
            </div>
            <img src={deleteImage} alt="" onClick={() => handleDelete(item)} />
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
