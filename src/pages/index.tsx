import Head from "next/head";
import FeatureTiles from "@portfoleyo/components/featureTiles/featureTiles";
import HighlightBanner from "@portfoleyo/components/highlightBanner/highlightBanner";
import Banner from "@portfoleyo/components/banner/banner";
import Showcase from "@portfoleyo/components/showcase/showcase";
import { HOMEPAGE_CONTENT } from "../constants/homepage/content";

export default function Home() {
  return (
    <>
      <Head>
        <title>{HOMEPAGE_CONTENT.meta.title}</title>
        <meta name="description" content={HOMEPAGE_CONTENT.meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="og:image"
          content={HOMEPAGE_CONTENT.highlightBanner.imageSrc}
        />
      </Head>
      <main>
        <HighlightBanner {...HOMEPAGE_CONTENT.highlightBanner} />
        <FeatureTiles {...HOMEPAGE_CONTENT.featureTiles} />
        <Banner {...HOMEPAGE_CONTENT.banner} hasBorder />
        <Showcase {...HOMEPAGE_CONTENT.showcase} />
      </main>
    </>
  );
}
