import { colourTheme } from "@portfoleyo/shared/common";

export const PORTFOLIO_CONTENT = {
  meta: {
    title: "Work Portfolio | The Portfoleyo Development & Solutions",
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
  dcypher: {
    twoColumn: {
      title: "Dcypher",
      href: "https://dcypher.com/",
      theme: colourTheme.highlight,
      image: {
        src: "/portfolio-dcypher.png",
        alt: "The homepage of the DCYPHER site",
      },
    },
    description:
      "I’m currently contracting for DCYPHER, a tech-led beauty brand that uses AI to match customers to their ideal foundation shade. I work on their headless Shopify site built with Hydrogen and React, focusing on bug fixes, improving tracking accuracy and SEO, and rolling out new features across the frontend.",
    workCompletedList: [
      "Launches: rolled out Primer with an updated homepage, PLP and PDPs",
      "SEO: added canonical tags and surfaced key content in the DOM for crawlers",
      "Analytics: audited and fixed issues with Meta Pixel and client-side tracking",
      "Bug fixes: resolved issues across navigation, carousels and PDP accordions",
      "Refinements: improved HTML structure, performance, and accessibility",
    ],
  },
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
      "I support The Fabled Thread, known for its vibrant needlepoint kits, by refining their Shopify Oxygen site and Sanity CMS. Using React and TypeScript, I provide ongoing full-stack development to maintain a scalable and high-performing platform.",
    workCompletedList: [
      "Engagement: Enabled blog comments to foster community and discussion",
      "Performance: optimised image loading by refining Sanity parameters & assets",
      "SEO: added hreflang tags to boost international visibility & rankings",
      "Analytics: added Meta Pixel to improve visitor tracking and measure conversions",
      "CMS: built Sanity models, enabling editors to update content without dev input",
    ],
  },
  stringNix: {
    twoColumn: {
      title: "StringNix",
      href: "https://www.stringnix.com/",
      theme: colourTheme.highlight,
      image: {
        src: "/portfolio-stringnix.png",
        alt: "The homepage of the StringNix site",
      },
    },
    description:
      "I provide ongoing support to StringNix, a recently launched underwear startup focused on comfort and simplicity. My work includes performance improvements, UI fixes and supporting bundled purchases to encourage multi-item orders.",
    workCompletedList: [
      "Localisation: supported with currency and regional setup across global markets",
      "Bundles: integrated, setup and styled discount bundles across all PDPs",
      "Analytics: tested and verified GA and GSC configuration and tracking",
      "SEO: flagged and advised on duplicate collection content across the site",
    ],
  },
  theVaHouse: {
    twoColumn: {
      title: "The VA House",
      href: "https://vahouse.co.uk/",
      theme: colourTheme.highlight,
      image: {
        src: "/portfolio-va-house.png",
        alt: "The homepage of The VA House site",
      },
    },
    description:
      "I worked with The VA House, a consultancy supporting businesses with executive-level virtual assistance, to refine their WordPress site for better SEO, accessibility, and usability. I conducted a site audit and implemented fixes across visual hierarchy, metadata, navigation, and performance.",
    workCompletedList: [
      "Accessibility: improved contrast, added alt text and fixed heading hierarchy",
      "SEO: reviewed and optimised meta titles and descriptions site wide",
      "UX: fixed bugs with navigation highlighting and in-page anchor behaviour",
      "Performance: optimised large image assets across the site to reduce load times",
    ],
  },
  storyStudios: {
    twoColumn: {
      title: "Story Studios",
      href: "https://hellostorystudios.com",
      theme: colourTheme.highlight,
      image: {
        src: "/portfolio-story-studios.png",
        alt: "The homepage of the Story Studios site",
      },
    },
    description:
      "I helped Story Studios, a boutique communications consultancy, refine and extend their site build. I implemented custom styles, optimised accessibility and mobile layout, and advised on email forwarding options to support a professional launch.",
    workCompletedList: [
      "Styling: added and adjusted custom spacing, layout and typography",
      "Accessibility: ensured semantic heading levels, contrast and keyboard navigation",
      "Mobile: fine-tuned layout and imagery for smaller screens",
      "CMS prep: structured pages with placeholders to support phased content rollout",
    ],
  },
  duvetHog: {
    twoColumn: {
      title: "Duvet Hog",
      href: "https://www.duvethog.co.uk/",
      theme: colourTheme.highlight,
      image: {
        src: "/portfolio-duvet-hog.png",
        alt: "The homepage of the Duvet Hog site",
      },
    },
    description:
      "I worked with Duvet Hog, a sustainable bedding brand on Shopify, to review theme upgrades, improve site functionality and prepare for the launch of new features. My work included auditing the site for design consistency, enhancing compliance on signup forms and scoping the addition of award and accreditations to build trust.",
    workCompletedList: [
      "Theme audit: reviewed layout, navigation and design for UI consistency",
      "Compliance: updated email signup forms for GDPR and marketing best practices",
      "Awards & trust: scoped integration of accreditations and award logos across site",
    ],
  },
  elyse: {
    twoColumn: {
      title: "Elyse",
      href: "https://www.elyseandme.com",
      theme: colourTheme.highlight,
      image: {
        src: "/portfolio-elyse.png",
        alt: "The homepage of the Elyse site",
      },
    },
    description:
      "I collaborated with Elyse, a brand focused on essential oil blends and holistic wellbeing, to enhance their Squarespace homepage with content-led features designed to build trust and boost engagement.",
    workCompletedList: [
      "Press features: added a carousel of press logos to highlight media coverage",
      "Engagement: integrated Instagram feed to showcase social content",
      "Accessibility: audited site and identified improvements for inclusive design",
    ],
  },

  jpsOriginals: {
    twoColumn: {
      title: "JP's Originals",
      href: "https://jpsoriginals.com/",
      theme: colourTheme.highlight,
      image: {
        src: "/portfolio-jps-originals.png",
        alt: "The homepage of JP's Originals site",
      },
    },
    description:
      "I work with JP’s Originals, a wellness-focused tea brand on Shopify, providing ongoing ad-hoc development support across areas like accessibility, SEO, UI enhancements, and technical scoping for growth opportunities.",
    workCompletedList: [
      "UI: improved navigation contrast and semantic HTML for better accessibility",
      "UX: highlighted key CTAs on PDPs and checkout pages to guide user journeys",
      "SEO: refined meta titles and descriptions to improve search visibility",
      "Upsells: scoped ClickFunnels integration for upsells and subscriptions",
    ],
  },
  chloeJonason: {
    twoColumn: {
      title: "Chloe Jonason Interiors",
      href: "https://www.chloejonasoninteriors.com/collections/chik-blinds/products/chik-blinds-coloured",
      theme: colourTheme.highlight,
      image: {
        src: "/portfolio-chloe-jonason.png",
        alt: "The homepage of Chloe Jonason Interiors site",
      },
    },
    description:
      "I partnered with Chloe Jonason Interiors, a boutique homeware brand that wanted to automate selling bespoke products. By refining the online experience, I helped streamline the shopping process for customers purchasing bespoke blinds.",
    workCompletedList: [
      "E-commerce: implemented online purchasing for made-to-measure blinds",
      "Scalability: provided a guide to help the team expand bespoke product listings",
      "Optimisation: reviewed technical setup, discoverability, and ease of use",
    ],
  },
  vinito: {
    twoColumn: {
      title: "Vinito",
      href: "https://www.drinkvinito.com/",
      theme: colourTheme.highlight,
      image: {
        src: "/portfolio-vinito.png",
        alt: "The homepage of Vinito's site",
      },
    },
    description:
      "I worked with Vinito, a rebranded evolution of Brixton Wine Club, to create a customised product page that provides a richer and more informative shopping experience than standard Shopify templates allow.",
    workCompletedList: [
      "PDP: designed a custom layout to maximise the presentation of product details",
      "Content UX: added a toggle to improve readability for detailed descriptions",
      "New components: built a reusable grid to showcase tasting notes and highlights",
      "Profile: integrated sliders powered by metafields to visualise key attributes",
      "Specs: developed a comprehensive specs table for detailed product information",
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
      "I supported The Mews Fabrics & Furnishings, a luxury fabric and homeware brand, by optimising their Shopify store’s performance and functionality. This included troubleshooting issues and implementing fixes to improve SEO and UX.",
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
      "I worked with L’Esterre Chocolate to enhance their online presence by refining the site’s design, layout, and messaging. My updates focused on polishing the visual identity, improving UX and adding features that elevated the brand’s premium feel.",
    workCompletedList: [
      "Press features: added “As Seen In” carousel to homepage, highlighting coverage",
      "Accreditation: built rotating logo bar to highlight awards and partners",
      "Compliance: integrated GDPR-compliant cookie consent banner",
      "SEO: rewrote homepage metadata and optimised press and product pages",
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
      "I had the pleasure of working with this renowned beauty brand, contributing across multiple squads to enhance SEO, optimise performance, and build a robust React-based Design System that ensures consistency across their digital platform.",
    workCompletedList: [
      "Design system: developed reusable components for a brand new design system",
      "Live chat: reintegrated Zendesk, upgrading APIs to add live chat sitewide",
      "SEO: implemented advanced schema for products, reviews, blog posts and more",
      "Performance: fixed Storybook issues and upgraded it to improve maintainability",
    ],
  },
};
