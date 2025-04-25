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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText, faCode } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
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
        <Banner {...ABOUT_CONTENT.banner} />
        <TwoColumnLayout
          {...ABOUT_CONTENT.sectionTitle}
          {...ABOUT_CONTENT.twoColumn}
        />
        <FeatureTiles
          {...ABOUT_CONTENT.featureTiles}
          hasTimeline
          isIndependantSection={false}
        />
        <div id="contact">
          <Banner {...ABOUT_CONTENT.contact.banner}>
            <ul className={styles.contactList}>
              <li className={styles.listItem}>
                <a href={`mailto:${EMAIL_ADDRESS}`}>
                  <h5 className={styles.heading}>
                    <FontAwesomeIcon
                      className={styles.icon}
                      icon={faEnvelopeOpenText}
                    />
                    Email
                  </h5>
                  {EMAIL_ADDRESS}
                </a>
              </li>
              <li className={styles.listItem}>
                <a href={LINKEDIN_PROFILE} target="_blank">
                  <h5 className={styles.heading}>
                    <FontAwesomeIcon
                      className={styles.icon}
                      icon={faLinkedinIn}
                    />
                    LinkedIn
                  </h5>
                  View my experience
                </a>
              </li>
              <li className={styles.listItem}>
                <a href={PORTFOLIO_SITE} target="_blank">
                  <h5 className={styles.heading}>
                    <FontAwesomeIcon className={styles.icon} icon={faCode} />
                    Portfolio
                  </h5>
                  Review my skills
                </a>
              </li>
            </ul>
          </Banner>
        </div>
      </main>
    </>
  );
}
