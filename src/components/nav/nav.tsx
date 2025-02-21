import Link from "next/link";
import styles from "./nav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <nav className={styles.container}>
      <div className={`${styles.pages} ${styles.links}`}>
        <ul className={styles.linksList}>
          <li className={styles.homeLink}>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li className={styles.last}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className={`${styles.icons} ${styles.links}`}>
        <ul className={styles.linksList}>
          <li>
            <a
              title="View my LinkedIn profile"
              href="https://www.linkedin.com/in/lindsay-foley-9a193534/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </li>
          <li>
            <a
              title="View my Github"
              href="https://github.com/lindsayfoley"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
          </li>
          <li>
            <a title="Send me an email" href="mailto:hello@theportfoleyo.com">
              <FontAwesomeIcon icon={faSquareEnvelope} size="lg" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
