import { create } from "zustand";
import {axiosInstance} from "../lib/axios.js"

export const useAuthStore = create((set) => ({
  authUser: null,
  isSigningUp: false,
  isLoginIng: false,
  isUpdatingProfile: false,

  isCheckingAuth: true,
  
  checkAuth: async () => {
    try {
        const res= await axiosInstance.get("/auth/check");
    } catch (error) {
        
    }
  }
   

}));
