import { ReactNode, AnchorHTMLAttributes } from 'react';

export type SmartLinkType = {
  href: string;
  children: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;
