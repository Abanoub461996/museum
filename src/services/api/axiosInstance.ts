import axios from 'axios';
import { toastifyError } from '../toaster/toastify';

export const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_DATABASE_URL,
});

axiosInstance.interceptors.request.use(
	function (config: any) {
		if (config.url !== '/login') {
			const token = localStorage.getItem('token');
			config.headers.Authorization = token ? `Bearer ${token}` : '';
		}
		return config;
	},
	(error: any) => {
		return Promise.reject(error);
	},
);
axiosInstance.interceptors.response.use(
	(res: any) => {
		if (res.status === 200) {
			return res;
		}
	},
	async (err: any) => {
		if (err.response) {
		
			toastifyError(err.response.data.message);
			
		}
		return Promise.reject(err);
	},
);

export default axiosInstance;