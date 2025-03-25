import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";
import toast from "react-hot-toast";
import { data } from "react-router-dom";


export const useAuthStore = create((set) => ({
    authUser: null,
    isSigningUp:false,
    isLoggingIng:false,
    ipUpdatingProfile: false,

    isCheckingAuth:true,

    checkAuth: async() => {
        try {
            const res = await axiosInstance.get("/auth/check");

            set({authUser:res.data})
        } catch (error) {
            console.log("Error in checkAuth:", error);
            set({authUser:null});
        } finally{
            set({isCheckingAuth:false});
        }
    },

    signup: async (data) => {
        set({ isSigningUp: true });
        try {
            const res = await axiosInstance.post("/auth/signup", data);
            set({ authUser: res.data });
            toast.success("Аккаунт успешно создан");

        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            set({ isSigningUp: false });
        }
    },

    login: async (data) => {
        set({ isLoggingIng: true });
        try {
            const res = await axiosInstance.post("/auth/login", data);
            set({ authUser: res.data });
            toast.success("Аккаунт успешно авторизован");
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            set({ isLoggingIng: false });
        }
    },

    logout: async () => {
        try {
            await axiosInstance.post("/auth/logout");
            set({ authUser: null });
            toast.success("Logged out successfully");
        } catch (error) {
            toast.error(error.response.data.message);
        }
    },
}));