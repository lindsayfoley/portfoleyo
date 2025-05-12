import { colourTheme, Theme } from "@portfoleyo/shared/common";
import AnchorButton from "../anchorButton/anchorButton";
import LazyPicture, { ImageProps } from "../lazyPicture/lazyPicture";
import styles from "./highlightBanner.module.css";

interface HighlightBannerProps {
  image: ImageProps;
  intro?: string;
  title: string;
  description: string | string[];
  cta?: string;
  link?: string;
  shouldReverseColumns?: boolean;
  isH1Element?: boolean;
  theme?: Theme;
}

const HighlightBanner = ({
  image,
  intro,
  title,
  description,
  cta,
  link,
  shouldReverseColumns = false,
  isH1Element = false,
  theme = colourTheme.default,
}: HighlightBannerProps) => {
  return (
    <div
      className={`${styles.container} ${theme ? `${theme}Theme` : ""} fadeIn`}
    >
      <div className={styles.wrapper}>
        <div
          className={shouldReverseColumns ? styles.secondary : styles.primary}
        >
          <LazyPicture classname={styles.image} image={image} />
        </div>
        <div
          className={`${styles.copy} ${
            shouldReverseColumns ? styles.primary : styles.secondary
          }`}
        >
          {intro && <span className={styles.subtitle}>{intro}</span>}
          {isH1Element ? (
            <h1 className={styles.title}>{title}</h1>
          ) : (
            <h2 className={styles.title}>{title}</h2>
          )}
          {Array.isArray(description) ? (
            description.map((sentence) => (
              <p key={sentence} className={styles.paragraph}>
                {sentence}
              </p>
            ))
          ) : (
            <p>{description}</p>
          )}

          {link && cta && (
            <span className={styles.button}>
              <AnchorButton href={link} cta={cta} />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default HighlightBanner;
