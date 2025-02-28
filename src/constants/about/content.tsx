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
      "I offer tailored, approachable, and cost-effective development services without the complexity of large agencies. As your single point of contact, I simplify the process—removing unnecessary layers, providing clear cost estimates, and ensuring fast, efficient collaboration.",
    isTitleFirst: true,
    isH1Element: true,
  },
  sectionTitle: {
    title: "About Me",
  },
  twoColumn: {
    image: {
      src: "https://place-hold.it/400x400/#fffff",
      alt: "",
    },
    paragraphs: [
      "I’m Lindsay Foley, a developer, consultant, and founder of The Portfoleyo. My journey into development began in 2011 while working at Anya Hindmarch as a Web Assistant. One day, our email developer vanished, and suddenly, it was on me to figure things out! With no experience, I somehow Frankensteined together that week’s marketing email. That moment sparked my love for problem-solving with code, and from there, I became obsessed with learning how to do things the right way. That curiosity turned into a passion, and I’ve been building ever since!",
      "Before moving into contracting, I worked in permanent roles for brands like Selfridges, Disney, Charlotte Tilbury, and BT—contributing to everything from development and UX improvements to large-scale platform upgrades and design system architecture. Along the way, I built a track record of delivering impactful solutions — here are a few key moments from my journey: ",
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
      subtitle: "Ways to connect",
      description: [
        "If everything you’ve seen here sounds helpful, I’d love to hear from you!",
        "Whether you have a project in mind, need development support, or just want to chat about how I can help, feel free to reach out:",
      ],
      theme: colourTheme.muted,
    },
  },
};
