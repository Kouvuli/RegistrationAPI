import axiosClient from "./axiosClient";
import { REGISTRATION_API } from "./apiURL";
import authHeader from "../utils/auth-header";
import axios from "axios";
const request = axiosClient(REGISTRATION_API);

const registrationApi = {
  registerUser: async ({ fullname, birthday, username, password }) => {
    const url = `/auth/signup`;

    return request.post(url, {
      fullname,
      birthday,
      username,
      password,
    });
  },
  authenticateUser: async ({ username, password }) => {
    const url = `/auth/signin`;

    const response = await request.post(url, { username, password });
    if (response.data.access_token) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  },

  getUserById: (id) => {
    const url = `/user/${id}`;
    return request.get(url);
  },
};

export default registrationApi;
