import axios from "axios";

export const API_URL =
  "https://0f4f-203-132-166-14.ngrok-free.app/photocard/api/v1/";
export const API_AXIOS = axios.create({ baseURL: API_URL });
