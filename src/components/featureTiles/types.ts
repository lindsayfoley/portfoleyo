import { ElementType } from "react";
import { Theme } from "@portfoleyo/shared/common";

export interface FeatureTilesProps {
  title?: string;
  subtitle?: string;
  services: {
    id?: string;
    label?: string;
    image?: {
      src: string;
      alt: string;
    };
    Icon?: ElementType;
    title: string;
    description: string;
    href?: string;
  }[];
  cta?: string;
  theme?: Theme;
  hasTimeline?: boolean;
  isIndependantSection?: boolean;
}
