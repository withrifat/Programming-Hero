import axios from "axios";
import { use, useEffect } from "react";
import { AuthContext } from "../context/AuthContex";

const Instant = axios.create({
      baseURL: "http://localhost:3000",
})
const useAxiosSecure = ()=>{
    const { user } = use(AuthContext);
    useEffect(()=>{
        const requestInterceptor = Instant.interceptors.request.use((config)=>{
            config.headers.authorization = `Bearer ${user.accessToken}`
            return config;
        })
        return ()=>{
            instance.interceptors.request.eject(requestInterceptor);
        }

    },[user,])
} 
export default useAxiosSecure;