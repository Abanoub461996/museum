import axios from "axios";
import { toastifyError } from "../toaster/toastify";
import { closeLoader, showLoader } from "../store/slices/loaderSlice";

let store;

export const injectStore = (_store) => {
  store = _store;
};

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_DATABASE_URL,
});

let requests = 0;
axiosInstance.interceptors.request.use(
  function (config: any) {
    if (!requests) {
      store.dispatch(showLoader());
    }
    requests++;

    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.response.use(
  (res: any) => {
    requests--;
    if (!requests) {
      setTimeout(() => store.dispatch(closeLoader()), 5000);
    }
    if (res.status === 200) {
      return res;
    }
  },
  async (err: any) => {
    requests--;
    if (err.response) {
      toastifyError(err.response.data.message);
    }
    return Promise.reject(err);
  }
);
export const noLoaderInstance = axios.create({
  baseURL: import.meta.env.VITE_DATABASE_URL,
});
export default axiosInstance;
