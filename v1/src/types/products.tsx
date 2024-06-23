export type Product = {
  title: string;
  description: string;
  thumbnail: string;
  images: string[];
  href: string;
  slug?: string;
  stack?: string[];
  live?: boolean;
  content?: React.ReactNode | string;
};
