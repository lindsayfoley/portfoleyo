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
      "I provide tailored, cost-effective development services - without the complexity of large agencies. As your single point of contact, I streamline the process with clear pricing, efficient collaboration, and fewer barriers.",
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
      "I’m Lindsay Foley, a developer, consultant, and founder of The Portfoleyo. My journey into development started in 2011 when I was unexpectedly tasked with coding my first HTML email! With no experience, I somehow managed to cobble it together - and in the process, discovered a love for problem-solving with code.",
      "Before going freelance, I worked in permanent roles for brands like Selfridges, Disney, Charlotte Tilbury, and BT, contributing to everything from development and UX, to large-scale platform upgrades and design system architecture.",
    ],
    theme: colourTheme.default,
  },
  featureTiles: {
    theme: colourTheme.default,
    services: [
      {
        label: "2011",
        Icon: Development,
        title: "First Steps into Development",
        description:
          "I started my career in ecommerce, creating site content and HTML emails - my first step into web development",
      },
      {
        label: "2021",
        Icon: Award,
        title: "Received BT Engineering Award",
        description:
          "Recognised for my impact as a Principal Developer, leading teams to deliver new functionality and improve UX",
      },
      {
        label: "2025",
        Icon: Growth,
        title: "Launched The Portfoleyo Site",
        description:
          "After two years of contracting, I launched The Portfoleyo to help growing brands solve technical challenges",
      },
    ],
  },
  contact: {
    banner: {
      image: {
        src: "/contact-image.jpg",
        alt: "A phone, notepad and laptop on a desk",
      },
      title: "Get in Touch",
      subtitle: " Let’s build something great",
      description:
        "Whether you have a project in mind or want to explore options, feel free to reach out:",
      theme: colourTheme.highlight,
    },
  },
};
