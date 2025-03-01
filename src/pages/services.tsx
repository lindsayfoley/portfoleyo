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
            subtitle={SERVICES_CONTENT.sectionTitle.subtitle}
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
            subtitle={SERVICES_CONTENT.gettingStarted.twoColumn.subtitle}
            paragraphs={SERVICES_CONTENT.gettingStarted.twoColumn.paragraphs}
            image={SERVICES_CONTENT.gettingStarted.twoColumn.image}
            theme={SERVICES_CONTENT.gettingStarted.twoColumn.theme}
          >
            <h3 className={styles.heading}>Full Site Audit</h3>
            <p className={styles.paragraph}>
              A deep dive into your site, assessing:
            </p>
            <ul className={styles.list}>
              <li>
                Accessibility: ensuring an inclusive, user-friendly experience
              </li>
              <li>
                Performance: identifying ways to boost speed and efficiency
              </li>
              <li>
                SEO: reviewing metadata, page structure, and key optimisations
              </li>
              <li>
                Code Health: checking for errors, markup structure, and
                technical integrity
              </li>
              <li>UX flow: ensuring a seamless experience for your users</li>
            </ul>
            <h3 className={styles.heading}>Development & Site Improvements</h3>
            <p>
              Already know what you need? I&apos;ll jump straight in and start
              making improvements.
            </p>
            <AnchorButton href="/about#contact" cta="Contact me" />
          </TwoColumnLayout>
        </div>
      </main>
    </>
  );
}
