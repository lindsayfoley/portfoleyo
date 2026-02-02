import Head from "next/head";
import { useRouter } from "next/router";
import { PROJECTS } from "@portfoleyo/constants/projects/content";
import { DOMAIN } from "@portfoleyo/constants/shared";
import Banner from "@portfoleyo/components/banner/banner";
import styles from "../../styles/projects.module.css";

export default function ProjectPage() {
  const router = useRouter();
  const project = PROJECTS[router.query.slug];
  const meta = project?.meta;
  const allContent = project?.page?.join("");

  return (
    <>
      <Head>
        <title>{meta?.title}</title>
        <meta name="description" content={meta?.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="og:image"
          content={`${DOMAIN}${project?.twoColumn?.image?.src}`}
        />
      </Head>
      <main className={`${styles.main} highlightTheme`}>
        <Banner
          title={project?.h1}
          subtitle={project?.subTitle}
          isH1Element
          image={project?.twoColumn?.image}
          isIndependantSection={false}
        />
        <article className={styles.article}>
          <div dangerouslySetInnerHTML={{ __html: allContent }} />
        </article>
      </main>
    </>
  );
}
