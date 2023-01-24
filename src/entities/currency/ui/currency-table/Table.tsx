import { FC } from "react";
import styles from "./Table.module.scss";
import { useRouter } from "next/router";
import { useList, useStore } from "effector-react";
import { $listings } from "@/entities/currency/model";
import { MessageBox } from "@/shared/ui";

export const Table: FC = () => {
  const router = useRouter();
  const listings = useStore($listings);
  const tableRows = useList($listings, (currency) => (
    <tr key={currency.id} onClick={() => router.push(`/currency/${currency.id}`)}>
      <td>{currency.id}</td>
      <td>{currency.name}</td>
      <td>{currency.symbol}</td>
      <td>{currency.maxSupply}</td>
      <td>{currency.priceUsd}</td>
    </tr>
  ));

  if (!listings.length)
    return <MessageBox message={"No data to display"} variant={"warning"} />;

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Symbol</th>
          <th>Max supply</th>
          <th>Price (USD)</th>
        </tr>
      </thead>
      <tbody>
        {
          tableRows
        }
      </tbody>
    </table>
  );
};
