import "../styles/globals.css";
import type { AppProps } from "next/app";
import Announce from "../src/components/Announce";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Announce />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
