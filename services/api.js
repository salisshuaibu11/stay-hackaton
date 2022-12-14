import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_BASE_URL || "https://stay-demo.herokuapp.com",
  // timeout: 5000,

});

api.interceptors.request.use(
  function (config) {
    let user = JSON.parse(window?.localStorage.getItem("user-data"));
    config.headers = {
      ...config.headers,
    };
    config.headers.Accept = "application/json";
    config.headers["Content-Type"] = "application/json";
    if (user) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default api;
