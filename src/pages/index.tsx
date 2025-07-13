import Head from "next/head";
import FeatureTiles from "@portfoleyo/components/featureTiles/featureTiles";
import HighlightBanner from "@portfoleyo/components/highlightBanner/highlightBanner";
import Banner from "@portfoleyo/components/banner/banner";
import Showcase from "@portfoleyo/components/showcase/showcase";
import ClientLogos from "@portfoleyo/components/clientLogos/clientLogos";
import { HOMEPAGE_CONTENT } from "../constants/homepage/content";
import { DOMAIN } from "@portfoleyo/constants/shared";
import FeaturedInstagramPosts from "@portfoleyo/components/featuredInstagramPosts/featuredInstagramPosts";
import useCookieConsentStatus, {
  cookieYesCategoryName,
} from "@portfoleyo/hooks/useCookieConsentStatus";

export default function Home() {
  const hasMarketingCookieConsent = useCookieConsentStatus(
    cookieYesCategoryName.advertisement
  );

  return (
    <>
      <Head>
        <title>{HOMEPAGE_CONTENT.meta.title}</title>
        <meta name="description" content={HOMEPAGE_CONTENT.meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="og:image"
          content={`${DOMAIN}${HOMEPAGE_CONTENT.highlightBanner.image.src}`}
        />
      </Head>
      <main>
        <HighlightBanner {...HOMEPAGE_CONTENT.highlightBanner} />
        <ClientLogos />
        <FeatureTiles {...HOMEPAGE_CONTENT.featureTiles} />
        <Banner {...HOMEPAGE_CONTENT.banner} hasBorder />
        <Showcase {...HOMEPAGE_CONTENT.showcase} />
        {hasMarketingCookieConsent && <FeaturedInstagramPosts />}
      </main>
    </>
  );
}
