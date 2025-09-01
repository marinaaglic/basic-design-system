import { IButtonProps } from './Button.types';
import styles from './Button.module.scss';

export default function Button({
  color,
  type,
  size,
  icon,
  className,
  children,
  component = 'button',
  ...rest
}: IButtonProps) {
  const Tag = component;
  const buttonClass =
    `${styles[`${color}-${type}`]} ${styles[size]} ${className}`.trim();
  return (
    <Tag className={buttonClass} {...rest}>
      {children}
    </Tag>
  );
}
