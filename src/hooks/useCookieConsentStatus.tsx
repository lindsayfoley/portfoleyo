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
  const [hasCookieConsent, setHasCookieConsent] = useState(false);

  useEffect(() => {
    if (window?.cookieyes) {
      if (window.cookieyes.consent?.accepted?.includes(cookieValue)) {
        setHasCookieConsent(true);
      }
    }

    const setCookieConsentStatus = () => {
      if (!window?.cookieyes && !window?.getCkyConsent) {
        return;
      }

      const consent = window.getCkyConsent();

      if (consent.categories[cookieValue]) {
        setHasCookieConsent(true);
      }
    };

    document.addEventListener(
      COOKIE_YES_CONSENT_LISTENER,
      setCookieConsentStatus as EventListener
    );

    return () => {
      document.removeEventListener(
        COOKIE_YES_CONSENT_LISTENER,
        setCookieConsentStatus as EventListener
      );
    };
  }, [cookieValue]);

  return hasCookieConsent;
};

export default useCookieConsentStatus;
