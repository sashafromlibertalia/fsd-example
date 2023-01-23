import { Currency } from "@/entities/currency";
import { FC } from "react";
import styles from "./Table.module.scss";

export type TableProps = {
  data: Currency[];
}

export const Table: FC<TableProps> = (props) => {
  const { data } = props;

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
            <tr key={currency.id}>
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
