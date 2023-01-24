import { Currency } from "@/entities/currency";
import { FC } from "react";
import styles from "./Table.module.scss";
import { useRouter } from "next/router";

export type TableProps = {
  data: Currency[];
}

export const Table: FC<TableProps> = (props) => {
  const { data } = props;
  const router = useRouter();

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
          data.map((currency) => (
            <tr key={currency.id} onClick={() => router.push(`/currency/${currency.id}`)}>
              <td>{currency.id}</td>
              <td>{currency.name}</td>
              <td>{currency.symbol}</td>
              <td>{currency.maxSupply}</td>
              <td>{currency.priceUsd}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};
