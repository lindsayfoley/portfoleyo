import {
  colourTheme,
  getIconFillValueFromTheme,
} from "@portfoleyo/shared/common";
import useAnimationIntersectionObserver from "@portfoleyo/hooks/useAnimationIntersectionObserver";
import SectionTitle from "../sectionTitle/sectionTitle";
import LazyPicture from "../lazyPicture/lazyPicture";
import { FeatureTilesProps } from "./types";
import styles from "./featureTiles.module.css";

const FeatureTiles = ({
  title,
  subtitle,
  services,
  cta,
  theme = colourTheme.default,
  hasTimeline = false,
  isIndependantSection = true,
}: FeatureTilesProps) => {
  const ref = useAnimationIntersectionObserver("fadeIn");

  const tilesMarkup = services.map(
    ({ id, label, image, Icon, title, description, href }) => {
      return href ? (
        <article className={styles.service} key={title}>
          <a href={id ? `${href}#${id}` : href}>
            {label && <span className={styles.label}>{label}</span>}
            {image && <LazyPicture classname={styles.image} image={image} />}
            {Icon && (
              <Icon fill={getIconFillValueFromTheme(theme)} width="100px" />
            )}
            <div className={styles.copy}>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.description}>{description}</p>
              {cta && <span className={styles.cta}>{cta}</span>}
            </div>
          </a>
        </article>
      ) : (
        <article className={styles.service} key={title}>
          {label && <span className={styles.label}>{label}</span>}
          {image && (
            <LazyPicture
              classname={styles.image}
              image={{ src: image.src, alt: image.alt }}
            />
          )}
          {Icon && (
            <Icon fill={getIconFillValueFromTheme(theme)} width="100px" />
          )}
          <div className={styles.copy}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            {cta && <span className={styles.cta}>{cta}</span>}
          </div>
        </article>
      );
    }
  );

  return (
    <section
      className={theme ? `${theme}Theme` : ""}
      ref={ref && !hasTimeline ? ref : undefined}
    >
      <div
        className={`${styles.container} ${
          !isIndependantSection ? styles.noTopPadding : ""
        } ${hasTimeline ? styles.timeline : ""}`}
      >
        {title && <SectionTitle title={title} subtitle={subtitle} />}
        <div className={styles.serviceWrapper}>{tilesMarkup}</div>
      </div>
    </section>
  );
};

export default FeatureTiles;
