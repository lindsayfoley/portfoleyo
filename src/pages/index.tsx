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
      </Head>
      <main>
        <HighlightBanner
          imageSrc={HOMEPAGE_CONTENT.highlightBanner.image.src}
          alt={HOMEPAGE_CONTENT.highlightBanner.image.alt}
          intro={HOMEPAGE_CONTENT.highlightBanner.intro}
          title={HOMEPAGE_CONTENT.highlightBanner.title}
          description={HOMEPAGE_CONTENT.highlightBanner.description}
          cta={HOMEPAGE_CONTENT.highlightBanner.link.cta}
          link={HOMEPAGE_CONTENT.highlightBanner.link.href}
          isH1Element={HOMEPAGE_CONTENT.highlightBanner.isH1Element}
        />
        <FeatureTiles
          title={HOMEPAGE_CONTENT.featureTiles.title}
          subtitle={HOMEPAGE_CONTENT.featureTiles.subtitle}
          services={HOMEPAGE_CONTENT.featureTiles.services}
        />
        <Banner
          title={HOMEPAGE_CONTENT.banner.title}
          subtitle={HOMEPAGE_CONTENT.banner.subtitle}
          isTitleFirst={HOMEPAGE_CONTENT.banner.isTitleFirst}
          href={HOMEPAGE_CONTENT.banner.link.href}
          cta={HOMEPAGE_CONTENT.banner.link.cta}
        />
        <Showcase
          title={HOMEPAGE_CONTENT.showcase.title}
          subtitle={HOMEPAGE_CONTENT.showcase.subtitle}
          images={HOMEPAGE_CONTENT.showcase.images}
          cta={HOMEPAGE_CONTENT.showcase.link.cta}
          href={HOMEPAGE_CONTENT.showcase.link.href}
        />
      </main>
    </>
  );
}
