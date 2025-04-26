declare global {
  interface Window {
    cookieyes: {
      consent: {
        accepted?: string;
      };
    };
  }
}

export {};
