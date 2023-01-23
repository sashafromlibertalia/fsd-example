import "@/application/index.scss";
import type { AppProps } from "next/app";
import { NextPage } from "next";

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
