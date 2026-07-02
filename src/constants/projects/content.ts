import { countryBlockingContent } from "./countryBlockingContent";
import { hydrogenMerchantCenterDomainSetup } from "./hydrogenMerchantCenter";
import { inheritingClientCodebase } from "./inheritingClientCodebase";
import { preparingForAiSearch } from "./preparingForAiSearch";
import { trackingGa4PurchasesHydrogen } from "./trackingGa4PurchasesHydrogen";

export const PROJECTS = {
  meta: {
    title: "Projects | Shopify Headless, React & SEO | The Portfoleyo",
    description:
      "Technical articles and real-world projects covering React, Shopify Headless, Technical SEO, AI search, performance optimisation and frontend development.",
  },
  banner: {
    title: "Projects & Insights",
    subtitle: "Case studies, tech guides and practical write-ups",
    description:
      "Write-ups covering recent client work, technical investigations and modern frontend engineering. From Shopify Hydrogen and AI search through to Google Merchant Center, performance, accessibility and technical SEO.",
  },
  all: [
    preparingForAiSearch,
    inheritingClientCodebase,
    trackingGa4PurchasesHydrogen,
    hydrogenMerchantCenterDomainSetup,
    countryBlockingContent,
  ],
};
