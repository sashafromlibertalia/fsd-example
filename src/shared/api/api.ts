import axios from "axios";

export const api = axios.create({
  baseURL: process.env.CMC_API_URL,
  headers: {
    "X-CMC_PRO_API_KEY": process.env.CMC_TOKEN,
  },
});
