import axios from "axios";
import { use } from "react";
import { AuthContext } from "../context/AuthContex";

const Instant = axios.create({
      baseURL: "http://localhost:3000",
})
const useAxiosSecure = ()=>{
    const { user } = use(AuthContext);
    Instant.interceptors.request.use((config)=>{
        config.headers.authorization = `Bearer ${user.accessToken}`
        return config;
    })
} 
export default useAxiosSecure;