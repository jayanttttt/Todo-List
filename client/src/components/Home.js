import React, { useEffect, useState } from "react";
import Create from "./Create";
import api from "../api";
import deleteImage from "../assets/icons/White.svg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const router = useNavigate();
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const user_id = localStorage.getItem("user_id");
    api
      .post("/todo/get", {
        user_id: user_id,
      })
      .then(({ data }) => setTodos(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  const handleEdit = (value) => {
    setLoading(true);
    api
      .put("/todo/update/" + value._id, {
        done: !value.done,
      })
      .then(({ data }) => setTodos(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  const handleDelete = (value) => {
    setLoading(true);
    const user_id = localStorage.getItem("user_id");
    api
      .post("/todo/delete", {
        id: value._id,
        user_id: user_id,
      })
      .then(({ data }) => setTodos(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  return (
    <div className="home">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "340px",
        }}
      >
        <h2>Todo list</h2>
        <p
          style={{ color: "#f76152" }}
          onClick={() => {
            localStorage.removeItem("user_id");
            router("/");
          }}
        >
          Logout
        </p>
      </div>
      <Create
        setTodos={(data) => setTodos(data)}
        setLoading={(data) => setLoading(data)}
      />
      {todos.length === 0 ? (
        <div>{!loading && <h2>No record found</h2>}</div>
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
      {loading && <p>updating database</p>}
    </div>
  );
};

export default Home;
