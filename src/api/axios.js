import axios from 'axios';
import { environment } from '../environments/environment';

const axiosClient = axios.create({
    baseURL: environment.baseUrl
});

export default axiosClient;