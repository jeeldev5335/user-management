import axios from 'axios';
import { apiBaseUrl, getToken, hasToken } from './utils';

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

if(hasToken()) {
    headers['Authorization'] = `Bearer ${getToken()}`;
}

const instance = axios.create({
    baseURL: apiBaseUrl,
    timeout: 10000,
    headers,
});

export default instance;