import { Award } from "@portfoleyo/assets/svgs/award";
import { Development } from "@portfoleyo/assets/svgs/development";
import { Growth } from "@portfoleyo/assets/svgs/growth";
import { colourTheme } from "@portfoleyo/shared/common";

export const ABOUT_CONTENT = {
  meta: {
    title: "About & Contact | The Portfoleyo Development & Solutions",
    description:
      "About my expertise in web development and how I help brands build high-performing sites. Get in touch to discuss your project and see how we can work together",
  },
  banner: {
    title: "About The Portfoleyo",
    subtitle: "Background & ways to connect",
    description:
      "I provide tailored, cost-effective development services—without the complexity of large agencies. As your single point of contact, I streamline the process with clear pricing, efficient collaboration, and fewer barriers.",
    isTitleFirst: true,
    isH1Element: true,
  },
  sectionTitle: {
    title: "About Me",
  },
  twoColumn: {
    image: {
      src: "https://place-hold.it/400x350/#fffff",
      alt: "",
    },
    paragraphs: [
      "I’m Lindsay Foley, a developer, consultant, and founder of The Portfoleyo. My journey into development started in 2011 when I was unexpectedly tasked with coding my first email. With no experience, I cobbled it together—and in the process, discovered a love for problem-solving with code. That curiosity turned into a passion, and I’ve been building ever since!",
      "Before moving into contracting, I worked in permanent roles for brands like Selfridges, Disney, Charlotte Tilbury, and BT—contributing to everything from development and UX improvements to large-scale platform upgrades and design system architecture. Along the way, I built a track record of delivering impactful solutions—here are a few key moments from my journey:",
    ],
    theme: colourTheme.highlight,
  },
  featureTiles: {
    theme: colourTheme.highlight,
    services: [
      {
        label: "2016",
        Icon: Development,
        title: "Made Disney Mobile Ready",
        description:
          "I co-led the development of a fully mobile-responsive site for all of Disney’s UK holiday platforms, ensuring a seamless user experience across all devices",
      },
      {
        label: "2021",
        Icon: Award,
        title: "Received Engineering Award at BT",
        description:
          "I was recognised for my contributions as Principal Developer, enhancing UX by leading squads to develop new platform functionality",
      },
      {
        label: "2023",
        Icon: Growth,
        title: "Launched The Portfoleyo",
        description:
          "I transitioned from full-time roles to launch The Portfoleyo, an independent development studio providing expert-led solutions",
      },
    ],
  },
  contact: {
    banner: {
      title: "Get in Touch",
      subtitle: "Let’s Chat About Your Project",
      description: [
        "If you think my expertise could be a good fit, I’d love to hear from you!",
        "Whether you need support, have a project in mind, or want to explore how we could work together, do reach out:",
      ],
      theme: colourTheme.muted,
    },
  },
};
