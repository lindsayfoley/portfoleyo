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
  aboutLink: {
    cta: "About",
    href: "about",
  },
  servicesLink: {
    cta: "Services",
    href: "services",
  },
  portfolioLink: {
    cta: "Portfolio",
    href: "portfolio",
  },
  contactLink: {
    cta: "Contact",
    href: "about#contact",
  },
};

export const NAV_CONTENT = {
  links: [
    LINKS.aboutLink,
    LINKS.servicesLink,
    LINKS.portfolioLink,
    LINKS.contactLink,
  ],
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
