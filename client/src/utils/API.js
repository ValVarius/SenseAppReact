import axios from "axios";

// const BASE_URL = "https://you-tutor-backend.herokuapp.com"
// const BASE_URL = "https://you-tutor.herokuapp.com"
// const BASE_URL = process.env.PUBLIC_URL 

// const BASE_URL = "http://www.you-tutor.com"

const BASE_URL = process.env.PUBLIC_URL || "http://localhost:3001"
const API = {
    // mealRegistration:function(data){
    //     return axios.create(`${BASE_URL}/`,data)
    // },
    mealRegistration:function(data){
        return axios.post(`${BASE_URL}/api/meals`,data)
    },
    pdfRead:function(data){
        return axios.post(`${BASE_URL}/api/pdf`,data)
    },
    


}
export default API

