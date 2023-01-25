import Head from "next/head";
import { NextPage } from "next";
import { Table } from "@/entities/currency/ui";
import { Container } from "@/shared/ui/layout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Example app</title>
        <meta name="description" content="Example application for feature-sliced design" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <main>
          <h1>Currency listing table</h1>
          <p>You can click on the table row and inspect the specific currency.</p>
          <Table />
        </main>
      </Container>
    </>
  );
};

export default Home;
