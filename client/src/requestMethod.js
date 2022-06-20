// import axios from "axios";
// const BASE_URL = "http://localhost:5000/api/";
// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTcwNWU1YzNmNWI3ZWY3ZWZiMjY1ZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDAwMTY4MCwiZXhwIjoxNjQ0MjYwODgwfQ.UEN4JqyFNSYZZKtKciGds8wEDA7Oz7y9SYLDT0zZF-Y"


// export const publicRequest = axios.create({
//     baseUrl: BASE_URL,
// })

// export const userRequest = axios.create({
//     baseUrl: BASE_URL,
//     header: {token: `Bearer ${TOKEN}`}
// })


import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
