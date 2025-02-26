import { colourTheme, Theme } from "@portfoleyo/shared/common";
import SectionTitle from "../sectionTitle/sectionTitle";
import styles from "./twoColumnLayout.module.css";

interface TwoColumnLayoutProps {
  title: string;
  subtitle?: string;
  isH1Element?: boolean;
  paragraphs: string[];
  image: {
    src: string;
    alt: string;
  };
  shouldReverseColumns?: boolean;
  theme?: Theme;
}

const TwoColumnLayout = ({
  title,
  subtitle,
  isH1Element,
  paragraphs,
  image,
  shouldReverseColumns = false,
  theme = colourTheme.default,
}: TwoColumnLayoutProps) => {
  return (
    <section className={`${theme ? `${theme}Theme` : ""}`}>
      <div className={styles.container}>
        <div
          className={`${styles.copy} ${
            shouldReverseColumns ? styles.secondary : ""
          }`}
        >
          <SectionTitle
            title={title}
            subtitle={subtitle}
            isH1Element={isH1Element}
          />
          <div className={styles.paragraphSection}>
            {paragraphs.map((paragraph) => (
              <p className={styles.paragraph} key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div
          className={`${styles.imageContainer} ${
            !shouldReverseColumns ? styles.secondary : ""
          }`}
        >
          <img className={styles.image} src={image.src} alt={image.alt} />
        </div>
      </div>
    </section>
  );
};

export default TwoColumnLayout;
