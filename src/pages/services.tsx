import Head from "next/head";
import { SERVICES_CONTENT } from "../constants/services/content";
import TwoColumnLayout from "@portfoleyo/components/twoColumnLayout/twoColumnLayout";
import Nav from "@portfoleyo/components/nav/nav";
import { NAV_CONTENT } from "@portfoleyo/constants/nav/nav";
import styles from "../styles/services.module.css";

export default function Services() {
  return (
    <>
      <Head>
        <title>{SERVICES_CONTENT.meta.title}</title>
        <meta name="description" content={SERVICES_CONTENT.meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Nav links={NAV_CONTENT.servicesHeaderNavContent} />
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
        </div>
      </main>
    </>
  );
}
