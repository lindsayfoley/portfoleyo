import Head from "next/head";
import Banner from "@portfoleyo/components/banner/banner";
import { PORTFOLIO_CONTENT } from "@portfoleyo/constants/porfolio/content";
import TwoColumnLayout from "@portfoleyo/components/twoColumnLayout/twoColumnLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/portfolio.module.css";

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>{PORTFOLIO_CONTENT.meta.title}</title>
        <meta name="description" content={PORTFOLIO_CONTENT.meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Banner {...PORTFOLIO_CONTENT.banner} />
        <TwoColumnLayout {...PORTFOLIO_CONTENT.theFabledThread.twoColumn}>
          <ul className={`list ${styles.list}`}>
            {PORTFOLIO_CONTENT.theFabledThread.list.map(({ text, icon }) => (
              <li key={text}>
                <h5 className="heading">
                  <FontAwesomeIcon className="icon" icon={icon} />
                </h5>
                {text}
              </li>
            ))}
            <li>
              <h5 className="heading">
                {PORTFOLIO_CONTENT.checkmarkSectionTitle}
              </h5>
            </li>
            {PORTFOLIO_CONTENT.theFabledThread.workCompletedList.map((item) => (
              <li key={item}>
                <FontAwesomeIcon className="icon" icon={faCheck} /> {item}
              </li>
            ))}
          </ul>
        </TwoColumnLayout>
        <TwoColumnLayout
          {...PORTFOLIO_CONTENT.theMews.twoColumn}
          isIndependantSection={false}
        >
          <ul className={`list ${styles.list}`}>
            {PORTFOLIO_CONTENT.theMews.list.map(({ text, icon }) => (
              <li key={text}>
                <h5 className="heading">
                  <FontAwesomeIcon className="icon" icon={icon} />
                </h5>
                {text}
              </li>
            ))}
            <li>
              <h5 className="heading">
                {PORTFOLIO_CONTENT.checkmarkSectionTitle}
              </h5>
            </li>
            {PORTFOLIO_CONTENT.theMews.workCompletedList.map((item) => (
              <li key={item}>
                <FontAwesomeIcon className="icon" icon={faCheck} /> {item}
              </li>
            ))}
          </ul>
        </TwoColumnLayout>
        <TwoColumnLayout
          {...PORTFOLIO_CONTENT.lesterre.twoColumn}
          isIndependantSection={false}
        >
          <ul className={`list ${styles.list}`}>
            {PORTFOLIO_CONTENT.lesterre.list.map(({ text, icon }) => (
              <li key={text}>
                <h5 className="heading">
                  <FontAwesomeIcon className="icon" icon={icon} />
                </h5>
                {text}
              </li>
            ))}
            <li>
              <h5 className="heading">
                {PORTFOLIO_CONTENT.checkmarkSectionTitle}
              </h5>
            </li>
            {PORTFOLIO_CONTENT.lesterre.workCompletedList.map((item) => (
              <li key={item}>
                <FontAwesomeIcon className="icon" icon={faCheck} /> {item}
              </li>
            ))}
          </ul>
        </TwoColumnLayout>
        <TwoColumnLayout
          {...PORTFOLIO_CONTENT.charlotteTilbury.twoColumn}
          isIndependantSection={false}
        >
          <ul className={`list ${styles.list}`}>
            {PORTFOLIO_CONTENT.charlotteTilbury.list.map(({ text, icon }) => (
              <li key={text}>
                <h5 className="heading">
                  <FontAwesomeIcon className="icon" icon={icon} />
                </h5>
                {text}
              </li>
            ))}
            <li>
              <h5 className="heading">
                {PORTFOLIO_CONTENT.checkmarkSectionTitle}
              </h5>
            </li>
            {PORTFOLIO_CONTENT.charlotteTilbury.workCompletedList.map(
              (item) => (
                <li key={item}>
                  <FontAwesomeIcon className="icon" icon={faCheck} /> {item}
                </li>
              )
            )}
          </ul>
        </TwoColumnLayout>
      </main>
    </>
  );
}
