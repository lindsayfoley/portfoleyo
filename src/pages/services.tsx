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
        <Banner
          title={SERVICES_CONTENT.banner.title}
          subtitle={SERVICES_CONTENT.banner.subtitle}
          isTitleFirst={SERVICES_CONTENT.banner.isTitleFirst}
          isH1Element={SERVICES_CONTENT.banner.isH1Element}
          description={SERVICES_CONTENT.banner.description}
          isIndependantSection={false}
        />
        <TwoColumnLayout
          title={SERVICES_CONTENT.twoColumn.title}
          subtitle={SERVICES_CONTENT.twoColumn.subtitle}
          paragraphs={SERVICES_CONTENT.twoColumn.paragraphs}
          image={SERVICES_CONTENT.twoColumn.image}
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
          title={SERVICES_CONTENT.twoColumnSeo.title}
          subtitle={SERVICES_CONTENT.twoColumnSeo.subtitle}
          paragraphs={SERVICES_CONTENT.twoColumnSeo.paragraphs}
          image={SERVICES_CONTENT.twoColumnSeo.image}
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
          title={SERVICES_CONTENT.twoColumnEcom.title}
          subtitle={SERVICES_CONTENT.twoColumnEcom.subtitle}
          paragraphs={SERVICES_CONTENT.twoColumnEcom.paragraphs}
          image={SERVICES_CONTENT.twoColumnEcom.image}
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
        <FeatureTiles
          title={SERVICES_CONTENT.featureTiles.title}
          subtitle={SERVICES_CONTENT.featureTiles.subtitle}
          services={SERVICES_CONTENT.featureTiles.services}
          theme={SERVICES_CONTENT.featureTiles.theme}
        />
        <Banner
          title={SERVICES_CONTENT.gettingStarted.banner.title}
          subtitle={SERVICES_CONTENT.gettingStarted.banner.subtitle}
          description={SERVICES_CONTENT.gettingStarted.banner.description}
          theme={SERVICES_CONTENT.gettingStarted.banner.theme}
        >
          <ol className={`list ${styles.orderedlist}`}>
            {SERVICES_CONTENT.gettingStarted.list.map(
              ({ title, text, icon }) => (
                <li key={text}>
                  <h5 className="heading">
                    <FontAwesomeIcon className="icon" icon={icon} />
                    {title}
                  </h5>
                  {text}
                </li>
              )
            )}
          </ol>
          <AnchorButton href="/about#contact" cta="Contact Me" />
        </Banner>
      </main>
    </>
  );
}
