import axios, { AxiosResponse } from "axios";

export const fetchCryptoListingsAsync = async (): Promise<AxiosResponse> => {
  return axios.get("/api/crypto/latest").then((response) => response.data);
};

export const fetchCoinMetadataAsync = async (coinId: number): Promise<AxiosResponse> => {
  return axios.get(`/api/meta/${coinId}`).then((response) => response.data);
};
