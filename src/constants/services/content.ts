import { Connection } from "@portfoleyo/assets/svgs/connection";
import { Fluidity } from "@portfoleyo/assets/svgs/fluidity";
import { Progression } from "@portfoleyo/assets/svgs/progression";
import { colourTheme } from "@portfoleyo/shared/common";

export const SERVICES_CONTENT = {
  meta: {
    title: "Work at The Portfoleyo | Web Development & Portfolio",
    description:
      "See how I help brands build fast, accessible and scalable digital experiences. From custom development to performance optimisations, explore my work + services",
  },
  sectionTitle: {
    title: "Services at The Portfoleyo",
    subtitle: "Why work with me",
    isH1Element: true,
  },
  twoColumn: {
    image: {
      src: "https://place-hold.it/400x280/#fffff",
      alt: "",
    },
    paragraphs: [
      "I keep development simple, efficient, and tailored to what your business actually needs—without unnecessary complexity. With experience as a Senior and Principal Developer for major brands, I bring expert-level development with a hands-on approach, ensuring projects move smoothly and deliver real impact.",
      "Working together means faster turnaround times—whether you’re launching new features, refining your site, or rolling out improvements. With more autonomy, updates go live sooner, giving you the flexibility to adapt and evolve as needed.",
    ],
  },
  featureTiles: {
    title: "Ways of working together",
    subtitle: "Efficient, flexible, transparent",
    theme: colourTheme.muted,
    services: [
      {
        Icon: Progression,
        title: "Ad Hoc or Ongoing Tech Support",
        description:
          "Need quick fixes, feature updates, or ongoing development? I offer flexible support—ad hoc or long-term—to fit  business needs",
      },
      {
        Icon: Fluidity,
        title: "Structured Workflow",
        description:
          "Projects and tasks are organised on a shared board with upfront pricing, priorities, and real-time updates, keeping things transparent",
      },
      {
        Icon: Connection,
        title: "Web, App & Email Development",
        description:
          "I build modern, scalable sites and apps, plus customisable email templates for platforms like Klaviyo, ensuring alignment with style guides",
      },
    ],
  },
  gettingStarted: {
    twoColumn: {
      theme: colourTheme.highlight,
      title: "Getting Started",
      subtitle: "Clear Process, Transparent Pricing",
      image: {
        src: "https://place-hold.it/400x480/#fffff",
        alt: "",
      },
      paragraphs: [
        "Whether you're looking for development support or need an in-depth site audit, I follow a straightforward process to ensure clarity and efficiency.",
      ],
    },
  },
};
