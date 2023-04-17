import axios from "axios";
const env = import.meta.env;

export const axiosWithAuth = axios.create({
  baseURL: env.VITE_DB_URL,
  headers: {
    "X-Parse-Application-Id": env.VITE_APP_ID, // This is the fake app's application id
    "X-Parse-Master-Key": env.VITE_MASTER_KEY, // This is the fake app's readonly master key
  },
});
// export const axiosOAuth2 = axios.create({
//   baseURL: "https://accounts.google.com/o/oauth2/v2/auth",
//   headers: {
//     "Access-Control-Allow-Origin": REACT_APP_CLIENT_URL,
//     Accept: "application/json",
//   },
// });

export const getCookie = (name) => {
  var d = new Date();
  d.setTime(d.getTime() + 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = name + "=new_value;path=/;" + expires;
  return document.cookie.indexOf(name + "=") === -1;
};
