import { FC, useEffect } from "react";
import styles from "./Table.module.scss";
import { useRouter } from "next/router";
import { useList, useStore } from "effector-react";
import {
  $listings,
  $listingsStatus,
  fetchListingsFx,
} from "@/entities/currency/model";
import { MessageBox } from "@/shared/ui";
import { useEvent } from "effector-react/effector-react.umd";
import { Oval } from "react-loader-spinner";

export const Table: FC = () => {
  const router = useRouter();

  const listings = useStore($listings);
  const { isFetching, isFetched, isError } = useStore($listingsStatus);

  const fetchListings = useEvent(fetchListingsFx);

  const tableRows = useList($listings, (currency) => (
    <tr key={currency.id} onClick={() => router.push(`/currency/${currency.id}`)}>
      <td>{currency.id}</td>
      <td>{currency.name}</td>
      <td>{currency.symbol}</td>
      <td>{currency.maxSupply}</td>
      <td>{currency.priceUsd}</td>
    </tr>
  ));

  useEffect(() => {
    fetchListings();
  }, []);

  if (isFetching) {
    return <span className={styles.table__spinner}>
      <Oval height={80} width={80}
        wrapperStyle={{}} wrapperClass=""
        visible={true} ariaLabel='oval-loading'
        color="#0b6efd"  secondaryColor="#0B6EFD80"
        strokeWidth={2} strokeWidthSecondary={2} />
    </span>;
  }

  if (isFetched && !listings.length) {
    return <MessageBox message={"No data found."} variant={"warning"} />;
  }

  if (isError) {
    return <MessageBox message={"Something went wrong."} variant={"error"} />;
  }

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
