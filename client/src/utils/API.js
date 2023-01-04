import axios from "axios";

// const BASE_URL = process.env.PUBLIC_URL || "http://localhost:3001";
const BASE_URL = "https://sensapp.herokuapp.com";
const API = {
  mealRegistration: function (data) {
    return axios.post(`${BASE_URL}/api/meals`, data,{withCredentials:true});
  },
  deletePrevious: function(data) {
    return axios.delete(`${BASE_URL}/api/meals`, {data},{withCredentials:true})
  },
  deleteId: function (id) {
    return axios.delete(`${BASE_URL}/api/meals/id/${id}`,{withCredentials:true});
  },
  pdfRead: function (data) {
    return axios.post(`${BASE_URL}/api/pdf`, data,{withCredentials:true});
  },
  storeUserMenu: function (data) {
    return axios.post(`${BASE_URL}/api/menu`, data,{withCredentials:true});
  },
  getMenu: function () {
    return axios.get(`${BASE_URL}/api/menu`,{withCredentials:true});
  },
  getMealsbyDay: function (data) {
    return axios.get(`${BASE_URL}/api/meals/day?date=${data}`,{withCredentials:true});
  },
  createUser: function (data) {
    return axios.post(`${BASE_URL}/api/user`, data,{withCredentials:true})
  },
  login: function (data) {
    return axios.post(`${BASE_URL}/api/user/login`,data,{withCredentials:true});
  },
  logout:function(){
    return axios.get(`${BASE_URL}/api/user/logout`,{withCredentials:true})
},
  readSessions:function(){
    return axios.get(`${BASE_URL}/api/user/readsessions`,{withCredentials:true})
},
  getUserMeals: function (data) {
    return axios.get(`${BASE_URL}/api/meals/day?user=${data}`,data),{withCredentials:true};
  },
  updateUser: function (data) {
    return axios.put(`${BASE_URL}/api/user/id/${data}`,data,{withCredentials:true});
  },
  mealUpdate: function (data,id) {
    return axios.put(`${BASE_URL}/api/meals/id/${id}`,data,{withCredentials:true});
  },


};
export default API;
