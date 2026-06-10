import styles from "./sectionTitle.module.css";

export interface SectionTitleProps {
  title: string;
  subtitle?: string;
  isTitleFirst?: boolean;
  isH1Element?: boolean;
  titleHref?: string;
  shouldOpenInNewTab?: boolean;
}

const SectionTitle = ({
  title,
  titleHref,
  subtitle,
  isTitleFirst = true,
  isH1Element = false,
  shouldOpenInNewTab = true,
}: SectionTitleProps) => {
  const HeadingElement = isH1Element ? "h1" : "h2";
  const titleContent = titleHref ? (
    <a href={titleHref} target={shouldOpenInNewTab ? "_blank" : "_self"}>
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
      {subtitle && (
        <span
          className={`${styles.subtitle} ${
            isTitleFirst ? styles.subtitleSecond : ""
          }`}
        >
          {subtitle}
        </span>
      )}
      {!isTitleFirst && (
        <HeadingElement className={styles.title}>{titleContent}</HeadingElement>
      )}
    </div>
  );
};

export default SectionTitle;
