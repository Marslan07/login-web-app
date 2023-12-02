import axios from "axios";
import getRoute from "api/routes";
import { AppRoutes } from "routes";
import { getUserToken } from "helpers/user";

export const setAuthToken = (token = getUserToken()) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const failedResponse = (error) => {
  if (
    error.response &&
    error.response.status &&
    error.response.status === 401
  ) {
    if (window.location.pathname !== "/login")
      window.location.replace(AppRoutes.LOGIN.path);
  }
  return Promise.reject(error);
};

const getRequest = (route) => {
  if (!route) {
    return;
  }
  return axios
    .get(route)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return failedResponse(error);
    });
};

const postRequest = (route, data = {}) => {
  return axios
    .post(route, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return failedResponse(error);
    });
};

export const loginApi = (data) => {
  const route = getRoute("login");
  return postRequest(route, data);
};

