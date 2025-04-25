import SectionTitle, { SectionTitleProps } from "../sectionTitle/sectionTitle";
import AnchorButton, { AnchorButtonProps } from "../anchorButton/anchorButton";

import styles from "./showcase.module.css";
import { colourTheme, Theme } from "@portfoleyo/shared/common";
import useAnimationIntersectionObserver from "@portfoleyo/hooks/useAnimationIntersectionObserver";

export const device = {
  mobile: "mobile",
  desktop: "desktop",
} as const;

type TitleAndButtonProps = SectionTitleProps & AnchorButtonProps;
type DeviceKeys = keyof typeof device;

interface ShowcaseProps extends TitleAndButtonProps {
  images: {
    imageSrc: string;
    alt: string;
    deviceConstraint?: DeviceKeys;
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
  const mobileOnlyImage = (deviceKey?: DeviceKeys) =>
    deviceKey && deviceKey === device.mobile;
  const desktopOnlyImage = (deviceKey?: DeviceKeys) =>
    deviceKey && deviceKey === device.desktop;

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
        {images.map(({ imageSrc, alt, deviceConstraint, href }) => (
          <a className={styles.link} key={imageSrc} href={href}>
            <img
              loading="lazy"
              className={`${styles.image} ${
                mobileOnlyImage(deviceConstraint) ? styles.mobileOnly : ""
              } ${
                desktopOnlyImage(deviceConstraint) ? styles.desktopOnly : ""
              }`}
              src={imageSrc}
              alt={alt}
            />
          </a>
        ))}
      </div>
      <AnchorButton href={href} cta={cta} />
    </div>
  );
};

export default Showcase;
