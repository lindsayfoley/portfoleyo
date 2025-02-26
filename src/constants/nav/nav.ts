import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faSquareEnvelope,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import {
  EMAIL_ADDRESS,
  GITHUB_PROFILE,
  LINKEDIN_PROFILE,
  PORTFOLIO_SITE,
} from "../work/shared";

const LINKS = {
  homeLink: {
    cta: "Home",
    href: "/",
  },
  aboutLink: {
    cta: "About",
    href: "about",
  },
  workLink: {
    cta: "Work",
    href: "work",
  },
  servicesLink: {
    cta: "Services",
    href: "work",
  },
  portfolioLink: {
    cta: "Portfolio",
    href: "work#portfolio",
  },
  contactLink: {
    cta: "Contact",
    href: "about#contact",
  },
};

export const NAV_CONTENT = {
  headerNavContent: [
    LINKS.homeLink,
    LINKS.aboutLink,
    LINKS.workLink,
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
      icon: faBriefcase,
    },
  ],
};
