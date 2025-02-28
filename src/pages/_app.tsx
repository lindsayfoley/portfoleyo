import type { AppProps } from "next/app";
import Nav from "@portfoleyo/components/nav/nav";
import { NAV_CONTENT } from "@portfoleyo/constants/nav/nav";
import Footer from "@portfoleyo/components/footer/footer";
import "@portfoleyo/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav links={NAV_CONTENT.headerNavContent} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
