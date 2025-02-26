import AnchorButton, { AnchorButtonProps } from "../anchorButton/anchorButton";
import SectionTitle, { SectionTitleProps } from "../sectionTitle/sectionTitle";
import styles from "./banner.module.css";

type BannerProps = SectionTitleProps &
  Partial<AnchorButtonProps> & { description?: string };

const Banner = ({
  title,
  subtitle,
  description,
  href,
  cta,
  isH1Element,
  isTitleFirst,
}: BannerProps) => {
  return (
    <div className={styles.container}>
      <SectionTitle
        title={title}
        subtitle={subtitle}
        isTitleFirst={isTitleFirst}
        isH1Element={isH1Element}
      />
      {description && <p className={styles.description}>{description}</p>}
      {href && cta && <AnchorButton href={href} cta={cta} />}
    </div>
  );
};

export default Banner;
