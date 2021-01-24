/* eslint-disable prettier/prettier */
import axios from "axios";

const { REACT_APP_SERVER_ADDRESS } = process.env;

class AuthService {
  static async login(email, password) {
    return axios
      .post(`${REACT_APP_SERVER_ADDRESS}/users/login`, {
        email,
        password,
      })
      .then((response) => response.data);
  }

  static async profile() {
    const token = localStorage.getItem
    ("USER_TOKEN");
    return axios
      .get(`${REACT_APP_SERVER_ADDRESS}/users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => response.data);
  }

  // eslint-disable-next-line no-unused-vars
  static async register(email, password) {
    // TODO register
  }
}

export default AuthService;
