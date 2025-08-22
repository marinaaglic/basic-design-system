export type ButtonColor = 'primary' | 'secondary';
export type ButtonType = 'default' | 'transparent';
export type ButtonSize = 'medium' | 'small';
export type ButtonIconPosition = 'left' | 'right' | 'none';
export type ButtonComponent = 'a' | 'button';

export interface IButtonProps extends React.HTMLAttributes<HTMLElement> {
  color: ButtonColor;
  type: ButtonType;
  size: ButtonSize;
  icon?: ButtonIconPosition;
  className?: string;
  children: React.ReactNode;
  component?: ButtonComponent;
}
