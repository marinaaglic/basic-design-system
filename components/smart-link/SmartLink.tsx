'use client';

import Link from 'next/link';
import { SmartLinkType } from './SmartLink.types';

export default function SmartLink({
  href,
  children,
  className,
}: SmartLinkType) {
  const isExternalLink = href.startsWith('http');

  if (isExternalLink) {
    return (
      <a
        href={href}
        target="_blank"
        className={className}
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} passHref>
      <a target="_blank" className={className}>
        {children}
      </a>
    </Link>
  );
}
