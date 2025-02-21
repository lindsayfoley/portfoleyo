import styles from "./sectionTitle.module.css";

export interface SectionTitleProps {
  title: string;
  subtitle?: string;
  isTitleFirst?: boolean;
  isH1Element?: boolean;
}

const SectionTitle = ({
  title,
  subtitle,
  isTitleFirst = true,
  isH1Element = false,
}: SectionTitleProps) => {
  const HeadingElement = isH1Element ? "h1" : "h2";

  return (
    <div
      className={`${styles.container} ${
        isTitleFirst ? styles.titleTop : styles.titleBottom
      }`}
    >
      {isTitleFirst && (
        <HeadingElement className={styles.title}>{title}</HeadingElement>
      )}
      {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
      {!isTitleFirst && (
        <HeadingElement className={styles.title}>{title}</HeadingElement>
      )}
    </div>
  );
};

export default SectionTitle;
