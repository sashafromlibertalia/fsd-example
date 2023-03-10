import { FC, useEffect, useState } from "react";
import styles from "./CurrencyTable.module.scss";
import { useRouter } from "next/router";
import { useList, useStore } from "effector-react";
import {
  $listings,
  $listingsStatus,
  fetchListingsFx,
} from "@/entities/currency/model";
import { MessageBox, Pagination } from "@/shared/ui";
import { useEvent } from "effector-react/effector-react.umd";
import { Oval } from "react-loader-spinner";

export const Table: FC = () => {
  const router = useRouter();
  const [page, setPage] = useState(1);

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
    fetchListings(page);
  }, [page]);

  if (isFetching) {
    return <span className={styles.table__spinner}>
      <Oval height={80} width={80}
        wrapperStyle={{}} wrapperClass=""
        visible={true} ariaLabel='oval-loading'
        color="#0b6efd"  secondaryColor="#0B6EFD80"
        strokeWidth={2} strokeWidthSecondary={2} />
    </span>;
  }

  if (isFetched && !listings.length)
    return <MessageBox message={"No data found."} variant={"warning"} />;

  if (isError)
    return <MessageBox message={"Something went wrong."} variant={"error"} />;

  return (
    <>
      {
        isFetched && listings.length > 0 && (
          <>
            <div className={styles.table__wrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>ID</th>
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
            </div>
            <Pagination activePage={page} total={5} onChange={(page) => setPage(page)} />
          </>
        )
      }
    </>

  );
};
