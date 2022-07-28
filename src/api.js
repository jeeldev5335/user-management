import axios from 'axios';
import { apiBaseUrl } from './utils';

const instance = axios.create({
    baseURL: apiBaseUrl,
    timeout: 10000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export default instance;