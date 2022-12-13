import axios from "axios";

const BASE_URL = process.env.PUBLIC_URL || "http://localhost:3001";
const API = {
  mealRegistration: function (data) {
    return axios.post(`${BASE_URL}/api/meals`, data);
  },
  deletePrevious: function(data) {
    return axios.delete(`${BASE_URL}/api/meals`, {data})
  },
  deleteId: function (id) {
    return axios.delete(`${BASE_URL}/api/meals/id/${id}`);
  },
  pdfRead: function (data) {
    return axios.post(`${BASE_URL}/api/pdf`, data);
  },
  storeUserMenu: function (data) {
    return axios.post(`${BASE_URL}/api/menu`, data);
  },
  getMenu: function () {
    return axios.get(`${BASE_URL}/api/menu`);
  },
  getMealsbyDay: function (data) {
    return axios.get(`${BASE_URL}/api/meals/day?date=${data}`);
  },
  createUser: function (data) {
    return axios.post(`${BASE_URL}/api/user`, data)
  },
  login: function (data) {
    return axios.post(`${BASE_URL}/api/user/login`,data);
  },
  getUserMeals: function (data) {
    return axios.get(`${BASE_URL}/api/meals/day?user=${data}`,data);
  },
  updateUser: function (data) {
    return axios.put(`${BASE_URL}/api/user/id/${data}`,data);
  },
  mealUpdate: function (data,id) {
    return axios.put(`${BASE_URL}/api/meals/id/${id}`,data);
  },


};
export default API;
