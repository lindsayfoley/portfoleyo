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
    title: "About The Company",
    subtitle: "Background & ways to connect",
    description:
      "I provide tailored, cost-effective development services—without the complexity of large agencies. As your single point of contact, I streamline the process with clear pricing, efficient collaboration, and fewer barriers.",
    isTitleFirst: true,
    isH1Element: true,
  },
  sectionTitle: {
    title: "About Me",
    subtitle: "My Journey in Development",
  },
  twoColumn: {
    image: {
      src: "/about-me-lindsay-foley.jpg",
      alt: "The Portfoleyo founder, Lindsay Foley",
    },
    paragraphs: [
      "I’m Lindsay Foley, a developer, consultant, and founder of The Portfoleyo. My journey into development started in 2011 when I was unexpectedly tasked with coding my first HTML email! With no experience, I somehow managed to cobble it together — and in the process, discovered a love for problem-solving with code.",
      "Before going freelance, I worked in permanent roles for brands like Selfridges, Disney, Charlotte Tilbury, and BT—contributing to everything from development and UX, to large-scale platform upgrades and design system architecture.",
    ],
    theme: colourTheme.highlight,
  },
  featureTiles: {
    theme: colourTheme.highlight,
    services: [
      {
        label: "2011",
        Icon: Development,
        title: "First Steps into Development",
        description:
          "Started my career in e-commerce, working with website content and HTML emails — my first glimpse into the world of web development",
      },
      {
        label: "2021",
        Icon: Award,
        title: "Received BT Engineering Award",
        description:
          "I was recognised for my contributions as Principal Developer, enhancing UX by leading squads to develop new platform functionality",
      },
      {
        label: "2025",
        Icon: Growth,
        title: "Launched The Portfoleyo Site",
        description:
          "After two years of contracting, I officially launched The Portfoleyo, an independent development studio providing expert-led solutions",
      },
    ],
  },
  contact: {
    banner: {
      image: {
        src: "/contact-image-flat-lay.jpg",
        alt: "A phone, notepad and laptop on a desk",
      },
      title: "Get in Touch",
      subtitle: " Let’s build something great",
      description:
        "Whether you have a project in mind or just want to explore options, feel free to reach out:",
      theme: colourTheme.muted,
    },
  },
};
