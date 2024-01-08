import axios from "axios";

const api = axios.create({
  baseURL: "https://todo-list-server-pink.vercel.app",
});

export default api;
