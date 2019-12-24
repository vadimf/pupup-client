import axios from 'axios';
import {AsyncStorage} from 'react-native';
import Config from 'react-native-config';
import './Socket';

const API = axios.create({
    baseURL: Config.API_URL
});

export const setJwtToken = async (token: string): Promise<void> => {
    return await AsyncStorage.setItem('jwt_token', token);
};

export const getJwtToken = async (): Promise<string | null> => {
    return await AsyncStorage.getItem('jwt_token');
};

export const removeJwtToken = async (): Promise<void> => {
    await AsyncStorage.removeItem('jwt_token');
};

API.interceptors.request.use(
    async config => {
        const token = await getJwtToken();
        
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        
        return config;
    },
    error => {
        console.log(error);
    }
);


export const signUp = async (email: string, password: string) => {
    const url = '/auth/signup';
    const body = {email, password};
    return (await API.post(url, body)).data;
};

export const signIn = async (email: string, password: string) => {
    const url = '/auth/login';
    const body = {email, password};
    return (await API.post(url, body)).data;
};

export const facebookLogin = async (token: string) => {
    const url = '/auth/facebook';
    const body = {access_token: token};
    return (await API.post(url, body)).data;
};

export const fetchUser = async () => {
    const token = await getJwtToken();
    if (!token) {
        throw new Error('No token exists, skips restore session attempt');
    }
    const url = '/users/profile';
    return (await API.get(url)).data;
};

export const sendForgotPasswordEmail = async (email: string) => {
    const url = '/auth/forgot-password';
    const body = {email};
    return await API.post(url, body);
};

export const logout = async () => {
    const url = '/auth';
    return await API.delete(url);
};

export const fetchConfig = async (): Promise<SystemSettingsResponse> => {
    const url = '/config';
    return (await API.get(url)).data;
};
