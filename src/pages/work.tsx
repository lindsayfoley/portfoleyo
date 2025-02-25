import Head from "next/head";
import { WORK_CONTENT } from "../constants/work/content";
import SectionTitle from "@portfoleyo/components/sectionTitle/sectionTitle";
import styles from "../styles/about.module.css";

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
          <SectionTitle
            title={WORK_CONTENT.sectionTitle.title}
            subtitle={WORK_CONTENT.sectionTitle.subtitle}
            isH1Element={WORK_CONTENT.sectionTitle.isH1Element}
          />
        </div>

        {/*
        <p>
          I’m Lindsay, a senior developer with over 13 years of experience
          building and optimising websites for growing brands. I’ve worked with
          companies like Disney, Selfridges, BT, and Charlotte Tilbury,
          delivering high-quality solutions that improve speed, accessibility,
          and conversions.
        </p>
        <h2>Key Achievements</h2>
        <ul>
          <li>
            🏆 Award-Winning Developer – Recognised for technical innovation at
            BT
          </li>
          <li>
            🎨 Design Systems Specialist – Helped streamline UI consistency
            across large teams at Charlotte Tilbury
          </li>
          <li>
            📈 SEO & Performance Expert – Improved site speed and rankings for
            major brands I create bespoke, high-performing websites that are
            easy to manage, designed to convert, and built to scale with your
            business.
          </li>
        </ul> */}
      </main>
    </>
  );
}
