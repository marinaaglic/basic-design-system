import { SVGProps } from 'react';

export type IconSize = 'sm' | 'md' | 'lg' | 'xlg' | 'xxlg' | 'xxxlg';

export interface IIconProps extends SVGProps<SVGSVGElement> {
  size: IconSize;
  children: React.ReactNode;
  className?: string;
}
