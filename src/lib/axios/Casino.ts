import axios from 'axios';

export const Casino = axios.create({
  baseURL: 'http://localhost:3000',
});

Casino.defaults.headers.common['Content-Type'] = 'application/json';
Casino.defaults.headers.common['Accept'] = 'application/json';

const errorHandler = (error: any) => {
  console.error(error.request.data);
  // NOTE silence all errors to the console and notifications handler
  //Promise.reject(error)
};

Casino.interceptors.request.use((config) => config, errorHandler);
Casino.interceptors.response.use((config) => config, errorHandler);
