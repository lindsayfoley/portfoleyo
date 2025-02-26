import Head from "next/head";
import { ABOUT_CONTENT } from "../constants/about/content";
import TwoColumnLayout from "@portfoleyo/components/twoColumnLayout/twoColumnLayout";
import Banner from "@portfoleyo/components/banner/banner";
import FeatureTiles from "@portfoleyo/components/featureTiles/featureTiles";
import styles from "../styles/about.module.css";

export default function About() {
  return (
    <>
      <Head>
        <title>{ABOUT_CONTENT.meta.title}</title>
        <meta name="description" content={ABOUT_CONTENT.meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div className={styles.intro}>
          <Banner
            title={ABOUT_CONTENT.banner.title}
            subtitle={ABOUT_CONTENT.banner.subtitle}
            isTitleFirst={ABOUT_CONTENT.banner.isTitleFirst}
            isH1Element={ABOUT_CONTENT.banner.isH1Element}
            description={ABOUT_CONTENT.banner.description}
          />
          <TwoColumnLayout
            title={ABOUT_CONTENT.sectionTitle.title}
            paragraphs={ABOUT_CONTENT.twoColumn.paragraphs}
            image={ABOUT_CONTENT.twoColumn.image}
            theme={ABOUT_CONTENT.twoColumn.theme}
          />
        </div>
        <FeatureTiles
          title={ABOUT_CONTENT.featureTiles.title}
          subtitle={ABOUT_CONTENT.featureTiles.subtitle}
          services={ABOUT_CONTENT.featureTiles.services}
          useHighlightTheme
        />
      </main>
    </>
  );
}
