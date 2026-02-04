import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const BASEURL = process.env.EXPO_PUBLIC_API_BASE_URL;
// export const BASEURL = "http://localhost:3000";


const API = axios.create({
  baseURL: BASEURL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add token to requests
API.interceptors.request.use(
  async (config) => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

    } catch (error) {
      console.error('Error retrieving token:', error);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default API