import axios from "axios";

const BASE_URL = process.env.PUBLIC_URL || "http://localhost:3001";
const API = {
  mealRegistration: function (data) {
    return axios.post(`${BASE_URL}/api/meals`, data);
  },
  deletePrevious: function(data) {
    return axios.delete(`${BASE_URL}/api/meals`, data)
  },
  deleteId: function (id) {
    return axios.delete(`${BASE_URL}/api/meals/${id}`);
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
};
export default API;
