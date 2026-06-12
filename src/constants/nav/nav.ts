import {
  faGithub,
  faSquareInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faSquareEnvelope,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import {
  EMAIL_ADDRESS,
  GITHUB_PROFILE,
  INSTAGRAM_PROFILE,
  LINKEDIN_PROFILE,
  PORTFOLIO_SITE,
} from "../shared";

const LINKS = {
  about: {
    cta: "About",
    href: "/about",
  },
  services: {
    cta: "Services",
    href: "/services",
  },
  portfolio: {
    cta: "Portfolio",
    href: "/portfolio",
  },
  contact: {
    cta: "Contact",
    href: "/about#contact",
  },
  projects: {
    cta: "Projects",
    href: "/projects",
  },
};

export const NAV_CONTENT = {
  links: [LINKS.services, LINKS.portfolio, LINKS.about, LINKS.projects],
  icons: [
    {
      title: "View my LinkedIn profile",
      href: LINKEDIN_PROFILE,
      target: "_blank",
      icon: faLinkedin,
    },
    {
      title: "View my Instgram",
      href: INSTAGRAM_PROFILE,
      target: "_blank",
      icon: faSquareInstagram,
    },
    {
      title: "Send me an email",
      href: `mailto:${EMAIL_ADDRESS}`,
      target: "",
      icon: faSquareEnvelope,
    },
    {
      title: "View my Github",
      href: GITHUB_PROFILE,
      target: "_blank",
      icon: faGithub,
    },
    {
      title: "View my personal portfolio site",
      href: PORTFOLIO_SITE,
      target: "_blank",
      icon: faLaptopCode,
    },
  ],
};
