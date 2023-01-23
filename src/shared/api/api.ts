import axios from "axios";

export const api = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    "X-CMC_PRO_API_KEY": process.env.COINMARKETCAP_TOKEN,
  },
});
