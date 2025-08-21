export type ButtonColor = 'primary' | 'secondary';

export type ButtonType = 'default' | 'transparent';

export type ButtonState = 'default' | 'hover' | 'focus' | 'disabled';

export type ButtonComponent = 'a' | 'button';

export interface IButtonProps {
  color: ButtonColor;
  type: ButtonType;
  state: ButtonState;
  className?: string;
  component?: ButtonComponent;
}
