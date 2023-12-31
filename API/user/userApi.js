import { API_AXIOS } from "../Axios";

export default {
  member: (user_id, password, user_email, phone_number) => {
    return API_AXIOS.post(`/member`, {
      user_id: user_id,
      password: password,
      phone_number: phone_number,
      user_email: user_email,
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
  emailauth: (userEmail) => {
    return API_AXIOS.post(`/auth/email`, {
      user_email: userEmail,
    });
  },
  emailauthCheck: (authnumber, userEmail) => {
    return API_AXIOS.get(`/auth/email/${authnumber}?user_email=${userEmail}`, {
      headers: {
        "Content-Type": `application/json`,
        "ngrok-skip-browser-warning": "69420",
      },
    });
  },
};
