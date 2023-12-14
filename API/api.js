import { API_AXIOS } from "./Axios";

export default {
  member: (user_id, password, user_email, phone_number) => {
    API_AXIOS.post(`/member`, {
      userId: user_id,
      password: password,
      phoneNumber: phone_number,
      userEmail: user_email,
    });
  },
  login: (user_id, password) => {
    return API_AXIOS.post(`/login`, {
      user_id: user_id,
      password: password,
    });
  },
  duplicationcheck: (userid) => {
    return API_AXIOS.get(`/duplication-check/user-id/${userid}`, {
      headers: {
        "Content-Type": `application/json`,
        "ngrok-skip-browser-warning": "69420",
      },
    });
  },
};
