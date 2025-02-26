import { Theme, colourTheme } from "@portfoleyo/shared/common";
import AnchorButton, { AnchorButtonProps } from "../anchorButton/anchorButton";
import SectionTitle, { SectionTitleProps } from "../sectionTitle/sectionTitle";
import styles from "./banner.module.css";
import { ReactNode } from "react";

interface BannerProps {
  description?: string | string[];
  theme?: Theme;
  children?: ReactNode;
}

type AllBannerProps = BannerProps &
  SectionTitleProps &
  Partial<AnchorButtonProps>;

const Banner = ({
  title,
  subtitle,
  description,
  href,
  cta,
  isH1Element,
  isTitleFirst,
  theme = colourTheme.default,
  children,
}: AllBannerProps) => {
  return (
    <div className={`${styles.container} ${theme ? `${theme}Theme` : ""}`}>
      <SectionTitle
        title={title}
        subtitle={subtitle}
        isTitleFirst={isTitleFirst}
        isH1Element={isH1Element}
      />
      {description &&
        (Array.isArray(description) ? (
          description.map((desc, index) => (
            <p key={index} className={styles.description}>
              {desc}
            </p>
          ))
        ) : (
          <p className={styles.description}>{description}</p>
        ))}
      {href && cta && <AnchorButton href={href} cta={cta} />}
      {children && children}
    </div>
  );
};

export default Banner;
