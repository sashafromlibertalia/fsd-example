import axios, { AxiosResponse } from "axios";

export const getCryptoListingsAsync = async (): Promise<AxiosResponse> => {
  return axios.get("/api/crypto/latest").then((response) => response.data);
};

export const getCoinMetadataAsync = async (coinId: number): Promise<AxiosResponse> => {
  return axios.get(`/api/meta/${coinId}`).then((response) => response.data);
};
