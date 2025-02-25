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
      "I’m Lindsay, a senior developer with over a decade of experience helping brands build fast, scalable, and high-performing sites. At The Portfoleyo, I provide bespoke web development services designed to give businesses the flexibility and expertise they need, without the overheads of a agency! Whether you need a new site or app, improvements to an existing platform, or ongoing tech support, I’ll work with you to create a solution that fits your goals.",
      "I take a hands-on, collaborative approach, treating every project as if it were my own. From technical problem-solving to enhancing user experience and site performance, I go beyond just writing code—I ensure your site is built to last, optimised for speed, accessibility, and growth. If you’re looking for a reliable, experienced developer who genuinely cares about your business, let’s chat!",
    ],
    link: {
      href: "/about",
      cta: "About",
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
          "Have ambitious plans for a site or app and need someone to bring it to life? I help turn ideas into performant, scalable and user-friendly solutions",
        href: "/services",
      },
      {
        image: {
          src: "/keyboard-flat-white.jpg",
          alt: "",
        },
        title: "Performance & SEO Optimisation",
        description:
          "A great site needs more than just good looks - it has to be fast, accessible, and SEO-optimised to reach more customers and drive maximum conversions",
        href: "/services",
      },
      {
        image: {
          src: "/shopify-dev.jpg",
          alt: "",
        },
        title: "E-Commerce & Shopify Solutions",
        description:
          "I can help optimise your e-commerce platform, improving UX, streamlining management, and delivering a fast, conversion-focused storefront",
        href: "/services",
      },
    ],
  },
  banner: {
    title: "Let’s talk about your project",
    subtitle: "Work With Me",
    isTitleFirst: false,
    link: {
      href: "/contact",
      cta: "Contact",
    },
    theme: colourTheme.highlight,
  },
  showcase: {
    title: "View my recent work",
    subtitle: "My Portfolio",
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
