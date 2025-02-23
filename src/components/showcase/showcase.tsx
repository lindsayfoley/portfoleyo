import SectionTitle, { SectionTitleProps } from "../sectionTitle/sectionTitle";
import AnchorButton, { AnchorButtonProps } from "../anchorButton/anchorButton";

import styles from "./showcase.module.css";

type TitleAndButtonProps = SectionTitleProps & AnchorButtonProps;

interface ShowcaseProps extends TitleAndButtonProps {
  images: {
    imageSrc: string;
    alt: string;
  }[];
}

const Showcase = ({
  title,
  subtitle,
  isTitleFirst,
  images,
  href,
  cta,
}: ShowcaseProps) => {
  return (
    <div className={styles.container}>
      <SectionTitle
        title={title}
        subtitle={subtitle}
        isTitleFirst={isTitleFirst}
      />
      <div className={styles.images}>
        {images.map(({ imageSrc, alt }, index) => (
          <img
            className={`${styles.image} ${
              index === Math.floor(images.length / 2) ? styles.middle : ""
            }`}
            key={imageSrc}
            src={imageSrc}
            alt={alt}
          />
        ))}
      </div>
      <AnchorButton href={href} cta={cta} />
    </div>
  );
};

export default Showcase;
