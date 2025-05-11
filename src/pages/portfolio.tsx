import Head from "next/head";
import Banner from "@portfoleyo/components/banner/banner";
import { PORTFOLIO_CONTENT } from "@portfoleyo/constants/porfolio/content";
import TwoColumnLayout from "@portfoleyo/components/twoColumnLayout/twoColumnLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";

import styles from "../styles/portfolio.module.css";
import { DOMAIN } from "@portfoleyo/constants/shared";
import { Fragment } from "react";

const companies = [
  PORTFOLIO_CONTENT.theFabledThread,
  // PORTFOLIO_CONTENT.theVaHouse,
  PORTFOLIO_CONTENT.storyStudios,
  PORTFOLIO_CONTENT.duvetHog,
  PORTFOLIO_CONTENT.elyse,
  PORTFOLIO_CONTENT.jpsOriginals,
  PORTFOLIO_CONTENT.chloeJonason,
  PORTFOLIO_CONTENT.vinito,
  PORTFOLIO_CONTENT.lesterre,
  PORTFOLIO_CONTENT.theMews,
  PORTFOLIO_CONTENT.charlotteTilbury,
];

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>{PORTFOLIO_CONTENT.meta.title}</title>
        <meta name="description" content={PORTFOLIO_CONTENT.meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="og:image"
          content={`${DOMAIN}${PORTFOLIO_CONTENT.charlotteTilbury.twoColumn.image.src}`}
        />
      </Head>
      <main className={`${styles.main} highlightTheme`}>
        <Banner {...PORTFOLIO_CONTENT.banner} />
        {companies.map((company, index) => (
          <Fragment key={company.description}>
            <TwoColumnLayout
              useAnimation
              key={company.description}
              {...company.twoColumn}
            >
              <ul className={`list ${styles.list}`}>
                <li>{company.description}</li>
                <li>
                  <h3 className={`heading ${styles.listHeading}`}>
                    {PORTFOLIO_CONTENT.checkmarkSectionTitle}
                  </h3>
                </li>
                {company.workCompletedList.map((item) => (
                  <li key={item}>
                    <FontAwesomeIcon className="icon" icon={faSquareCheck} />
                    {item}
                  </li>
                ))}
              </ul>
            </TwoColumnLayout>
            {index !== companies.length - 1 && (
              <hr className={styles.divider} />
            )}
          </Fragment>
        ))}
      </main>
    </>
  );
}
