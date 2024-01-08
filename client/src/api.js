import axios from "axios";

const api = axios.create({
  baseURL: "https://todo-list-server-pqagxhoft-jayanttttt.vercel.app",
});

export default api;
