import { combine, createEffect, createStore } from "effector";
import { Currency } from "@/entities/currency/model";
import { fetchCoinMetadataAsync, fetchCryptoListingsAsync } from "@/entities/currency/api";

export const $listings = createStore<Currency[]>([]);

export const fetchListingsFx = createEffect(async () => {
  return fetchCryptoListingsAsync();
});

export const fetchCoinMetadataFx = createEffect(async (coinId: number) => {
  return fetchCoinMetadataAsync(coinId);
});

export const $isListingsFetching = fetchListingsFx.pending;
export const $isListingsFetchingError = createStore<boolean>(false).on(fetchListingsFx.fail, () => true);
export const $isListingsFetched = createStore<boolean>(false).on(fetchListingsFx.done, () => true);
$listings.on(fetchListingsFx.doneData, (data, payload) => {
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

  return [...data, ...listings];
});

export const $listingsStatus = combine({
  isFetching: $isListingsFetching,
  isError: $isListingsFetchingError,
  isFetched: $isListingsFetched,
});

export const $isCoinMetadataFetching = fetchCoinMetadataFx.pending;
