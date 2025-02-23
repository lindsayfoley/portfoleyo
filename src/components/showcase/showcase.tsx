import SectionTitle, { SectionTitleProps } from "../sectionTitle/sectionTitle";
import AnchorButton, { AnchorButtonProps } from "../anchorButton/anchorButton";

import styles from "./showcase.module.css";

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
    deviceConstraint: DeviceKeys;
    href: string;
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
  const mobileOnlyImage = (deviceKey?: DeviceKeys) =>
    deviceKey === device.mobile;
  const desktopOnlyImage = (deviceKey?: DeviceKeys) =>
    deviceKey === device.desktop;

  return (
    <div className={styles.container}>
      <SectionTitle
        title={title}
        subtitle={subtitle}
        isTitleFirst={isTitleFirst}
      />
      <div className={styles.images}>
        {images.map(({ imageSrc, alt, deviceConstraint, href }) => (
          <a className={styles.link} key={imageSrc} href={href}>
            <img
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
