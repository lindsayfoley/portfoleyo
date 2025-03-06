import Head from "next/head";
import { SERVICES_CONTENT } from "../constants/services/content";
import TwoColumnLayout from "@portfoleyo/components/twoColumnLayout/twoColumnLayout";
import FeatureTiles from "@portfoleyo/components/featureTiles/featureTiles";
import AnchorButton from "@portfoleyo/components/anchorButton/anchorButton";
import Banner from "@portfoleyo/components/banner/banner";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        <Banner {...SERVICES_CONTENT.banner} isIndependantSection={false} />
        <TwoColumnLayout
          {...SERVICES_CONTENT.twoColumn}
          shouldReverseColumns
          isIndependantSection={false}
        >
          <ul className="list">
            {SERVICES_CONTENT.customDevelopmentList.map((item) => (
              <li key={item}>
                <FontAwesomeIcon className="icon" icon={faCheck} />
                {item}
              </li>
            ))}
          </ul>
        </TwoColumnLayout>
        <TwoColumnLayout
          {...SERVICES_CONTENT.twoColumnSeo}
          isIndependantSection={false}
        >
          <ul className="list">
            {SERVICES_CONTENT.seoList.map((item) => (
              <li key={item}>
                <FontAwesomeIcon className="icon" icon={faCheck} />
                {item}
              </li>
            ))}
          </ul>
        </TwoColumnLayout>
        <TwoColumnLayout
          {...SERVICES_CONTENT.twoColumnEcom}
          shouldReverseColumns
          isIndependantSection={false}
        >
          <ul className="list">
            {SERVICES_CONTENT.ecomList.map((item) => (
              <li key={item}>
                <FontAwesomeIcon className="icon" icon={faCheck} />
                {item}
              </li>
            ))}
          </ul>
        </TwoColumnLayout>
        <FeatureTiles {...SERVICES_CONTENT.featureTiles} />
        <Banner {...SERVICES_CONTENT.gettingStarted.banner}>
          <div className={styles.listContainer}>
            <ol className={`list ${styles.orderedlist}`}>
              {SERVICES_CONTENT.gettingStarted.list.map(
                ({ title, text, icon }) => (
                  <li key={text} className={styles.listItem}>
                    <h5 className={`heading ${styles.header}`}>
                      <FontAwesomeIcon className="icon" icon={icon} />
                      {title}
                    </h5>
                    {text}
                  </li>
                )
              )}
            </ol>
          </div>
          <AnchorButton href="/about#contact" cta="Contact Me" />
        </Banner>
      </main>
    </>
  );
}
