import AnchorButton from "../anchorButton/anchorButton";
import styles from "./highlightBanner.module.css";

interface HighlightBannerProps {
  imageSrc: string;
  alt: string;
  intro?: string;
  title: string;
  description: string | string[];
  cta?: string;
  link?: string;
  shouldReverseColumns?: boolean;
  isH1Element?: boolean;
}

const HighlightBanner = ({
  imageSrc,
  alt,
  intro,
  title,
  description,
  cta,
  link,
  shouldReverseColumns = false,
  isH1Element = false,
}: HighlightBannerProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div
          className={shouldReverseColumns ? styles.secondary : styles.primary}
        >
          <img src={imageSrc} alt={alt} />
        </div>
        <div
          className={`${styles.copy} ${
            shouldReverseColumns ? styles.primary : styles.secondary
          }`}
        >
          {intro && <span>{intro}</span>}
          {isH1Element ? <h1>{title}</h1> : <h2>{title}</h2>}
          {Array.isArray(description) ? (
            description.map((sentence) => (
              <p key={sentence} className={styles.paragraph}>
                {sentence}
              </p>
            ))
          ) : (
            <p>{description}</p>
          )}

          {link && cta && <AnchorButton href={link} cta={cta} />}
        </div>
      </div>
    </div>
  );
};

export default HighlightBanner;
