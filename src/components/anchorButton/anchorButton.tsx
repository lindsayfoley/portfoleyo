import styles from "./anchorButton.module.css";

export interface LinkProps {
  href: string;
  cta: string;
}

const AnchorButton = ({ href, cta }: LinkProps) => {
  return (
    <a className={styles.container} href={href}>
      {cta}
    </a>
  );
};

export default AnchorButton;
