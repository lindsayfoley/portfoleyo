import Head from "next/head";
import { ABOUT_CONTENT } from "../constants/about/content";
import SectionTitle from "@portfoleyo/components/sectionTitle/sectionTitle";
import styles from "../styles/about.module.css";

export default function About() {
  return (
    <>
      <Head>
        <title>{ABOUT_CONTENT.meta.title}</title>
        <meta name="description" content={ABOUT_CONTENT.meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div className={styles.intro}>
          <div className={styles.container}>
            <div className={styles.copy}>
              <SectionTitle
                title={ABOUT_CONTENT.sectionTitle.title}
                subtitle={ABOUT_CONTENT.sectionTitle.subtitle}
                isH1Element={ABOUT_CONTENT.sectionTitle.isH1Element}
              />
              <div className={styles.paragraphSection}>
                {ABOUT_CONTENT.twoColumn.paragraphs.map((paragraph) => (
                  <p className={styles.paragraph} key={paragraph}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className={styles.imageContainer}>
              <img
                className={styles.primaryImage}
                src={ABOUT_CONTENT.twoColumn.image.src}
                alt={ABOUT_CONTENT.twoColumn.image.alt}
              />
            </div>
          </div>
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
