import Link from "next/link";
import styles from "./clientLogos.module.css";

const title = " Brands I've worked with:";

const ClientLogos = () => {
  return (
    <section className={styles.container}>
      <span className={`${styles.title} ${styles.hideDesktop}`}>{title}</span>
      <ul className={styles.list}>
        <li className={`${styles.title} ${styles.hideMobile}`}>{title}</li>
        <li>
          <Link href="/portfolio/#charlotte-tilbury">
            <img
              className={styles.ct}
              src="/charlotte-tilbury-logo-hi-res.png"
              alt="Charlotte Tilbury logo"
            />
          </Link>
        </li>
        <li>
          <Link href="/portfolio/#dcypher">
            <img
              className={styles.dcypher}
              src="/dcypher-logo-hi-res.png"
              alt="DCYPHER logo"
            />
          </Link>
        </li>
        <li>
          <Link href="/portfolio/#the-fabled-thread">
            <img
              className={styles.tft}
              src="/the-fabled-thread-logo.avif"
              alt="The Fabled Thread logo"
            />
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default ClientLogos;
