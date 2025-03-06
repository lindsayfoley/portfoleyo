import { colourTheme } from "@portfoleyo/shared/common";

export const PORTFOLIO_CONTENT = {
  meta: {
    title: "My Work at The Portfoleyo | Web Development & Portfolio",
    description:
      "See how I help brands build fast, accessible and scalable digital experiences. From custom development to performance optimisations, explore my completed work",
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
      href: "https://thefabledthread.com/",
      theme: colourTheme.highlight,
      image: {
        src: "/portfolio-the-fabled-thread.png",
        alt: "The homepage of The Fabled Thread site",
      },
    },
    description:
      "I support The Fabled Thread, known for its vibrant needlepoint kits, by refining their Shopify Oxygen site and Sanity CMS. Through ongoing full-stack development, I help maintain a scalable and high-performing platform.",
    workCompletedList: [
      "Performance: optimised image loading by refining Sanity parameters & assets",
      "SEO: added hreflang tags to boost international visibility & rankings",
      "Analytics: added Meta Pixel to improve visitor tracking and measure conversions",
      "CMS: built Sanity models, enabling editors to update content without dev input",
    ],
  },
  theMews: {
    twoColumn: {
      title: "The Mews Fabrics & Furnishings",
      href: "https://themewsfurnishings.com/",
      theme: colourTheme.highlight,
      image: {
        src: "/portfolio-the-mews.png",
        alt: "The homepage of The Mews Fabrics & Furnishings site",
      },
    },
    description:
      "I support The Mews Fabrics & Furnishings, a luxury fabric and homeware brand, by ensuring their Shopify store runs efficiently. Through ad-hoc development, I optimise performance, troubleshoot issues, and enhance functionality.",
    workCompletedList: [
      "SEO: audited and optimised meta titles and descriptions across the site",
      "User experience: fixed email signup discount code and corrected Klaviyo setup",
      "Health check: audited site speed, content structure, and accessibility",
    ],
  },
  lesterre: {
    twoColumn: {
      title: "L’Esterre Chocolate",
      href: "https://lesterrechocolate.com/",
      theme: colourTheme.highlight,
      image: {
        src: "/portfolio-lesterre.png",
        alt: "The homepage of L’Esterre Chocolates site",
      },
    },
    description:
      "I supported L’Esterre Chocolate, an artisan chocolatier, in strengthening their online presence by adding a press showcase carousel to highlight media coverage. I also conducted a deep-dive site audit to improve functionality and user experience.",
    workCompletedList: [
      "Press features: added “As Seen In” carousel to homepage, highlighting coverage",
      "Audit: conducted analysis to address technical, visibility, and usability gaps",
    ],
  },
  charlotteTilbury: {
    twoColumn: {
      title: "Charlotte Tilbury",
      href: "https://www.charlottetilbury.com/",
      theme: colourTheme.highlight,
      image: {
        src: "/portfolio-charlotte-tilbury.png",
        alt: "The homepage of the Charlotte Tilbury site",
      },
    },
    description:
      "I had the pleasure of working with this renowned beauty brand, contributing across multiple squads to enhance SEO, optimise performance, and develop a scalable Design System that ensures consistency across their digital platform.",
    workCompletedList: [
      "Design system: developed reusable components for a brand new design system",
      "Live chat: reintegrated Zendesk, upgrading APIs to add live chat sitewide",
      "SEO: implemented advanced schema for products, reviews, blog posts and more",
      "Performance: fixed Storybook issues and upgraded it to improve maintainability",
    ],
  },
};
