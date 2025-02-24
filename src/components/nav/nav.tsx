import Link from "next/link";
import styles from "./nav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { NAV_CONTENT } from "../../constants/nav/nav";

const Nav = () => {
  return (
    <nav className={styles.container}>
      <div className={`${styles.pages} ${styles.links}`}>
        <ul className={styles.linksList}>
          {NAV_CONTENT.headerNavContent.map(({ href, cta }) => (
            <li key={cta}>
              <Link href={href}>{cta}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={`${styles.icons} ${styles.links}`}>
        <ul className={styles.linksList}>
          {NAV_CONTENT.icons.map(({ title, href, target, icon }) => (
            <li key={title}>
              <a title={title} href={href} target={target}>
                <FontAwesomeIcon icon={icon as IconDefinition} size="lg" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
