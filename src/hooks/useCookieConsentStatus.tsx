import { COOKIE_YES_CONSENT_LISTENER } from "@portfoleyo/constants/shared";
import { useEffect, useState } from "react";

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
    if (window?.cookieyes && window.cookieyes.consent) {
      if (window.cookieyes.consent.accepted?.includes(cookieValue)) {
        setHasCookieConsent(true);
      }
    }

    const setCookieConsentStatus = (eventData) => {
      const data = eventData?.detail;
      if (data?.accepted?.includes(cookieValue)) {
        setHasCookieConsent(true);
      }
    };

    document.addEventListener(
      COOKIE_YES_CONSENT_LISTENER,
      setCookieConsentStatus
    );

    return () => {
      document.removeEventListener(
        COOKIE_YES_CONSENT_LISTENER,
        setCookieConsentStatus
      );
    };
  }, [cookieValue]);

  return hasCookieConsent;
};

export default useCookieConsentStatus;
