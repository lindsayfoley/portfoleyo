import Script from "next/script";
import type { AppProps } from "next/app";
import Nav from "@portfoleyo/components/nav/nav";
import { NAV_CONTENT } from "@portfoleyo/constants/nav/nav";
import Footer from "@portfoleyo/components/footer/footer";
import Head from "next/head";
import { useRouter } from "next/router";
import useCookieConsentStatus, {
  cookieYesCategoryName,
} from "@portfoleyo/hooks/useCookieConsentStatus";
import "@portfoleyo/styles/globals.css";
import "@portfoleyo/styles/animations.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const hasAnalyticsCookieConsent = useCookieConsentStatus(
    cookieYesCategoryName.analytics
  );

  return (
    <>
      <Script
        id="cookieyes"
        type="text/javascript"
        src="https://cdn-cookieyes.com/client_data/9ff0450ee8538cdc3ce3991b/script.js"
      />
      {hasAnalyticsCookieConsent && (
        <>
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-K5J1VV23Z9"
          />

          <Script
            id="GA"
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-K5J1VV23Z9');`,
            }}
          />
        </>
      )}
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
