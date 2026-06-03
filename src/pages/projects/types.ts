export interface Project {
  meta: {
    title: string;
    description: string;
  };
  twoColumn: {
    title: string;
    href: string;
    image: {
      src: string;
      alt: string;
    };
  };
  title: string;
  intro: string;
  h1: string;
  subTitle: string;
  page: string[];
}
