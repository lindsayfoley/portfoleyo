import SectionTitle, { SectionTitleProps } from "../sectionTitle/sectionTitle";
import AnchorButton, { LinkProps } from "../anchorButton/anchorButton";

import styles from "./showcase.module.css";
import { colourTheme, Theme } from "@portfoleyo/shared/common";
import useAnimationIntersectionObserver from "@portfoleyo/hooks/useAnimationIntersectionObserver";
import LazyPicture, {
  ImageProps,
  LazyPictureProps,
} from "../lazyPicture/lazyPicture";

type TitleAndButtonProps = SectionTitleProps & LinkProps;
type Image = ImageProps & { href: string } & Pick<
    LazyPictureProps,
    "mediaCondition"
  >;
interface ShowcaseProps extends TitleAndButtonProps {
  images: Image[];
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
        {images.map(({ src, alt, mediaCondition, href }) => (
          <a className={styles.link} key={src} href={href}>
            <LazyPicture
              classname={styles.image}
              image={{ src, alt }}
              mediaCondition={mediaCondition}
            />
          </a>
        ))}
      </div>
      <AnchorButton href={href} cta={cta} />
    </div>
  );
};

export default Showcase;
