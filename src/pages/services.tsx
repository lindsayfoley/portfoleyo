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
            title={SERVICES_CONTENT.featureTiles.title}
            subtitle={SERVICES_CONTENT.featureTiles.subtitle}
            services={SERVICES_CONTENT.featureTiles.services}
            theme={SERVICES_CONTENT.featureTiles.theme}
          />
          <TwoColumnLayout
            title={SERVICES_CONTENT.gettingStarted.twoColumn.title}
            subtitle={SERVICES_CONTENT.gettingStarted.twoColumn.subtitle}
            paragraphs={SERVICES_CONTENT.gettingStarted.twoColumn.paragraphs}
            image={SERVICES_CONTENT.gettingStarted.twoColumn.image}
            theme={SERVICES_CONTENT.gettingStarted.twoColumn.theme}
          >
            <dl className={styles.list}>
              <dt>Step 1: Initial Call</dt>
              <dd>
                We&apos;ll discuss your needs, goals, and any specific changes
                or features you have in mind
              </dd>
              <dt>Step 2: Scope & Pricing</dt>
              <dd>
                I&apos;ll break down the work into tasks, write up tickets
                detailing the work involved, and provide clear pricing
              </dd>
              <dt>Step 3: Implementation or Full Site Audit</dt>
              <dd>
                If you already know what you need, I&apos;ll get straight to
                work
              </dd>
              <dd>
                If you’d like a deeper review, I can perform a site audit,
                covering:
              </dd>
            </dl>
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
            <h4 className={styles.heading}>Ready to get started?</h4>
            <AnchorButton href="/about#contact" cta="Contact me" />
          </TwoColumnLayout>
        </div>
      </main>
    </>
  );
}
