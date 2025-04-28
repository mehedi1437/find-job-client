import axios from "axios";
import useAuth from "./useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";



const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});
const useAxiosSecure = () => {
    const {logOut}= useAuth();
    const navigate = useNavigate();
    // Interceptor response
    axiosSecure.interceptors.response.use(
        res=>{
            return res;
        }
        ,
       async error=>{
            console.log('Error from Axios interceptor',error.response);
            if(error.response.status === 401 || error.response.status === 403) {
                // Logout the user or redirect to login page
              await logOut();
                toast.error("Session expired. Please login again.");
                navigate("/login");
                // logoutUser();
            }
            return Promise.reject(error);
        }





    )

    // Request Interceptor
    // axios.interceptors.request

  return axiosSecure
};

export default useAxiosSecure;