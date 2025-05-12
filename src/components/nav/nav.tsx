import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { NAV_CONTENT } from "../../constants/nav/nav";
import { LinkProps } from "../anchorButton/anchorButton";
import styles from "./nav.module.css";

interface NavProps {
  links: LinkProps[];
}

const Nav = ({ links }: NavProps) => {
  return (
    <nav className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={`${styles.pages} ${styles.links}`}>
          <ul className={styles.linksList}>
            {links.map(({ href, cta }) => (
              <li key={cta}>
                <Link href={href}>{cta}</Link>
              </li>
            ))}
          </ul>
        </div>
        <Link href="/" className={styles.logoWrapper}>
          <img
            className={styles.logo}
            src="/logo.png"
            alt="The Portfoleyo logo"
          />
        </Link>
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
      </div>
    </nav>
  );
};

export default Nav;
