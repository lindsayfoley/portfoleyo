import { ReactNode } from "react";
import { colourTheme, Theme } from "@portfoleyo/shared/common";
import useAnimationIntersectionObserver from "@portfoleyo/hooks/useAnimationIntersectionObserver";
import SectionTitle from "../sectionTitle/sectionTitle";
import LazyPicture from "../lazyPicture/lazyPicture";
import styles from "./twoColumnLayout.module.css";

interface TwoColumnLayoutProps {
  title: string;
  href?: string;
  id?: string;
  subtitle?: string;
  isH1Element?: boolean;
  paragraphs?: string[];
  image: {
    src: string;
    alt: string;
    useEagerLoading?: boolean;
  };
  shouldReverseColumns?: boolean;
  theme?: Theme;
  children?: ReactNode;
  isIndependantSection?: boolean;
  useAnimation?: boolean;
}

const TwoColumnLayout = ({
  title,
  href,
  id,
  subtitle,
  isH1Element,
  paragraphs,
  image,
  shouldReverseColumns = false,
  theme = colourTheme.default,
  children,
  isIndependantSection = true,
  useAnimation = false,
}: TwoColumnLayoutProps) => {
  const ref = useAnimationIntersectionObserver("fadeIn");

  const imageTag = (
    <LazyPicture
      classname={styles.image}
      image={{ src: image.src, alt: image.alt }}
      useEagerLoading={image.useEagerLoading}
    />
  );

  return (
    <section
      className={`${theme ? `${theme}Theme` : ""}`}
      id={id}
      ref={useAnimation ? ref : undefined}
    >
      <div
        className={`${styles.container} ${
          !isIndependantSection ? styles.noTopPadding : ""
        }`}
      >
        <div
          className={`${styles.copy} ${
            shouldReverseColumns ? styles.secondary : ""
          }`}
        >
          <SectionTitle
            title={title}
            titleHref={href}
            subtitle={subtitle}
            isH1Element={isH1Element}
          />
          <div className={styles.paragraphSection}>
            {paragraphs?.map((paragraph) => (
              <p className={styles.paragraph} key={paragraph}>
                {paragraph}
              </p>
            ))}
            {children && children}
          </div>
        </div>
        <div
          className={`${styles.imageContainer} ${
            !shouldReverseColumns ? styles.secondary : ""
          }`}
        >
          {href ? (
            <a href={href} target="_blank">
              {imageTag}
            </a>
          ) : (
            <>{imageTag}</>
          )}
        </div>
      </div>
    </section>
  );
};

export default TwoColumnLayout;
