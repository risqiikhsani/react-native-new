import axios from "axios";
import { baseURL } from "./config";
import { getData } from "./storageServices";
import { storeData } from "./storageServices";

const instance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent

    const access_token = getData("access_token");
    if (token) {
      config.headers["bearer"] = access_token;
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  async function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    const originalConfig = error.config;
    if (originalConfig !== "/auth/signin" && error.response) {
      //Access token expired
      if (error.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        try {
          const rs = await instance.post("/auth/refreshtoken", {
            refresh_token: getData("refresh_token"),
          });
          const { access_token } = rs.data;
          storeData("access_token", access_token);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }

    }

    return Promise.reject(error);
  }
);

export default instance;


//https://www.bezkoder.com/react-refresh-token/