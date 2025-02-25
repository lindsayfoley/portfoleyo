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
          >
            <p>
              If you’re curious about the technical side of what I do, you can
              check out my{" "}
              <a
                className={styles.link}
                href="https://lindsayfoley.co.uk/about"
                target="_blank"
              >
                personal portfolio
              </a>{" "}
              for a more in-depth breakdown of my skills, tools, and expertise.
            </p>
          </TwoColumnLayout>
        </div>
        <FeatureTiles
          title={ABOUT_CONTENT.featureTiles.title}
          subtitle={ABOUT_CONTENT.featureTiles.subtitle}
          services={ABOUT_CONTENT.featureTiles.services}
        />
        <div id="contact">
          {" "}
          <Banner
            title={ABOUT_CONTENT.contact.banner.title}
            subtitle={ABOUT_CONTENT.contact.banner.subtitle}
            description={ABOUT_CONTENT.contact.banner.description}
            theme={ABOUT_CONTENT.contact.banner.theme}
          >
            <ul className={styles.contactList}>
              <li>
                Send me an{" "}
                <a className={styles.link} href={EMAIL_ADDRESS}>
                  email
                </a>
              </li>
              <li>
                Connect on{" "}
                <a
                  className={styles.link}
                  href={LINKEDIN_PROFILE}
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                View skills{" "}
                <a
                  className={styles.link}
                  href={PORTFOLIO_SITE}
                  target="_blank"
                >
                  portfolio
                </a>
              </li>
            </ul>
          </Banner>
        </div>
      </main>
    </>
  );
}
