import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_BaseUrl,
    withCredentials: true,
    headers: {
        Accept: ' application/json',
        'Content-Type': 'application/json'
    },
})

export const sendOtp = (data) => api.post('api/send-otp', data);
export const verifyOtp = (data) => api.post('api/verify-otp', data);

export default api;