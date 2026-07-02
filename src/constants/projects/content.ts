import { countryBlockingContent } from "./countryBlockingContent";
import { hydrogenMerchantCenterDomainSetup } from "./hydrogenMerchantCenter";
import { inheritingClientCodebase } from "./inheritingClientCodebase";
import { trackingGa4PurchasesHydrogen } from "./trackingGa4PurchasesHydrogen";

export const PROJECTS = {
  meta: {
    title: "Projects | Shopify Headless, React & SEO | The Portfoleyo",
    description:
      "Technical articles and real-world projects covering React, Shopify Headless, Technical SEO, AI search, performance optimisation and frontend development.",
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
