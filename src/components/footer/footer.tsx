import Link from "next/link";
import styles from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faBriefcase,
  faSquareEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => (
  <footer className={styles.container}>
    <div className={styles.columnContainer}>
      <div className={styles.links}>
        <p className={styles.summary}>Building scalable digital experiences</p>
        <ul className={`${styles.icons} ${styles.list}`}>
          <li>
            <a
              title="View my Github"
              href="https://github.com/lindsayfoley"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </li>
          <li>
            <a title="Send me an email" href="mailto:hello@theportfoleyo.com">
              <FontAwesomeIcon icon={faSquareEnvelope} size="2x" />
            </a>
          </li>
          <li>
            <a
              title="View my LinkedIn profile"
              href="https://www.linkedin.com/in/lindsay-foley-9a193534/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </li>
          <li>
            <a
              title="View my personal portfolio site"
              href="https://lindsayfoley.co.uk/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faBriefcase} size="2x" />
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.mobileHidden}>
        <h5 className={styles.title}>About</h5>
        <p>
          Portfoleyo provides bespoke development services with React,
          TypeScript, and modern frameworks—helping brands build fast, scalable
          digital products that are tailored to their unique needs, prioritising
          accessibility, efficiency, and sustainable growth.
        </p>
      </div>
      <div className={`${styles.pages} ${styles.mobileHidden}`}>
        <h5 className={styles.title}>Browse</h5>
        <ul className={styles.list}>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
    <hr className={styles.divider} />
    <small className={styles.copyright}>
      © {new Date().getFullYear()} Portfoleyo Ltd. All Rights Reserved.
    </small>
  </footer>
);

export default Footer;
