import Script from "next/script";
import type { AppProps } from "next/app";
import Nav from "@portfoleyo/components/nav/nav";
import { NAV_CONTENT } from "@portfoleyo/constants/nav/nav";
import Footer from "@portfoleyo/components/footer/footer";
import "@portfoleyo/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-K5J1VV23Z9"
      ></Script>
      <Script
        id="GA"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-K5J1VV23Z9');`,
        }}
      />
      <Nav links={NAV_CONTENT.links} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
