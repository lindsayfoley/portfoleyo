import { Connection } from "@portfoleyo/assets/svgs/connection";
import { Fluidity } from "@portfoleyo/assets/svgs/fluidity";
import { Progression } from "@portfoleyo/assets/svgs/progression";
import { colourTheme } from "@portfoleyo/shared/common";
import {
  faComments,
  faArrowRight,
  faHammer,
  faMagnifyingGlassChart,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";

export const SERVICES_CONTENT = {
  meta: {
    title: "Services | React, Shopify & Technical SEO | The Portfoleyo",
    description:
      "React, Shopify & Technical SEO services tailored to your business. From custom development and headless commerce to performance, accessibility & AI optimisation",
  },
  banner: {
    title: "Services Offered",
    subtitle: "Why work with me",
    description:
      "With experience as a Senior and Principal Developer for industry-leading companies, I bring expert level development with a hands on approach, ensuring projects move smoothly and deliver real impact.",
    isTitleFirst: true,
    isH1Element: true,
  },
  twoColumnDevelopment: {
    id: "development",
    title: "Custom Development",
    subtitle: "Tailored to your business",
    image: {
      src: "/services-custom-dev-code.jpg",
      alt: "An iMac running Visual Studio Code",
      useEagerLoading: true,
    },
    paragraphs: [
      "Not every solution works straight out of the box. I build custom sites and apps, or refine what’s already there - so they fit your needs and work exactly how you want.",
    ],
    list: [
      "Custom development: building sites and apps from scratch with modern tech",
      "Bespoke functionality: custom features to enhance UX and streamline workflows",
      "Bug fixes & improvements: ensuring smooth performance and clean code",
      "Email development: creating tailored responsive, cross-client email templates",
    ],
  },
  twoColumnSeo: {
    id: "optimisation",
    title: "Performance, SEO & GEO Optimisation",
    subtitle: "Optimised for search, AI and users",
    image: {
      src: "/services-performance-seo-optimised.jpg",
      alt: "A laptop with images of graphs in front of a pin board with SEO notes",
    },
    paragraphs: [
      "Site speed and visibility influence how customers find and experience your brand. I focus on performance, SEO and GEO to keep you discoverable across search and AI.",
    ],
    list: [
      "Site speed: improving performance, reducing load times, enabling lazy loading",
      "SEO & GEO: optimising metadata, structured data and AI discoverability",
      "Accessibility: ensuring WCAG compliance for an inclusive, user-friendly site",
      "Site audit: assessing issues affecting discoverability, usability & responsiveness",
    ],
  },
  twoColumnEcom: {
    id: "ecommerce",
    title: "E-Commerce & Shopify Solutions",
    subtitle: "For efficiency and growth",
    image: {
      src: "/services-e-com.jpg",
      alt: "A desktop scene with a phone showing a Shopify theme template wireframe",
    },
    paragraphs: [
      "An online store should be fast, easy to navigate, and built for conversions. I optimise stores for better performance and UX covering Shopify, Squarespace and more.",
    ],
    list: [
      "Store customisation: editing themes and sections tailored to your brand",
      "Analytics implementation: setting up tracking for insights, and performance",
      "Feature integration: adding custom filters, checkout upgrades, and automation",
      "App integrations: connecting popular tools like Klaviyo and Sanity for automation",
    ],
  },
  featureTiles: {
    title: "How I Work",
    subtitle: "Efficient, flexible & transparent",
    theme: colourTheme.muted,
    services: [
      {
        Icon: Progression,
        title: "Ad Hoc & Ongoing Support",
        description:
          "Need urgent fixes, new features, or ongoing development? I offer flexible support: ad hoc or long-term, to fit your business needs",
      },
      {
        Icon: Fluidity,
        title: "Structured Workflow",
        description:
          "Tasks are organised on a shared board with upfront pricing, priorities, and real-time updates, keeping things transparent",
      },
      {
        Icon: Connection,
        title: "Web, App & Email Services",
        description:
          "I build modern, scalable sites and apps, plus email templates for tools like Klaviyo, ensuring alignment with style guides",
      },
    ],
  },
  gettingStarted: {
    banner: {
      theme: colourTheme.highlight,
      title: "Getting Started",
      subtitle: "Simple Process, Clear Pricing",
      description:
        "Whether you need development support or a site audit, I keep things straightforward:",
    },
    list: [
      {
        title: "1. Consultation",
        text: "Discuss your goals",
        icon: faComments,
      },
      {
        title: "2. Workflow",
        text: "Create tasks with pricing",
        icon: faListCheck,
      },
      {
        title: "3. Implementation",
        text: "Begin work on tasks",
        icon: faHammer,
      },
      {
        title: "4. Review",
        text: "Conduct an in-depth site audit",
        icon: faMagnifyingGlassChart,
      },
      {
        title: "5. Next Steps",
        text: "Choose audit tasks to do",
        icon: faArrowRight,
      },
    ],
  },
};
