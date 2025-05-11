import { ReactNode } from "react";
import { Theme, colourTheme } from "@portfoleyo/shared/common";
import useAnimationIntersectionObserver from "@portfoleyo/hooks/useAnimationIntersectionObserver";
import AnchorButton, { AnchorButtonProps } from "../anchorButton/anchorButton";
import SectionTitle, { SectionTitleProps } from "../sectionTitle/sectionTitle";
import styles from "./banner.module.css";

interface BannerProps {
  image?: {
    src: string;
    alt: string;
  };
  description?: string | string[];
  theme?: Theme;
  children?: ReactNode;
  hasBorder?: boolean;
  isIndependantSection?: boolean;
  useAnimation?: boolean;
}

type AllBannerProps = BannerProps &
  SectionTitleProps &
  Partial<AnchorButtonProps>;

const Banner = ({
  image,
  title,
  subtitle,
  description,
  href,
  cta,
  isH1Element,
  isTitleFirst,
  theme = colourTheme.default,
  children,
  hasBorder = false,
  isIndependantSection = true,
  useAnimation = false,
}: AllBannerProps) => {
  const ref = useAnimationIntersectionObserver("fadeIn");

  return (
    <div
      ref={useAnimation ? ref : undefined}
      className={`${styles.container} ${theme ? `${theme}Theme` : ""} ${
        hasBorder ? styles.border : ""
      } ${!isIndependantSection ? styles.noPaddingBottom : ""}`}
    >
      <div className={hasBorder ? styles.frame : ""}>
        {image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className={styles.image}
            src="/logo.png"
            alt="The Portfoleyo logo"
          />
        )}
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
    </div>
  );
};

export default Banner;
