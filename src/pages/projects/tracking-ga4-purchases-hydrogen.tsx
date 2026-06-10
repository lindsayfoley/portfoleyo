import Head from "next/head";
import { DOMAIN } from "@portfoleyo/constants/shared";
import Banner from "@portfoleyo/components/banner/banner";
import { trackingGa4PurchasesHydrogen } from "@portfoleyo/constants/projects/trackingGa4PurchasesHydrogen";
import styles from "../../styles/projects.module.css";

export default function TrackingGA4PurchasesHydrogen() {
  const project = trackingGa4PurchasesHydrogen;
  const allContent = trackingGa4PurchasesHydrogen.page.join("");

  return (
    <>
      <Head>
        <title>{project.meta.title}</title>
        <meta name="description" content={project.meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="og:image"
          content={`${DOMAIN}${project.twoColumn.image.src}`}
        />
      </Head>
      <main className={`${styles.main} highlightTheme`}>
        <Banner
          title={project.h1}
          subtitle={project.subTitle}
          isH1Element
          image={project.twoColumn.image}
        />
        <article className={styles.article}>
          <div dangerouslySetInnerHTML={{ __html: allContent }} />
        </article>
      </main>
    </>
  );
}
