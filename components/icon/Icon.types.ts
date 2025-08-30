export type IconSize = 'sm' | 'md' | 'lg' | 'xlg' | 'xxlg' | 'xxxlg';

export type IconType = 'search' | 'dark' | 'light' | 'close' | 'arrowRight';

export interface IIconProps {
  size: IconSize;
  type: IconType;
  className?: string;
}
