/**
 * user.js is used to manage the user information which stores in cookies
 */
import Cookies from "universal-cookie";
import { COOKIE_USER_TOKEN_FIELD } from "config";

export function setUserToken(payload) {
  const cookies = new Cookies();
  cookies.set(COOKIE_USER_TOKEN_FIELD, payload, { path: "/" });
}

export function getUserToken() {
  const cookies = new Cookies();
  return cookies.get(COOKIE_USER_TOKEN_FIELD);
}

export function deleteUserToken() {
  const cookies = new Cookies();
  cookies.remove(COOKIE_USER_TOKEN_FIELD);
  localStorage.removeItem("id");
  localStorage.removeItem("email");
  localStorage.removeItem("role");
}

export function isLoggedIn() {
  return !!(
    getUserToken() !== null &&
    getUserToken() !== undefined &&
    getUserToken() !== "" &&
    localStorage.getItem("id") &&
    localStorage.getItem("email") &&
    localStorage.getItem("role")
  );
}
