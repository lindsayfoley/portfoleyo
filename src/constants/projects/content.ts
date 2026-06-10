import { countryBlockingContent } from "./countryBlockingContent";
import { hydrogenMerchantCenterDomainSetup } from "./hydrogenMerchantCenter";
import { inheritingClientCodebase } from "./inheritingClientCodebase";
import { trackingGa4PurchasesHydrogen } from "./trackingGa4PurchasesHydrogen";

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
      "Short, practical case studies from recent client work. Covering everything from Shopify Hydrogen and Google Merchant Center through to Cloudflare security and inheriting existing codebases.",
  },
  all: [
    inheritingClientCodebase,
    trackingGa4PurchasesHydrogen,
    hydrogenMerchantCenterDomainSetup,
    countryBlockingContent,
  ],
};
