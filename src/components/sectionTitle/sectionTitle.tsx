import styles from "./sectionTitle.module.css";

export interface SectionTitleProps {
  title: string;
  subtitle?: string;
  isTitleFirst?: boolean;
}

const SectionTitle = ({
  title,
  subtitle,
  isTitleFirst = true,
}: SectionTitleProps) => {
  return (
    <div
      className={`${styles.container} ${
        isTitleFirst ? styles.titleTop : styles.titleBottom
      }`}
    >
      {isTitleFirst && <h2 className={styles.title}>{title}</h2>}
      {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
      {!isTitleFirst && <h2 className={styles.title}>{title}</h2>}
    </div>
  );
};

export default SectionTitle;
