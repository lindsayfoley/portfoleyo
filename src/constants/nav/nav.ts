import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faSquareEnvelope,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

export const NAV_CONTENT = {
  links: [
    {
      cta: "Home",
      href: "/",
    },
    {
      cta: "About",
      href: "/about",
    },
    {
      cta: "Services",
      href: "/work",
    },
    {
      cta: "Portfolio",
      href: "/work#portfolio",
    },
    {
      cta: "Contact",
      href: "/about#contact",
    },
  ],
  icons: [
    {
      title: "View my LinkedIn profile",
      href: "https://www.linkedin.com/in/lindsay-foley-9a193534/",
      target: "_blank",
      icon: faLinkedin,
    },
    {
      title: "View my Github",
      href: "https://github.com/lindsayfoley",
      target: "_blank",
      icon: faGithub,
    },
    {
      title: "Send me an email",
      href: "mailto:hello@theportfoleyo.com",
      target: "",
      icon: faSquareEnvelope,
    },
    {
      title: "View my personal portfolio site",
      href: "https://lindsayfoley.co.uk/",
      target: "_blank",
      icon: faBriefcase,
    },
  ],
};
