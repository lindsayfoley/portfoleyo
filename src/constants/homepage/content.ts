import { colourTheme } from "@portfoleyo/shared/common";

export const HOMEPAGE_CONTENT = {
  meta: {
    title: "Expert Development | The Portfoleyo Development & Solutions",
    description:
      "Bespoke web development for independent brands. Expert in React, TypeScript, and modern frameworks, building fast, high-performing websites that drive results",
  },
  highlightBanner: {
    image: {
      src: "/hero-laptop-sketch.jpg",
      alt: "A desk scene with a iMac open on the Come Fly With Lindsay travel blog site",
      useEagerLoading: true,
      mediaCondition: {
        srcSet: "/hero-laptop-sketch.avif",
        media: "(min-width: 500px)",
      },
    },
    intro: "Senior Web Developer & Technical Partner",
    title: `<span>Solutions that <em>scale.</em><br />Results you can  <em>measure.</em></span></span>`,
    description:
      "I provide bespoke web development services for brands looking to improve performance, user experience and long-term maintainability. From Shopify and headless commerce through to SEO, accessibility and ongoing support, I work closely with clients to deliver practical solutions that support their goals.",
    cta: "My Story & Experience",
    link: "/about",
    isH1Element: true,
    theme: colourTheme.highlight,
  },
  featureTiles: {
    title: "Featured services",
    subtitle: "How I Can Help",
    cta: "Learn more >",
    services: [
      {
        image: {
          src: "/hp-custom-dev.jpg",
          alt: "Showing the different stages of Web Development from design to execution",
          useEagerLoading: true,
        },
        id: "development",
        title: "Custom Development",
        description:
          "Have a vision for a site or app but need the right technical expertise or guidance? I can turn complex ideas into seamless, well-crafted builds",
        href: "/services",
      },
      {
        image: {
          src: "/hp-web-performance-seo.jpg",
          alt: "A desk scene with laptop displaying graphs",
          useEagerLoading: true,
        },
        id: "optimisation",
        title: "Performance & SEO Optimisation",
        description:
          "A great site needs more than just good looks – it has to be responsive, inclusive, and SEO-friendly to attract more customers and drive conversions",
        href: "/services",
      },
      {
        image: {
          src: "/hp-shopify-wireframes.jpg",
          alt: "A phone showing a Shopify theme mockup on a browser",
          useEagerLoading: true,
        },
        id: "ecommerce",
        title: "E-Commerce & Shopify Solutions",
        description:
          "I enhance Shopify and e-commerce platforms by implementing new functionality, refining UX, and streamlining for efficiency and growth",
        href: "/services",
      },
    ],
  },
  banner: {
    title: "Let’s talk about your project",
    subtitle: "Work With Me",
    isTitleFirst: false,
    href: "/about#contact",
    cta: "Contact me",
    theme: colourTheme.highlight,
  },
  showcase: {
    title: "View my recent work",
    subtitle: "My Portfolio",
    theme: colourTheme.muted,
    images: [
      {
        src: "/lesterrechocolate-recent-work.jpg",
        alt: "Recent work I've completed for L'Esterre Chocolate",
        href: "/portfolio",
      },
      {
        src: "/the-fabled-thread-recent-work.jpg",
        alt: "Recent work I've completed for The Fabled Thread",
        href: "/portfolio",
        mediaCondition: {
          srcSet: "/the-fabled-thread-recent-work-wide.avif",
          media: "(min-width: 760px)",
        },
      },
      {
        src: "/dcypher-recent-work.jpg",
        alt: "Recent work I've completed for DCYPHER",
        href: "/portfolio",
      },
    ],
    cta: "View more",
    href: "/portfolio",
  },
};
