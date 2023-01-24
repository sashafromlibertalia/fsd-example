import { createEffect, createStore } from "effector";
import { apiCmc } from "@/shared/api";
import { Currency } from "@/entities/currency/model";

export const $listings = createStore<Currency[]>([]);

export const fetchListingsFx = createEffect(async () => {
  const { data } = await apiCmc.get("v1/cryptocurrency/listings/latest");
  return data.data;
});
