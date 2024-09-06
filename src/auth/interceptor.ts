import axios, { AxiosError } from 'axios';
import { useSelector } from 'react-redux';

const getAccessToken = () => {
  try {
    return JSON.parse(localStorage.getItem('UserData') as any)?.token ;
  } catch (error) {
    // Error retrieving data
    console.log(error, 'logged in client error');
  }
};
const apiClient = axios.create({
  baseURL: 'https://ecommerce.routemisr.com',
  headers: {
    Accept: 'application/json',
  },
});

export const apiService = (props: any) => {
  const { needsAuth = false, contentType = false } = props;


  if (needsAuth === true) {
    apiClient.defaults.headers.common['token'] = getAccessToken();
  }
  if (contentType === true) {
    apiClient.defaults.headers.common['Content-Type'] = 'multipart/form-data';
  } else {
    apiClient.defaults.headers.common['Content-Type'] = 'application/json';
  }
  return apiClient;
};

// Intercept all requests
apiClient.interceptors.request.use(
  async (config: any) => {
    // console.log(JSON.stringify({config}, null, 8));
    // TODO: modify your header here
    // config.headers.platform = Platform.OS;
    // console.log(
    //   %c ${config.method.toUpperCase()} - ${getUrl(config)}:,
    //   'color: #0086b3; font-weight: bold',
    //   config,
    // );
    return config;
  },
  (error: any) => Promise.reject(error)
);
// Intercept all responses
export function extractAPIErrorResponse(apiClient: any) {
  apiClient.interceptors.response.use(
    undefined,
    async function (error: AxiosError) {
      (error as any).originalMessage = error.message;

      if (error?.response?.status === 401) {
        window.location.href = '/';
      } else {
        Object.defineProperty(error, 'message', {
          get: function () {
            return `${error?.response?.data}`;
          },
        });
        return Promise.reject(error);
      }
    }
  );
}
extractAPIErrorResponse(apiClient);
