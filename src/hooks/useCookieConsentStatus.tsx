/* eslint-disable @typescript-eslint/no-explicit-any */
import { COOKIE_YES_CONSENT_LISTENER } from "@portfoleyo/constants/shared";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    cookieyes: any;
    getCkyConsent: any;
  }
}

export const cookieYesCategoryName = {
  analytics: "analytics",
  necessary: "necessary",
  accepted: "accepted",
  advertisement: "advertisement",
  functional: "functional",
  performance: "performance",
} as const;

type CookieYesCategoryNames = keyof typeof cookieYesCategoryName;

const useCookieConsentStatus = (cookieValue: CookieYesCategoryNames) => {
  const [hasCookieConsent, setHasCookieConsent] = useState<boolean>();

  useEffect(() => {
    const checkCookieConsentStatus = () => {
      if (!window?.getCkyConsent) {
        return;
      }

      const consent = window.getCkyConsent();

      if (consent.categories[cookieValue]) {
        setHasCookieConsent(true);
      } else {
        setHasCookieConsent(false);
      }
    };

    setTimeout(() => {
      // Added delay to ensure CookieYes functions are available
      checkCookieConsentStatus();
    }, 500);

    document.addEventListener(
      COOKIE_YES_CONSENT_LISTENER,
      checkCookieConsentStatus as EventListener
    );

    return () => {
      document.removeEventListener(
        COOKIE_YES_CONSENT_LISTENER,
        checkCookieConsentStatus as EventListener
      );
    };
  }, [cookieValue]);

  return hasCookieConsent;
};

export default useCookieConsentStatus;
