import axios from "axios";

export const API_URL =
  "https://ad5d-203-132-166-14.ngrok-free.app/photocard/api/v1/";
export const API_AXIOS = axios.create({ baseURL: API_URL });
