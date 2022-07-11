import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:9000'
});
axiosInstance.defaults.withCredentials = true;

export default axiosInstance;