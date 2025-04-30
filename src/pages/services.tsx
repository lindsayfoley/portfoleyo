import Head from "next/head";
import { SERVICES_CONTENT } from "../constants/services/content";
import TwoColumnLayout from "@portfoleyo/components/twoColumnLayout/twoColumnLayout";
import FeatureTiles from "@portfoleyo/components/featureTiles/featureTiles";
import AnchorButton from "@portfoleyo/components/anchorButton/anchorButton";
import Banner from "@portfoleyo/components/banner/banner";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/services.module.css";
import { DOMAIN } from "@portfoleyo/constants/shared";

const services = [
  SERVICES_CONTENT.twoColumnDevelopment,
  SERVICES_CONTENT.twoColumnSeo,
  SERVICES_CONTENT.twoColumnEcom,
];

export default function Services() {
  return (
    <>
      <Head>
        <title>{SERVICES_CONTENT.meta.title}</title>
        <meta name="description" content={SERVICES_CONTENT.meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="og:image"
          content={`${DOMAIN}${SERVICES_CONTENT.twoColumnDevelopment.image.src}`}
        />
      </Head>
      <main>
        <Banner {...SERVICES_CONTENT.banner} isIndependantSection={false} />
        {services.map((service, index) => (
          <TwoColumnLayout
            key={service.title}
            {...service}
            shouldReverseColumns={
              index !== Math.round((services.length - 1) / 2)
            }
            isIndependantSection={false}
          >
            <ul className="list">
              {service.list.map((item) => (
                <li key={item}>
                  <FontAwesomeIcon className="icon" icon={faCheck} />
                  {item}
                </li>
              ))}
            </ul>
          </TwoColumnLayout>
        ))}
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
