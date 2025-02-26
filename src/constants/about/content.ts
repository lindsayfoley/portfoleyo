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
      "At The Portfoleyo, my goal is to provide tailored, approachable, and cost-effective development services for small and medium-sized businesses, cutting through the noise that often comes with larger agencies! As your single point of contact, I make the process more efficient and transparent by removing unnecessary layers, giving clear cost estimates, and ensuring a shorter feedback loop.",
    isTitleFirst: true,
    isH1Element: true,
  },
  sectionTitle: {
    title: "A Bit About Me",
  },
  twoColumn: {
    image: {
      src: "https://place-hold.it/400x450/#fffff",
      alt: "",
    },
    paragraphs: [
      "Hi, I’m Lindsay Foley, a developer, consultant, and founder of The Portfoleyo. My journey in web development began in 2011, when I was working at Anya Hindmarch as a Web Assistant. One day, our email developer disappeared, and suddenly, it was on me to figure things out. With no experience, I Frankensteined together an HTML email—somehow making it work! That experience made me realise how much I enjoyed problem-solving with code, and from there, I became obsessed with learning how to do things the right way. That curiosity turned into a passion, and I’ve been building ever since.",
      "Before moving into contracting, I worked in permanent roles for brands like Selfridges, Disney, Charlotte Tilbury, and BT, contributing to everything from frontend development and UX improvements to large-scale platform enhancements and design system architecture.",
      "If you’re curious about the technical side of what I do, you can check out my personal portfolio for a more in-depth breakdown of my skills, tools, and expertise.",
    ],
    theme: colourTheme.highlight,
  },
  featureTiles: {
    title: "Key Achievements",
    subtitle: "What I’m most proud of",
    useHighlightTheme: true,
    services: [
      {
        imageSrc: "https://place-hold.it/300x200/#fffff",
        alt: "",
        title: "Engineering Award at BT",
        description:
          "Recognised for my contributions as Principal Developer at BT, enhancing user experience through the development of new platform functionality",
      },
      {
        imageSrc: "https://place-hold.it/300x200/#fffff",
        alt: "",
        title: "Disney’s Mobile Holiday Platform",
        description:
          "Co-led development of a fully mobile-responsive site for Disney’s UK holiday platform, ensuring a seamless user experience across all devices",
      },
      {
        imageSrc: "https://place-hold.it/300x200/#fffff",
        alt: "",
        title: "Scaling The Portfoleyo",
        description:
          "Built The Portfoleyo into a trusted development partner, offering flexible, high-performing solutions that enable businesses to scale with confidence",
      },
    ],
    theme: colourTheme.muted,
  },
};
