import Head from "next/head";
import styles from "@/application/Home.module.scss";
import { NextPage } from "next";
import { Table } from "@/features/Table";
import { Currency } from "@/entities/currency";

const Home: NextPage = () => {
  const mockData: Currency[] = [
    {
      id: 1,
      name: "Bitcoin",
      symbol: "BTC",
      maxSupply: 21000000,
      priceUsd: 10000,
    },
    {
      id: 2,
      name: "Ethereum",
      symbol: "ETH",
      maxSupply: 100000000,
      priceUsd: 1000,
    },
  ];

  return (
    <>
      <Head>
        <title>Example app</title>
        <meta name="description" content="Example application for feature-sliced design" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <h1>Currency listing table</h1>
        <p>You can click on the table row and inspect the specific currency.</p>
        <Table data={mockData} />
      </main>
    </>
  );
};

export default Home;
