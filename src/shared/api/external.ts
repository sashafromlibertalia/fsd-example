import axios from "axios";

export const api = axios.create({
  baseURL: "https://pro-api.coinmarketcap.com/v1/",
  headers: {
    "X-CMC_PRO_API_KEY": process.env.COINMARKETCAP_TOKEN || "123",
  },
});
