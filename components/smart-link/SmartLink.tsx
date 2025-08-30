import Link from 'next/link';
import { SmartLinkType } from './SmartLink.types';

export default function SmartLink({ href, children }: SmartLinkType) {
  const isExternalLink = href.startsWith('http');

  if (isExternalLink) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} passHref>
      <a target="_blank">{children}</a>
    </Link>
  );
}
