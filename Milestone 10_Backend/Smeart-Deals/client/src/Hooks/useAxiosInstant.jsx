import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
//   timeout: 5000,
//   headers: { "X-Custom-Header": "foobar" },
});
const useAxios = ()=>{
    return axiosInstance;
}
export default useAxios;