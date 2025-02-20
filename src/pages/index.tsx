import Head from "next/head";
import styles from "@portfoleyo/styles/Home.module.css";
import FeatureTiles from "@portfoleyo/components/featureTiles/featureTiles";
import HighlightBanner from "@portfoleyo/components/highlightBanner/highlightBanner";
import AnchorButton from "@portfoleyo/components/anchorButton/anchorButton";
import Banner from "@portfoleyo/components/banner/banner";
import Showcase from "@portfoleyo/components/showcase/showcase";

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
          imageSrc="https://place-hold.it/400x295/#fffff"
          alt=""
          intro="Welcome to"
          title="The Portfoleyo"
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
              title: "Custom Development",
              description:
                "Have ambitious plans for a site or app and need someone to bring it to life? I can turn ideas into performant, scalable, and user-friendly digital solutions",
              href: "/services",
            },
            {
              imageSrc: "https://place-hold.it/300x200/#fffff",
              alt: "",
              title: "Performance & SEO Optimisation",
              description:
                "A great site needs more than just good looks - it has to be fast, accessible, and SEO-optimised to reach more customers and drive maximum conversions",
              href: "/services",
            },
            {
              imageSrc: "https://place-hold.it/300x200/#fffff",
              alt: "",
              title: "E-Commerce & Shopify Solutions",
              description:
                "I can help optimise your e-commerce platform, improving UX, streamlining management, and delivering a fast, conversion-focused storefront",
              href: "/services",
            },
          ]}
        />
        <Banner
          title="Let’s Talk About Your Project"
          subtitle="Work with me"
          isTitleFirst={false}
          href="/contact"
          cta="Contact"
        />
        <Showcase
          title="View Recent Work"
          subtitle="My Portfolio"
          images={[
            { imageSrc: "https://place-hold.it/300x300/#fffff", alt: "" },
            { imageSrc: "https://place-hold.it/300x300/#fffff", alt: "" },
            { imageSrc: "https://place-hold.it/300x300/#fffff", alt: "" },
          ]}
          cta="View more"
          href="/portfolio"
        />
      </main>
    </>
  );
}
