import { countryBlockingContent } from "./countryBlockingContent";
import { hydrogenMerchantCenterDomainSetup } from "./hydrogenMerchantCenter";
import { inheritingClientCodebase } from "./inheritingClientCodebase";

export const PROJECTS = {
  meta: {
    title: "Projects & Case Studies | The Portfoleyo Development & Solutions",
    description:
      "Short case studies from recent client work, covering practical website improvements like SEO, performance, UX fixes, and technical support for growing brands.",
  },
  banner: {
    title: "Projects Completed",
    subtitle: "A collection of recent case studies",
    description:
      "Short, practical case studies from recent client work. If you’re looking for straightforward, high-quality support for your website, these examples will give you a feel for how I work and the results I focus on.",
  },
  all: [
    inheritingClientCodebase,
    hydrogenMerchantCenterDomainSetup,
    countryBlockingContent,
  ],
};
