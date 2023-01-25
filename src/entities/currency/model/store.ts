import { combine, createEffect, createStore } from "effector";
import { Currency, CurrencyMetadata } from "@/entities/currency/model";
import { fetchCoinMetadataAsync, fetchCryptoListingsAsync } from "@/entities/currency/api";

type Status = {
  isFetching: boolean;
  isError: boolean;
  isFetched: boolean;
};

export const fetchListingsFx = createEffect(async (page: number) => {
  return fetchCryptoListingsAsync(page);
});

export const fetchCoinMetadataFx = createEffect(async (coinId: number) => {
  return fetchCoinMetadataAsync(coinId);
});

export const $listings = createStore<Currency[]>([])
  .on(fetchListingsFx.doneData, (_, payload) => {
    const response = payload.data;
    const listings: Currency[] = response.map((item: any) => {
      return {
        id: item.id,
        name: item.name,
        symbol: item.symbol,
        maxSupply: item.max_supply,
        priceUsd: item.quote.USD.price,
      } as Currency;
    });

    return [...listings];
  });
export const $isListingsFetching = fetchListingsFx.pending;
export const $isListingsFetchingError = createStore<boolean>(false).on(fetchListingsFx.fail, () => true);
export const $isListingsFetched = createStore<boolean>(false).on(fetchListingsFx.done, () => true);
export const $listingsStatus = combine<Status>({
  isFetching: $isListingsFetching,
  isError: $isListingsFetchingError,
  isFetched: $isListingsFetched,
});


export const $coinMetadata = createStore<CurrencyMetadata | null>(null)
  .on(fetchCoinMetadataFx.doneData, (_, payload) => {
    const id = Object.keys(payload.data)[0];
    const response = payload.data[id];
    const metadata: CurrencyMetadata = {
      id: response.id,
      name: response.name,
      symbol: response.symbol,
      logoUrl: response.logo,
      description: response.description,
      tags: response.tags,
    };

    return metadata;
  });
export const $isCoinMetadataFetching = fetchCoinMetadataFx.pending;
export const $isCoinMetadataFetchingError = createStore<boolean>(false).on(fetchCoinMetadataFx.fail, () => true);
export const $isCoinMetadataFetched = createStore<boolean>(false).on(fetchCoinMetadataFx.done, () => true);
export const $coinMetadataStatus = combine<Status>({
  isFetching: $isCoinMetadataFetching,
  isError: $isCoinMetadataFetchingError,
  isFetched: $isCoinMetadataFetched,
});
