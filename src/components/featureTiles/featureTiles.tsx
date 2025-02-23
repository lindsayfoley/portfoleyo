import SectionTitle from "../sectionTitle/sectionTitle";
import styles from "./featureTiles.module.css";

interface FeatureTilesProps {
  title: string;
  subtitle?: string;
  services: {
    imageSrc: string;
    alt: string;
    title: string;
    description: string;
    href: string;
  }[];
  cta?: string;
}

const FeatureTiles = ({
  title,
  subtitle,
  services,
  cta = "Learn more",
}: FeatureTilesProps) => {
  return (
    <section className={styles.container}>
      <SectionTitle title={title} subtitle={subtitle} />
      <div className={styles.serviceWrapper}>
        {services.map(({ imageSrc, alt, title, description, href }) => (
          <div className={styles.service} key={title}>
            <img className={styles.image} src={imageSrc} alt={alt} />
            <div className={styles.copy}>
              <h4 className={styles.title}>{title}</h4>
              <p className={styles.description}>{description}</p>
              <a className={styles.link} href={href}>
                {cta}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureTiles;
