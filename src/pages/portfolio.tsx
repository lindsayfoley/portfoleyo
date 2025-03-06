import Head from "next/head";
import Banner from "@portfoleyo/components/banner/banner";
import { PORTFOLIO_CONTENT } from "@portfoleyo/constants/porfolio/content";
import TwoColumnLayout from "@portfoleyo/components/twoColumnLayout/twoColumnLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/portfolio.module.css";

const companies = [
  PORTFOLIO_CONTENT.theFabledThread,
  PORTFOLIO_CONTENT.theMews,
  PORTFOLIO_CONTENT.lesterre,
  PORTFOLIO_CONTENT.charlotteTilbury,
];

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>{PORTFOLIO_CONTENT.meta.title}</title>
        <meta name="description" content={PORTFOLIO_CONTENT.meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`${styles.main} highlightTheme`}>
        <Banner {...PORTFOLIO_CONTENT.banner} />
        {companies.map((company, index) => (
          <>
            <TwoColumnLayout key={company.description} {...company.twoColumn}>
              <ul className={`list ${styles.list}`}>
                <li>{company.description}</li>
                <li>
                  <h3 className={`heading ${styles.listHeading}`}>
                    {PORTFOLIO_CONTENT.checkmarkSectionTitle}
                  </h3>
                </li>
                {company.workCompletedList.map((item) => (
                  <li key={item}>
                    <FontAwesomeIcon className="icon" icon={faCheck} /> {item}
                  </li>
                ))}
              </ul>
            </TwoColumnLayout>
            {index !== companies.length - 1 && (
              <hr className={styles.divider} />
            )}
          </>
        ))}
      </main>
    </>
  );
}
