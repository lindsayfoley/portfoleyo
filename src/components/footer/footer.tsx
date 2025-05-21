import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FOOTER_CONTENT } from "@portfoleyo/constants/footer/content";
import { FFR_DIRECTORY_PROFILE } from "@portfoleyo/constants/shared";
import { NAV_CONTENT } from "../../constants/nav/nav";
import styles from "./footer.module.css";

const Footer = () => (
  <footer className={styles.container}>
    <div className={styles.columnContainer}>
      <div className={styles.links}>
        <p className={styles.summary}>{FOOTER_CONTENT.summary}</p>
        <ul className={`${styles.icons} ${styles.list}`}>
          {NAV_CONTENT.icons.map(({ title, href, target, icon }) => (
            <li key={title}>
              <a title={title} href={href} target={target}>
                <FontAwesomeIcon icon={icon as IconDefinition} size="2x" />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.mobileHidden}>
        <h5 className={styles.title}>
          <Link href="/about">{FOOTER_CONTENT.about.title}</Link>
        </h5>
        <p className={styles.description}>{FOOTER_CONTENT.about.description}</p>
      </div>
      <div className={`${styles.pages} ${styles.mobileHidden}`}>
        <h5 className={styles.title}>{FOOTER_CONTENT.browse.title}</h5>
        <ul className={styles.list}>
          {NAV_CONTENT.links.map(({ href, cta }) => (
            <li key={cta}>
              <Link href={href}>{cta}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <hr className={styles.divider} />
    <div className={styles.columnContainer}>
      <a
        className={styles.ffrContainer}
        href={FFR_DIRECTORY_PROFILE}
        target="_blank"
      >
        <img
          className={styles.ffr}
          src="/FFR-kitemark.png"
          alt={FOOTER_CONTENT.ffr}
          title={FOOTER_CONTENT.ffr}
          loading="lazy"
        />
      </a>
      <small className={styles.copyright}>
        © {new Date().getFullYear()} {FOOTER_CONTENT.copyright}
      </small>
    </div>
  </footer>
);

export default Footer;
