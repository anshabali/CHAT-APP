import {create} from "zustand";
import { axiosInstance } from "../lib/axios.js";

export const useAuthStore = create((set) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIng:false,
  isUpdatingProfile:false,

  isCheckigAuth: true,

  checkAuth: async () => {
    try {
        const res = await axiosInstance.get("/auth/check");
        set({authUser: res.data})
    } catch (error) {
        console.log("Error in checkAuth:",error);
        
    } finally {
        set({isCheckingAuth: false});
    }
  }
}));
