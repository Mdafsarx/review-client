import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "./Auth/AuthProvider";

const axiosSecure=axios.create({
    baseURL:'https://review-server-mdafsars-projects.vercel.app',
    withCredentials:true,
})


const useAxios = () => {
     const {LogOut}=useContext(AuthContext)
    useEffect(()=>{
        axios.interceptors.response.use(function (response) {
            return response;
          }, function (error) {
            console.log(error)
            if(error.response.status==401 || error.response.status==403){
                LogOut()
            }
          });
    })
    return axiosSecure
};

export default useAxios;