import Head from "next/head";
import { WORK_CONTENT } from "../constants/work/content";
import TwoColumnLayout from "@portfoleyo/components/twoColumnLayout/twoColumnLayout";
import styles from "../styles/work.module.css";

export default function Work() {
  return (
    <>
      <Head>
        <title>{WORK_CONTENT.meta.title}</title>
        <meta name="description" content={WORK_CONTENT.meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div className={styles.intro}>
          <TwoColumnLayout
            title={WORK_CONTENT.sectionTitle.title}
            subtitle={WORK_CONTENT.sectionTitle.subtitle}
            isH1Element={WORK_CONTENT.sectionTitle.isH1Element}
            paragraphs={WORK_CONTENT.twoColumn.paragraphs}
            image={WORK_CONTENT.twoColumn.image}
            shouldReverseColumns
          />
        </div>
      </main>
    </>
  );
}
