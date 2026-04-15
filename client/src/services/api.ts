import axios from "axios";

const API = axios.create({
    baseURL: "https://recipe-ib8s.onrender.com/api",
});

export default API;