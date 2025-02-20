import Footer from "@portfoleyo/components/footer/footer";
import Header from "@portfoleyo/components/header/header";
import Nav from "@portfoleyo/components/nav/nav";
import "@portfoleyo/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
