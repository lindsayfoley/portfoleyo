import Script from "next/script";
import type { AppProps } from "next/app";
import Nav from "@portfoleyo/components/nav/nav";
import { NAV_CONTENT } from "@portfoleyo/constants/nav/nav";
import Footer from "@portfoleyo/components/footer/footer";
import Head from "next/head";
import { useRouter } from "next/router";
import "@portfoleyo/styles/globals.css";
import "@portfoleyo/styles/animations.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

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
      <Head>
        <link
          rel="canonical"
          href={`https://theportfoleyo.com${router?.asPath?.split("?")[0]}`}
        />
      </Head>
      <Nav links={NAV_CONTENT.links} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
