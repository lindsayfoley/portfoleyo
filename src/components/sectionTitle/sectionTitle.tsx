import styles from "./sectionTitle.module.css";

export interface SectionTitleProps {
  title: string;
  subtitle?: string;
  isTitleFirst?: boolean;
  isH1Element?: boolean;
  titleHref?: string;
}

const SectionTitle = ({
  title,
  titleHref,
  subtitle,
  isTitleFirst = true,
  isH1Element = false,
}: SectionTitleProps) => {
  const HeadingElement = isH1Element ? "h1" : "h2";
  const titleContent = titleHref ? (
    <a href={titleHref} target="_blank">
      {title}
    </a>
  ) : (
    title
  );

  return (
    <div
      className={`${styles.container} ${
        !isTitleFirst ? styles.titleBottom : ""
      }`}
    >
      {isTitleFirst && (
        <HeadingElement className={styles.title}>{titleContent}</HeadingElement>
      )}
      {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
      {!isTitleFirst && (
        <HeadingElement className={styles.title}>{titleContent}</HeadingElement>
      )}
    </div>
  );
};

export default SectionTitle;
