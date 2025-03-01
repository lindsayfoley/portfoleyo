import { device } from "@portfoleyo/components/showcase/showcase";
import { colourTheme } from "@portfoleyo/shared/common";

export const HOMEPAGE_CONTENT = {
  meta: {
    title: "The Portfoleyo | Expert Web Development & React Specialist",
    description:
      "Bespoke web development for independent brands. Expert in React, TypeScript, and modern frameworks, building fast, high-performing websites that drive results",
  },
  highlightBanner: {
    image: {
      src: "/laptop-open-site.jpg",
      alt: "",
    },
    intro: "Welcome to",
    title: "The Portfoleyo",
    description: [
      "I provide bespoke web and app development services, helping brands build fast, scalable, and high-performing sites without the complexity of an agency. Whether you need a new site, improvements to an existing platform, or ongoing tech support, I’ll craft a solution tailored to your goals.",
      "With over a decade of experience, I take a hands-on, collaborative approach, treating every project as if it were my own. Beyond writing code, I focus on optimising speed, accessibility, and UX to ensure long-term success. If you're looking for a reliable developer who genuinely cares about your business, let’s chat!",
    ],
    link: {
      href: "/about",
      cta: "My Story & Experience",
    },
    isH1Element: true,
    theme: colourTheme.highlight,
  },
  featureTiles: {
    title: "Featured services",
    subtitle: "How I Can Help",
    cta: "Learn more",
    services: [
      {
        image: {
          src: "/code.jpg",
          alt: "",
        },
        title: "Custom Development",
        description:
          "Have a vision for a site or app but need the right technical expertise or guidance? I can turn complex ideas into seamless, well-crafted builds",
        href: "/services",
      },
      {
        image: {
          src: "/keyboard-flat-white.jpg",
          alt: "",
        },
        title: "Performance & SEO Optimisation",
        description:
          "A great site needs more than just good looks – it has to be responsive, inclusive, and SEO-friendly to attract more customers and drive conversions",
        href: "/services",
      },
      {
        image: {
          src: "/shopify-dev.jpg",
          alt: "",
        },
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
    link: {
      href: "/about#contact",
      cta: "Contact",
    },
    theme: colourTheme.highlight,
  },
  showcase: {
    title: "View my recent work",
    subtitle: "My Portfolio",
    theme: colourTheme.muted,
    images: [
      {
        imageSrc: "/lesterrechocolate-recent-work.jpg",
        alt: "",
        href: "/portfolio",
      },
      {
        imageSrc: "/the-fabled-thread-recent-work.jpg",
        alt: "",
        deviceConstraint: device.desktop,
        href: "/portfolio",
      },
      {
        imageSrc: "/the-fabled-thread-recent-work-mobile.jpg",
        alt: "",
        deviceConstraint: device.mobile,
        href: "/portfolio",
      },
      { imageSrc: "/the-mews-recent-work.jpg", alt: "", href: "/portfolio" },
    ],
    link: {
      cta: "View more",
      href: "/portfolio",
    },
  },
};
