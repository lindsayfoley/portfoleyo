import Head from "next/head";
import { SERVICES_CONTENT } from "../constants/services/content";
import TwoColumnLayout from "@portfoleyo/components/twoColumnLayout/twoColumnLayout";
import FeatureTiles from "@portfoleyo/components/featureTiles/featureTiles";
import AnchorButton from "@portfoleyo/components/anchorButton/anchorButton";
import styles from "../styles/services.module.css";

export default function Services() {
  return (
    <>
      <Head>
        <title>{SERVICES_CONTENT.meta.title}</title>
        <meta name="description" content={SERVICES_CONTENT.meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div className={styles.intro}>
          <TwoColumnLayout
            title={SERVICES_CONTENT.sectionTitle.title}
            isH1Element={SERVICES_CONTENT.sectionTitle.isH1Element}
            paragraphs={SERVICES_CONTENT.twoColumn.paragraphs}
            image={SERVICES_CONTENT.twoColumn.image}
            shouldReverseColumns
          />
          <FeatureTiles
            services={SERVICES_CONTENT.featureTiles.services}
            isDependantSection
          />
          <TwoColumnLayout
            title={SERVICES_CONTENT.gettingStarted.twoColumn.title}
            paragraphs={SERVICES_CONTENT.gettingStarted.twoColumn.paragraphs}
            image={SERVICES_CONTENT.gettingStarted.twoColumn.image}
            theme={SERVICES_CONTENT.gettingStarted.twoColumn.theme}
          >
            <h3 className={styles.heading}>Full Site Audit</h3>
            <p className={styles.paragraph}>
              I take a deep dive into your site, assessing:
            </p>
            <ul className={styles.list}>
              <li>
                Accessibility: ensuring your site is user-friendly for everyone
              </li>
              <li>
                Performance: identifying ways to improve speed and efficiency
              </li>
              <li>
                SEO: reviewing metadata, page structure, and on-page elements
              </li>
              <li>
                Code Health: checking for errors, markup structure + technical
                integrity
              </li>
              <li>
                End-to-End UX: making sure everything flows smoothly for your
                users
              </li>
            </ul>
            <h3 className={styles.heading}>Development & Site Improvements</h3>
            <p>
              Already know what you need? I can jump right in and get to work!
            </p>
            <AnchorButton href="/about#contact" cta="Contact me" />
          </TwoColumnLayout>
        </div>
      </main>
    </>
  );
}
