import {create} from "zustand";
import { axiosInstance } from "../lib/axios.js";
import { SignalHigh } from "lucide-react";


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
  },

 signup: async (data) => {
    // try {
    //     const res = await axiosInstance.post("/auth/signup", data);
    //     set({ authUser: res.data });
    // } catch (error) {
    //     console.log("Error in signup:", error);
    // }
  }
}));
