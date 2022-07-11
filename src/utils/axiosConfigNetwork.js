import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://project-um-app-mobile.herokuapp.com'
});
//axiosInstance.defaults.withCredentials = true;

export default axiosInstance;