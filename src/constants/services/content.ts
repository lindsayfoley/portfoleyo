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
    title: "Services Offered | The Portfoleyo Development & Solutions",
    description:
      "Expert web and Shopify development tailored to your business. From custom builds to performance optimisation, SEO, and e-commerce solutions—get support now",
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
    title: "Custom Development",
    subtitle: "Tailored to your business",
    image: {
      src: "/services-custom-development.jpg",
      alt: "A laptop running Visual Studio Code",
    },
    paragraphs: [
      "Not every solution works straight out of the box. I build custom sites and apps—or refine what’s already there—so they fit your needs and work exactly how you want.",
    ],
  },
  customDevelopmentList: [
    "Custom development: building sites and apps from scratch with modern tech",
    "Bespoke functionality: custom features to enhance UX and streamline workflows",
    "Bug fixes & improvements: ensuring smooth performance and clean code",
    "Email development: creating tailored responsive, cross-client email templates",
  ],
  twoColumnSeo: {
    title: "Performance & SEO Optimisation",
    subtitle: "Better rankings and usability",
    image: {
      src: "/services-performance-seo.jpg",
      alt: "A notepad with a page about SEO",
    },
    paragraphs: [
      "Site speed and visibility impact conversions - I focus on performance tuning and technical SEO, ensuring your site runs efficiently while reaching the right audience.",
    ],
  },
  seoList: [
    "Site speed: improving performance, reducing load times, enabling lazy loading",
    "SEO review: optimising metadata, adding structured data, improving markup",
    "Accessibility: ensuring WCAG compliance for an inclusive, user-friendly site",
    "Site audit: assessing issues affecting discoverability, usability & responsiveness",
  ],
  twoColumnEcom: {
    title: "E-Commerce & Shopify Solutions",
    subtitle: "For efficiency and growth",
    image: {
      src: "/services-flat-lay-desk.jpg",
      alt: "A scene from a tidy desk setup",
    },
    paragraphs: [
      "An online store should be fast, easy to navigate, and built for conversions. I optimise stores for better performance and usability on Shopify and Squarespace.",
    ],
  },
  ecomList: [
    "Store customisation: editing themes and sections tailored to your brand",
    "Analytics implementation: setting up tracking for insights, and performance",
    "Feature integration: adding custom filters, checkout upgrades, and automation",
    "App integrations: connecting popular tools like Klaviyo and Sanity for automation",
  ],
  featureTiles: {
    title: "How I Work",
    subtitle: "Efficient, flexible & transparent",
    theme: colourTheme.muted,
    services: [
      {
        Icon: Progression,
        title: "Ad Hoc & Ongoing Support",
        description:
          "Need quick fixes, feature updates, or ongoing development? I offer flexible support: ad hoc or long-term, to fit your business needs",
      },
      {
        Icon: Fluidity,
        title: "Structured Workflow",
        description:
          "Projects and tasks are organised on a shared board with upfront pricing, priorities, and real-time updates, keeping things transparent",
      },
      {
        Icon: Connection,
        title: "Web, App & Email Services",
        description:
          "I build modern, scalable sites and apps, plus customisable email templates for tools like Klaviyo, ensuring alignment with style guides",
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
