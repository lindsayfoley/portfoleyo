import styles from "./anchorButton.module.css";

export interface AnchorButtonProps {
  href: string;
  cta: string;
}

const AnchorButton = ({ href, cta }: AnchorButtonProps) => {
  return (
    <a className={styles.container} href={href}>
      {cta}
    </a>
  );
};

export default AnchorButton;
