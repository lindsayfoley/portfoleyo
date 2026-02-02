import { Fragment } from "react";
import Head from "next/head";
import Banner from "@portfoleyo/components/banner/banner";
import TwoColumnLayout from "@portfoleyo/components/twoColumnLayout/twoColumnLayout";
import { DOMAIN } from "@portfoleyo/constants/shared";
import { PROJECTS } from "@portfoleyo/constants/projects/content";
import styles from "../styles/portfolio.module.css";

export default function Projects() {
  const projects = [PROJECTS["country-blocking"]];

  return (
    <>
      <Head>
        <title>{PROJECTS.meta.title}</title>
        <meta name="description" content={PROJECTS.meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="og:image"
          content={`${DOMAIN}${PROJECTS["country-blocking"].twoColumn.image.src}`}
        />
      </Head>
      <main className={`${styles.main} highlightTheme`}>
        <Banner {...PROJECTS.banner} />
        {projects.map((project, index) => (
          <Fragment key={project.intro}>
            <TwoColumnLayout
              useAnimation
              key={project.intro}
              {...project.twoColumn}
              id={project.title}
              title={project.title}
              openInNewTab={false}
              shouldReverseColumns
            >
              <p>{project.intro}</p>
            </TwoColumnLayout>
            {index !== projects.length - 1 && <hr className={styles.divider} />}
          </Fragment>
        ))}
      </main>
    </>
  );
}
