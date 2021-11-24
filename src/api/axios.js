import axios from 'axios';
import {APP_BASE_API_URL} from '@env';

export const instance = {
  baseURL: APP_BASE_API_URL,
  timoeut: 10000,
  headers: {
    Authorization: 'Bearer ',
    'Content-type': 'application/json',
  },
};

const AxiosInstance = axios.create(instance);

AxiosInstance.interceptors.request.use(config => console.log(config));

AxiosInstance.interceptors.request.use(
  res => console.log(res),
  err =>
    Promise.reject(
      err.response ? err : {...err, response: 'Some internal error'},
    ),
);

export const http = async ({url, method = 'GET', params, data, ...rest}) => {
  const i = await AxiosInstance({
    url,
    method,
    params,
    data,
    ...rest,
  });
  return i;
};
