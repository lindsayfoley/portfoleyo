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
      src: "https://place-hold.it/400x300/#fffff",
      alt: "",
    },
    paragraphs: [
      "I take a direct, transparent, and efficient approach to web development — cutting out the complexity you often get with large teams. With 14 years of experience, including Senior and Principal Developer roles at major brands, I offer expert-level development with a personal, hands-on approach tailored to each business.",
      "Working directly means faster results—whether you’re launching new features, refining your site, or rolling out improvements. With more autonomy, changes can go live sooner, giving you greater flexibility to adapt and evolve your site as needed.",
    ],
  },
  featureTiles: {
    services: [
      {
        Icon: Development,
        title: "Ad Hoc or Long-Term Tech Partner",
        description:
          "Whether you need quick fixes, mew features, or ongoing support, I'll adapt to your business needs. Happy to work on an ad-hoc basis or as a long-term tech partner to provide the support you need",
      },
      {
        Icon: Award,
        title: "Structured, Transparent Workflow",
        description:
          "My projects are organised on Trello where tasks are outlined, priced upfront, prioritised, and updated in real time. This ensures transparency, so you always know what’s in progress and what’s coming next",
      },
      {
        Icon: Growth,
        title: "Website, App & Email Development",
        description:
          "From full site builds to optimisations, I specialise in modern, scalable web and app development. I also create high-performing email templates on platforms like Klaviyo, ensuring they align with your brand",
      },
    ],
  },
  gettingStarted: {
    twoColumn: {
      theme: colourTheme.highlight,
      title: "Getting Started",
      image: {
        src: "https://place-hold.it/400x460/#fffff",
        alt: "",
      },
      paragraphs: [
        "You can start working with me by bringing specific features or updates you need, or by opting for a comprehensive site audit to identify areas for improvement.",
      ],
    },
  },
};
