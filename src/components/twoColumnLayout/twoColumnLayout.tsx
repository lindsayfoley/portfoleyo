import { ABOUT_CONTENT } from "@portfoleyo/constants/about/content";
import SectionTitle from "../sectionTitle/sectionTitle";
import styles from "./twoColumnLayout.module.css";

const TwoColumnLayout = () => {
  return (
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
          className={styles.image}
          src={ABOUT_CONTENT.twoColumn.image.src}
          alt={ABOUT_CONTENT.twoColumn.image.alt}
        />
      </div>
    </div>
  );
};

export default TwoColumnLayout;
