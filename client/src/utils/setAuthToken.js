//function that takes in token and adds it to header, or deletes it from header

import axios from "axios";

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete axios.defaults.headers.common["x-auth-token"];
  }
};

export default setAuthToken;
