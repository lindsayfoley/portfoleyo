import Head from "next/head";
import styles from "@portfoleyo/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfoleyo | Expert Web Development & React Specialist</title>
        <meta
          name="description"
          content="Bespoke web development for independent brands. Expert in React, TypeScript, and modern frameworks, building fast, high-performing websites that drive results"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h2>Elevate Your Brand with Bespoke Web Development</h2>
        <p>
          Crafting seamless, high-performing websites for independent brands and
          entrepreneurs.
        </p>
      </main>
    </>
  );
}
