export type ButtonColor = 'primary' | 'secondary';
export type ButtonType = 'default' | 'transparent';
export type ButtonSize = 'medium' | 'small';
export type ButtonComponent = 'a' | 'button';

export interface IButtonProps extends React.HTMLAttributes<HTMLElement> {
  variant: ButtonColor;
  type: ButtonType;
  size: ButtonSize;
  component?: ButtonComponent;
  disabled?: boolean;
}
