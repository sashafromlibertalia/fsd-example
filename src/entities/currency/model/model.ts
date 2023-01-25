export type Currency = {
  id: number;
  name: string;
  symbol: string;
  maxSupply: number;
  priceUsd: number;
};

export type CurrencyMetadata = {
  id: number;
  name: string;
  symbol: string;
  logoUrl: string;
  description: string;
  tags: string[];
};
