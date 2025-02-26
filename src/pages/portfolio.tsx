import Head from "next/head";
import TwoColumnLayout from "@portfoleyo/components/twoColumnLayout/twoColumnLayout";
import Nav from "@portfoleyo/components/nav/nav";
import { NAV_CONTENT } from "@portfoleyo/constants/nav/nav";
import { PORTFOLIO_CONTENT } from "@portfoleyo/constants/porfolio/content";

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>{PORTFOLIO_CONTENT.meta.title}</title>
        <meta name="description" content={PORTFOLIO_CONTENT.meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Nav links={NAV_CONTENT.portfolioHeaderNavContent} />
      <main>
        <TwoColumnLayout
          title={PORTFOLIO_CONTENT.sectionTitle.title}
          subtitle={PORTFOLIO_CONTENT.sectionTitle.subtitle}
          isH1Element={PORTFOLIO_CONTENT.sectionTitle.isH1Element}
          paragraphs={PORTFOLIO_CONTENT.twoColumn.paragraphs}
          image={PORTFOLIO_CONTENT.twoColumn.image}
          shouldReverseColumns
        />
      </main>
    </>
  );
}
