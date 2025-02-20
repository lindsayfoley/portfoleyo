import Head from "next/head";
import styles from "@portfoleyo/styles/Home.module.css";
import FeatureTiles from "@portfoleyo/components/featureTiles/featureTiles";

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
        <FeatureTiles
          title="Featured Services"
          subtitle="How can I help you?"
          services={[
            {
              imageSrc: "https://place-hold.it/233x155/#fffff",
              alt: "",
              title: "Custom Website Development",
              description:
                "Have ambitious plans for your website and need someone to bring them to life? I turn ideas into high-performing, scalable, and user-friendly digital solutions",
              href: "/services",
            },
            {
              imageSrc: "https://place-hold.it/233x155/#fffff",
              alt: "",
              title: "Performance & SEO Optimisation",
              description:
                "A great website needs more than good looks - it must be fast, accessible, and SEO-optimised to reach more customers and drive conversions.",
              href: "/services",
            },
            {
              imageSrc: "https://place-hold.it/233x155/#fffff",
              alt: "",
              title: "E-Commerce & Shopify Solutions",
              description:
                "I can help optimise your e-commerce platform, enhancing user experience, simplifying management, and high-performing storefront.",
              href: "/services",
            },
          ]}
        />
      </main>
    </>
  );
}
