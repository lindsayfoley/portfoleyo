import SectionTitle, { SectionTitleProps } from "../sectionTitle/sectionTitle";
import AnchorButton, { LinkProps } from "../anchorButton/anchorButton";

import styles from "./showcase.module.css";
import { colourTheme, Theme } from "@portfoleyo/shared/common";
import useAnimationIntersectionObserver from "@portfoleyo/hooks/useAnimationIntersectionObserver";
import LazyPicture from "../lazyPicture/lazyPicture";

type TitleAndButtonProps = SectionTitleProps & LinkProps;

interface ShowcaseProps extends TitleAndButtonProps {
  images: {
    imageSrc: string;
    alt: string;
    useDesktopMediaCondition?: boolean;
    href: string;
  }[];
  theme?: Theme;
}

const Showcase = ({
  title,
  subtitle,
  isTitleFirst,
  images,
  href,
  cta,
  theme = colourTheme.default,
}: ShowcaseProps) => {
  const ref = useAnimationIntersectionObserver("fadeIn");

  return (
    <div
      className={`${styles.container} ${theme ? `${theme}Theme` : ""}`}
      ref={ref}
    >
      <SectionTitle
        title={title}
        subtitle={subtitle}
        isTitleFirst={isTitleFirst}
      />
      <div className={styles.images}>
        {images.map(({ imageSrc, alt, useDesktopMediaCondition, href }) => (
          <a className={styles.link} key={imageSrc} href={href}>
            <LazyPicture
              classname={styles.image}
              image={{ src: imageSrc, alt }}
              mediaCondition={
                useDesktopMediaCondition
                  ? {
                      srcSet: `${imageSrc.slice(
                        0,
                        imageSrc.indexOf(".")
                      )}-wide.avif`,
                      media: "(min-width: 760px)",
                    }
                  : undefined
              }
            />
          </a>
        ))}
      </div>
      <AnchorButton href={href} cta={cta} />
    </div>
  );
};

export default Showcase;
