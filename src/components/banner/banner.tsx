import { Theme, colourTheme } from "@portfoleyo/shared/common";
import AnchorButton, { AnchorButtonProps } from "../anchorButton/anchorButton";
import SectionTitle, { SectionTitleProps } from "../sectionTitle/sectionTitle";
import styles from "./banner.module.css";

interface BannerProps {
  description?: string;
  theme?: Theme;
}

type AllBannerProps = SectionTitleProps &
  Partial<AnchorButtonProps> &
  BannerProps;

const Banner = ({
  title,
  subtitle,
  description,
  href,
  cta,
  isH1Element,
  isTitleFirst,
  theme = colourTheme.default,
}: AllBannerProps) => {
  return (
    <div className={`${styles.container} ${theme ? `${theme}Theme` : ""}`}>
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
