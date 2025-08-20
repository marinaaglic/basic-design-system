export type IconSize = 'sm' | 'md' | 'lg' | 'xlg' | 'xxlg' | 'xxxlg';

export interface IIconProps {
  size: IconSize;
  icon: React.ElementType;
  className?: string;
}
