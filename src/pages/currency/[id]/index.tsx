import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEvent, useStore } from "effector-react";
import { $coinMetadata, $coinMetadataStatus, fetchCoinMetadataFx } from "@/entities/currency/model";
import { useEffect } from "react";
import { Container } from "@/shared/ui/layout";
import { Oval } from "react-loader-spinner";
import { MessageBox } from "@/shared/ui";
import { Card } from "@/entities/currency/ui";

const CurrencyPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const coinMetadata = useStore($coinMetadata);
  const fetchCoinMetadata = useEvent(fetchCoinMetadataFx);
  const { isError, isFetching, isFetched } = useStore($coinMetadataStatus);

  useEffect(() => {
    if (!id) return;

    fetchCoinMetadata(+id);
  }, [id]);

  if (isFetching) {
    return (
      <Container>
        <Oval height={80} width={80}
          wrapperStyle={{}} wrapperClass=""
          visible={true} ariaLabel='oval-loading'
          color="#0b6efd"  secondaryColor="#0B6EFD80"
          strokeWidth={2} strokeWidthSecondary={2} />
      </Container>
    );
  }

  if (isError) {
    return (
      <Container>
        <MessageBox message={"Something went wrong."} variant={"error"} />
      </Container>
    );
  }

  return (
    <>
      <Head>
        <title>Info for cryptocurrency</title>
        <meta name="description" content="Example application for feature-sliced design" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <main>
          {
            isFetched && coinMetadata && <Card data={coinMetadata} />
          }
        </main>
      </Container>
    </>
  );
};

export default CurrencyPage;
