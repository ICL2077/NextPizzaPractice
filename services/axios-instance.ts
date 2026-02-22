import axios from 'axios';

export const axiosInstatnce = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});
