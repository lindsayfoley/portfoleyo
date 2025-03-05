import { colourTheme } from "@portfoleyo/shared/common";
import {
  faHammer,
  faCalendarAlt,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

export const PORTFOLIO_CONTENT = {
  meta: {
    title: "Work at The Portfoleyo | Web Development & Portfolio",
    description:
      "See how I help brands build fast, accessible and scalable digital experiences. From custom development to performance optimisations, explore my work + services",
  },
  sectionTitle: {
    title: "Projects at The Portfoleyo",
    subtitle: "Development services & past projects",
    isH1Element: true,
  },
  banner: {
    title: "Recent Work",
    subtitle: "Real-world examples",
    description:
      "From building new sites and apps to enhancing existing platforms, I focus on creating smooth and user-friendly digital experiences. Here’s a look at some past projects I’ve worked on:",
    isTitleFirst: true,
    isH1Element: true,
  },
  checkmarkSectionTitle: "Key Updates:",
  theFabledThread: {
    twoColumn: {
      title: "The Fabled Thread",
      titleHref: "https://thefabledthread.com/",
      theme: colourTheme.highlight,
      image: {
        src: "/portfolio-the-fabled-thread.png",
        alt: "",
      },
    },
    list: [
      {
        text: "From August 2024 - present",
        icon: faCalendarAlt,
      },
      {
        text: "Remix, React, TypeScript, Shopify (Hydrogen), Sanity CMS",
        icon: faHammer,
      },
      {
        text: "I support The Fabled Thread on an ad-hoc basis, overseeing full-stack development across their Remix codebase, Shopify Oxygen, and Sanity CMS.",
        icon: faBriefcase,
      },
    ],
    workCompletedList: [
      "Performance: optimised image loading by refining Sanity parameters & assets",
      "SEO: added hreflang tags to boost international visibility & rankings",
      "CMS: built Sanity models, enabling editors to update content without dev input",
    ],
  },
  theMews: {
    twoColumn: {
      title: "The Mews Fabrics & Furnishings",
      titleHref: "https://themewsfurnishings.com/",
      theme: colourTheme.highlight,
      image: {
        src: "https://place-hold.it/400x300/#ffff",
        alt: "",
      },
    },
    list: [
      {
        text: "January 2025",
        icon: faCalendarAlt,
      },
      {
        text: "Shopify site",
        icon: faHammer,
      },
      {
        text: "I support The Mews Fabrics & Furnishings on an ad-hoc basis, handling site optimisations, resolving technical issues, and refining functionality.",
        icon: faBriefcase,
      },
    ],
    workCompletedList: [
      "SEO: audited and optimised meta titles and descriptions across the site",
      "User Experience: fixed email signup discount code and integrated Klaviyo",
    ],
  },
  lesterre: {
    twoColumn: {
      title: "L’Esterre Chocolate",
      titleHref: "https://lesterrechocolate.com/",
      theme: colourTheme.highlight,
      image: {
        src: "https://place-hold.it/400x300/#ffff",
        alt: "",
      },
    },
    list: [
      {
        text: "February 2025",
        icon: faCalendarAlt,
      },
      {
        text: "Shopify site",
        icon: faHammer,
      },
      {
        text: "I worked with L’Esterre Chocolate to enhance their homepage and boost credibility by implementing a press showcase carousel, alongside conducting a detailed site audit to identify improvements in performance, SEO, and UX.",
        icon: faBriefcase,
      },
    ],
    workCompletedList: [
      "Press Features: added “As Seen In” carousel to homepage, highlighting coverage",
    ],
  },
  charlotteTilbury: {
    twoColumn: {
      title: "Charlotte Tilbury",
      titleHref: "https://www.charlottetilbury.com/",
      theme: colourTheme.highlight,
      image: {
        src: "https://place-hold.it/400x300/#ffff",
        alt: "",
      },
    },
    list: [
      {
        text: "May 2023 - December 2024",
        icon: faCalendarAlt,
      },
      {
        text: "React, TypeScript, Next.js, Storybook, Contentful",
        icon: faHammer,
      },
      {
        text: "I optimised Charlotte Tilbury’s SEO, improved platform performance, and played a key role in shaping a new Design System to ensure sitewide consistency.",
        icon: faBriefcase,
      },
    ],
    workCompletedList: [
      "Design System: developed reusable components to standardise UI sitewide",
      "SEO: implemented schema markup for products, reviews, and blog posts",
      "Performance: upgraded Storybook to improve maintainability and security",
    ],
  },
};
