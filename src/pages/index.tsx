import Head from "next/head";
import styles from "@portfoleyo/styles/Home.module.css";
import FeatureTiles from "@portfoleyo/components/featureTiles/featureTiles";
import HighlightBanner from "@portfoleyo/components/highlightBanner/highlightBanner";
import AnchorButton from "@portfoleyo/components/anchorButton/anchorButton";

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
        <HighlightBanner
          imageSrc="https://place-hold.it/400x285/#fffff"
          alt=""
          intro="Welcome to"
          title="Portfoleyo"
          description="My new development consultancy, specialising in high-performance, scalable digital solutions. With expertise in React, TypeScript, and modern frameworks, I help brands turn their ideas into reality — whether it’s building something from the ground up, optimising an existing platform, or enhancing an e-commerce experience. Focused on speed, accessibility, and seamless user interactions, I deliver bespoke solutions tailored to your business needs!"
          cta="About"
          link="/About"
        />
        <FeatureTiles
          title="Featured Services"
          subtitle="How can I help you?"
          services={[
            {
              imageSrc: "https://place-hold.it/300x200/#fffff",
              alt: "",
              title: "Custom Website Development",
              description:
                "Have ambitious plans for your website and need someone to bring them to life? I turn ideas into high-performing, scalable, and user-friendly digital solutions",
              href: "/services",
            },
            {
              imageSrc: "https://place-hold.it/300x200/#fffff",
              alt: "",
              title: "Performance & SEO Optimisation",
              description:
                "A great website needs more than good looks - it must be fast, accessible, and SEO-optimised to reach more customers and drive conversions.",
              href: "/services",
            },
            {
              imageSrc: "https://place-hold.it/300x200/#fffff",
              alt: "",
              title: "E-Commerce & Shopify Solutions",
              description:
                "I can help optimise your e-commerce platform, enhancing user experience, simplifying management, and high-performing storefront.",
              href: "/services",
            },
          ]}
        />
        <div className={styles.contact}>
          <span>Work with me</span>
          <h3>Let’s Talk About Your Next Project</h3>
          <AnchorButton href="/portfolio" cta="Contact" />
        </div>
        <div className={styles.recent}>
          <span>My Portfolio</span>
          <h3>View Recent Work</h3>
          <div className={styles.images}>
            <img src="https://place-hold.it/300x300/#fffff" alt="" />
            <img src="https://place-hold.it/300x350/#fffff" alt="" />
            <img src="https://place-hold.it/300x300/#fffff" alt="" />
          </div>
          <a className={styles.anchorButton} href="/portfolio">
            View more
          </a>
        </div>
      </main>
    </>
  );
}
