import axios from 'axios';
import { environment } from '../environments/environment';

const axiosClient = axios.create({
    baseURL: environment.baseUrl,
    headers: {
        Accept: 'application/json',
        "Content-Type": 'application/json'
    }
});

export default axiosClient;