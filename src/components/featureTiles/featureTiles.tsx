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
      <h2>{title}</h2>
      <span>{subtitle}</span>
      <div className={styles.serviceWrapper}>
        {services.map(({ imageSrc, alt, title, description, href }) => (
          <div className={styles.service} key={title}>
            <img src={imageSrc} alt={alt} />
            <h4>{title}</h4>
            <p>{description}</p>
            <a href={href}>{cta}</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureTiles;
