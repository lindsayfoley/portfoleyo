import Head from "next/head";
import { PORTFOLIO_CONTENT } from "@portfoleyo/constants/porfolio/content";
import Banner from "@portfoleyo/components/banner/banner";

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>{PORTFOLIO_CONTENT.meta.title}</title>
        <meta name="description" content={PORTFOLIO_CONTENT.meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Banner
          title={PORTFOLIO_CONTENT.banner.title}
          subtitle={PORTFOLIO_CONTENT.banner.subtitle}
          isTitleFirst={PORTFOLIO_CONTENT.banner.isTitleFirst}
          isH1Element={PORTFOLIO_CONTENT.banner.isH1Element}
          description={PORTFOLIO_CONTENT.banner.description}
          theme={PORTFOLIO_CONTENT.banner.theme}
        />
      </main>
    </>
  );
}
