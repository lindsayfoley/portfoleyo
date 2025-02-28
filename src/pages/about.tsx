import Head from "next/head";
import { ABOUT_CONTENT } from "../constants/about/content";
import TwoColumnLayout from "@portfoleyo/components/twoColumnLayout/twoColumnLayout";
import Banner from "@portfoleyo/components/banner/banner";
import FeatureTiles from "@portfoleyo/components/featureTiles/featureTiles";
import {
  EMAIL_ADDRESS,
  LINKEDIN_PROFILE,
  PORTFOLIO_SITE,
} from "@portfoleyo/constants/shared";
import { NAV_CONTENT } from "@portfoleyo/constants/nav/nav";
import Nav from "@portfoleyo/components/nav/nav";
import styles from "../styles/about.module.css";

export default function About() {
  return (
    <>
      <Head>
        <title>{ABOUT_CONTENT.meta.title}</title>
        <meta name="description" content={ABOUT_CONTENT.meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Nav links={NAV_CONTENT.aboutHeaderNavContent} />
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
          services={ABOUT_CONTENT.featureTiles.services}
          theme={ABOUT_CONTENT.twoColumn.theme}
          hasTimeline
        />
        <div id="contact">
          <Banner
            title={ABOUT_CONTENT.contact.banner.title}
            subtitle={ABOUT_CONTENT.contact.banner.subtitle}
            description={ABOUT_CONTENT.contact.banner.description}
            theme={ABOUT_CONTENT.contact.banner.theme}
          >
            <ul className={styles.contactList}>
              <li className={styles.listItem}>
                <h5 className={styles.heading}>Email</h5>
                <a href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a>
              </li>
              <li className={styles.listItem}>
                <h5 className={styles.heading}>LinkedIn</h5>
                <a href={LINKEDIN_PROFILE} target="_blank">
                  View my experience
                </a>
              </li>
              <li className={styles.listItem}>
                <h5 className={styles.heading}>Portfolio</h5>
                <a href={PORTFOLIO_SITE} target="_blank">
                  www.lindsayfoley.co.uk
                </a>
              </li>
            </ul>
          </Banner>
        </div>
      </main>
    </>
  );
}
