import { colourTheme, Theme } from "@portfoleyo/shared/common";
import SectionTitle from "../sectionTitle/sectionTitle";
import styles from "./featureTiles.module.css";
import { ElementType } from "react";

interface FeatureTilesProps {
  title: string;
  subtitle?: string;
  services: {
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
}: FeatureTilesProps) => {
  return (
    <section className={theme ? `${theme}Theme` : ""}>
      <div className={styles.container}>
        <SectionTitle title={title} subtitle={subtitle} />
        <div className={styles.serviceWrapper}>
          {services.map(({ image, Icon, title, description, href }) => (
            <article className={styles.service} key={title}>
              {image && (
                <img className={styles.image} src={image.src} alt={image.alt} />
              )}
              {Icon && (
                <Icon fill={getIconFillValueFromTheme(theme)} width="100px" />
              )}
              <div className={styles.copy}>
                <h4 className={styles.title}>{title}</h4>
                <p className={styles.description}>{description}</p>
                {href && cta && (
                  <a className={styles.link} href={href}>
                    {cta}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureTiles;
