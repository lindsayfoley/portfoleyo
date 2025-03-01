import { Award } from "@portfoleyo/assets/svgs/award";
import { Development } from "@portfoleyo/assets/svgs/development";
import { Growth } from "@portfoleyo/assets/svgs/growth";
import { colourTheme } from "@portfoleyo/shared/common";

export const SERVICES_CONTENT = {
  meta: {
    title: "Work at The Portfoleyo | Web Development & Portfolio",
    description:
      "See how I help brands build fast, accessible and scalable digital experiences. From custom development to performance optimisations, explore my work + services",
  },
  sectionTitle: {
    title: "Services at The Portfoleyo",
    subtitle: "How I can help",
    isH1Element: true,
  },
  twoColumn: {
    image: {
      src: "https://place-hold.it/400x290/#fffff",
      alt: "",
    },
    paragraphs: [
      "I take a direct, transparent approach to development—removing the complexity that often comes with large teams. With almost 15 years of experience, including Senior and Principal Developer roles at major brands, I offer expert-level development with a hands-on, tailored approach.",
      "Working together means faster turnaround times—whether you’re launching new features, refining your site, or rolling out improvements. With more autonomy, updates go live sooner, giving you the flexibility to adapt and evolve as needed.",
    ],
  },
  featureTiles: {
    services: [
      {
        Icon: Development,
        title: "Ad Hoc or Ongoing Tech Support",
        description:
          "Need quick fixes, feature updates, or ongoing development? I offer flexible support—ad hoc or long-term—to fit your business needs",
      },
      {
        Icon: Award,
        title: "Structured Workflow",
        description:
          "Projects and tasks are organised on a shared Trello board with upfront pricing, priorities, and real-time updates, keeping everything transparent ",
      },
      {
        Icon: Growth,
        title: "Web, App & Email Development",
        description:
          "I build modern, scalable sites and apps, plus customisable email templates on platforms like Klaviyo, ensuring they align with your brand",
      },
    ],
  },
  gettingStarted: {
    twoColumn: {
      theme: colourTheme.highlight,
      title: "Getting Started",
      subtitle: "Audit, improve, or build ",
      image: {
        src: "https://place-hold.it/400x480/#fffff",
        alt: "",
      },
      paragraphs: [
        "Whether you have specific features in mind or need a full site audit to uncover opportunities for improvement, we can start where it makes the most sense for you.",
      ],
    },
  },
};
