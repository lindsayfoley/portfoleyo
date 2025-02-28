import { colourTheme, Theme } from "@portfoleyo/shared/common";
import SectionTitle from "../sectionTitle/sectionTitle";
import styles from "./featureTiles.module.css";
import { ElementType } from "react";

interface FeatureTilesProps {
  title?: string;
  subtitle?: string;
  services: {
    label?: string;
    image?: {
      src: string;
      alt: string;
    };
    Icon?: ElementType;
    title: string;
    description: string;
    href?: string;
  }[];
  cta?: string;
  theme?: Theme;
  hasTimeline?: boolean;
}

const getIconFillValueFromTheme = (theme: Theme) => {
  if (theme === colourTheme.muted) {
    return "#ffffff";
  }

  if (theme === colourTheme.highlight) {
    return "#faf1ec";
  }

  return "#f8f7f3";
};

const FeatureTiles = ({
  title,
  subtitle,
  services,
  cta,
  theme = colourTheme.default,
  hasTimeline = false,
}: FeatureTilesProps) => {
  const tilesMarkup = services.map(
    ({ label, image, Icon, title, description, href }) => {
      return href ? (
        <article className={styles.service} key={title}>
          <a href={href}>
            {label && <h5 className={styles.label}>{label}</h5>}
            {image && (
              <img className={styles.image} src={image.src} alt={image.alt} />
            )}
            {Icon && (
              <Icon fill={getIconFillValueFromTheme(theme)} width="100px" />
            )}
            <div className={styles.copy}>
              <h4 className={styles.title}>{title}</h4>
              <p className={styles.description}>{description}</p>
              {cta && <h5 className={styles.cta}>{cta}</h5>}
            </div>
          </a>
        </article>
      ) : (
        <article className={styles.service} key={title}>
          {label && <h5 className={styles.label}>{label}</h5>}
          {image && (
            <img className={styles.image} src={image.src} alt={image.alt} />
          )}
          {Icon && (
            <Icon fill={getIconFillValueFromTheme(theme)} width="100px" />
          )}
          <div className={styles.copy}>
            <h4 className={styles.title}>{title}</h4>
            <p className={styles.description}>{description}</p>
            {cta && <h5 className={styles.cta}>{cta}</h5>}
          </div>
        </article>
      );
    }
  );

  return (
    <section className={theme ? `${theme}Theme` : ""}>
      <div
        className={`${styles.container} ${hasTimeline ? styles.noPadding : ""}`}
      >
        {title && <SectionTitle title={title} subtitle={subtitle} />}
        <div
          className={`${styles.serviceWrapper} ${
            hasTimeline ? styles.timeline : ""
          }`}
        >
          {tilesMarkup}
        </div>
      </div>
    </section>
  );
};

export default FeatureTiles;
