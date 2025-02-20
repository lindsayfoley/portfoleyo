import styles from "./anchorButton.module.css";

interface AnchorButtonProps {
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
