import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

const CurrencyPage: NextPage = () => {
  const router = useRouter();
  const { item } = router.query;

  return (
    <>
      <Head>
        <title>Info for {item}</title>
        <meta name="description" content="Example application for feature-sliced design" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          123
        </div>
      </main>
    </>
  );
};

export default CurrencyPage;
