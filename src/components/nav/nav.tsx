import Link from "next/link";
import styles from "./nav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <nav className={styles.container}>
      <div className={`${styles.pages} ${styles.links}`}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/services">Portfolio</Link>
          </li>
          <li>
            <Link href="/services">About</Link>
          </li>
          <li>
            <Link href="/services">Contact</Link>
          </li>
        </ul>
      </div>
      <div className={`${styles.icons} ${styles.links}`}>
        <ul>
          <li>
            <a href="https://github.com/lindsayfoley" target="_blank">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/lindsay-foley-9a193534/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </li>
          <a href="#" target="_blank">
            <FontAwesomeIcon icon={faBriefcase} size="lg" />
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
