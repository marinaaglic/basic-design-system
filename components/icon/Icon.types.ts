export type IconSize = 'sm' | 'md' | 'lg' | 'xlg' | 'xxlg' | 'xxxlg';

export type IconType = 'search' | 'dark' | 'light' | 'close' | 'arrow-right';

export interface IIconProps {
  size: IconSize;
  type: IconType;
  children: React.ReactNode;
  className?: string;
}
