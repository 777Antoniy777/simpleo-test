import axios from "axios";

const BASE_URL = `http://localhost:3030`;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

// {
//   "temperature": [
//     { "id": 1, "data": "6" },
//     { "id": 2, "data": "12" }
//   ],
//   "users": [
//     { "id": 1, "data": "Petr", "password": "1" },
//     { "id": 2, "data": "Alexey", "password": "2" },
//     { "id": 3, "data": "Ivan", "password": "3" }
//   ],
//   "categories": [
//     { "id": 1, "category": "users" },
//     { "id": 2, "category": "temperature" }
//   ]
// }

export default axiosInstance;
