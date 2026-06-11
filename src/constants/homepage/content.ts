import { colourTheme } from "@portfoleyo/shared/common";
import { Connection } from "@portfoleyo/assets/svgs/connection";
import { Fluidity } from "@portfoleyo/assets/svgs/fluidity";
import { Development } from "@portfoleyo/assets/svgs/development";
import { Growth } from "@portfoleyo/assets/svgs/growth";
import { Cog } from "@portfoleyo/assets/svgs/cog";
import { Inspiration } from "@portfoleyo/assets/svgs/inspiration";
import { Idea } from "@portfoleyo/assets/svgs/idea";
import { Award } from "@portfoleyo/assets/svgs/award";

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
    intro: "Technical Partner for Growing Brands",
    title: `<span>Solutions that <em>scale.</em><br />Results you can  <em>measure.</em></span></span>`,
    description:
      "I help ambitious brands improve and grow their digital experiences through thoughtful frontend development, technical problem solving and ongoing support. Whether it's refining an existing platform, launching something new or figuring out why something isn't working as it should, I work as a hands on partner focused on practical solutions that move the business forward.",
    cta: "Explore My Portfolio",
    link: "/portfolio",
    isH1Element: true,
    theme: colourTheme.highlight,
  },
  featureTilesSupportAreas: {
    title: "How I Can Help",
    subtitle: "Specialist support across the areas that matter most",
    services: [
      {
        Icon: Development,
        title: "Frontend Development",
      },
      {
        Icon: Connection,
        title: "Shopify & Ecommerce",
      },
      {
        Icon: Growth,
        title: "SEO & GEO Optimisation",
      },
      {
        Icon: Cog,
        title: "Performance & Web Vitals",
      },
      {
        Icon: Fluidity,
        title: "Accessibility & WCAG",
      },
      {
        Icon: Inspiration,
        title: "Analytics & Insights",
      },
      {
        Icon: Idea,
        title: "CMS & Content Management",
      },
      {
        Icon: Award,
        title: "Long-Term Partnership",
      },
    ],
  },
  featureTilesWork: {
    title: "Highlighted Projects",
    subtitle: "My most impactful projects",
    cta: "Explore project >",
    services: [
      {
        image: {
          src: "/hp-dcypher.jpg",
          alt: "The homepage of DCYPHER",
          useEagerLoading: true,
        },
        id: "dcypher",
        href: "/portfolio",
        title: "DCYPHER",
        description:
          "I work on this headless Shopify site, helping evolve a highly customised beauty platform built around personalisation and ongoing innovation.",
      },
      {
        image: {
          src: "/hp-the-fabled-thread.jpg",
          alt: "The homepage of The Fabled Thread",
          useEagerLoading: true,
        },
        id: "the-fabled-thread",
        href: "/portfolio",
        title: "THE FABLED THREAD",
        description:
          "I work closely with this independent retailer, improving performance, enhancing content flexibility and supporting long-term growth.",
      },
      {
        image: {
          src: "/hp-charlotte-tilbury.jpg",
          alt: "The homepage of Charlotte Tilbury",
          useEagerLoading: true,
        },
        id: "charlotte-tilbury",
        href: "/portfolio",
        title: "CHARLOTTE TILBURY",
        description:
          "I supported large-scale frontend initiatives across SEO, design systems and customer experience improvements within a global beauty brand.",
      },
    ],
  },
  featureTilesServices: {
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
