import AnchorButton, { AnchorButtonProps } from "../anchorButton/anchorButton";
import SectionTitle, { SectionTitleProps } from "../sectionTitle/sectionTitle";
import styles from "./banner.module.css";

type BannerProps = SectionTitleProps & AnchorButtonProps;

const Banner = ({ title, subtitle, isTitleFirst, href, cta }: BannerProps) => {
  return (
    <div className={styles.container}>
      <SectionTitle
        title={title}
        subtitle={subtitle}
        isTitleFirst={isTitleFirst}
      />
      <AnchorButton href={href} cta={cta} />
    </div>
  );
};

export default Banner;
