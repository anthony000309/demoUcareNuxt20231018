import axios from "axios";

const authRequest = axios.create({
  //   baseURL: "https://vue-lessons-api.herokuapp.com/",
  baseURL: "https://www.tmdia.org.tw/apicms",
});

export const postLoginRequest = (data) => authRequest.post("/login", data);

export const postTestToken = () => authRequest.post("/testToken");
