import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faSquareEnvelope,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import {
  EMAIL_ADDRESS,
  GITHUB_PROFILE,
  LINKEDIN_PROFILE,
  PORTFOLIO_SITE,
} from "../shared";

const LINKS = {
  homeLink: {
    cta: "Home",
    href: "/",
  },
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
  homeHeaderNavContent: [
    LINKS.aboutLink,
    LINKS.servicesLink,
    LINKS.portfolioLink,
    LINKS.contactLink,
  ],
  aboutHeaderNavContent: [
    LINKS.homeLink,
    LINKS.servicesLink,
    LINKS.portfolioLink,
    LINKS.contactLink,
  ],
  servicesHeaderNavContent: [
    LINKS.homeLink,
    LINKS.aboutLink,
    LINKS.portfolioLink,
    LINKS.contactLink,
  ],
  portfolioHeaderNavContent: [
    LINKS.homeLink,
    LINKS.aboutLink,
    LINKS.servicesLink,
    LINKS.contactLink,
  ],
  footerNavContent: [
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
      title: "View my Github",
      href: GITHUB_PROFILE,
      target: "_blank",
      icon: faGithub,
    },
    {
      title: "Send me an email",
      href: EMAIL_ADDRESS,
      target: "",
      icon: faSquareEnvelope,
    },
    {
      title: "View my personal portfolio site",
      href: PORTFOLIO_SITE,
      target: "_blank",
      icon: faLaptopCode,
    },
  ],
};
