import { IButtonProps } from './Button.types';
import styles from './Button.module.scss';

export default function Button({
  variant,
  type,
  size,
  icon,
  children,
  component = 'a',
  ...rest
}: IButtonProps) {
  const Tag = component;
  const buttonClass = `${styles[`${variant}-${type}`]} ${styles[size]}`;
  return (
    <Tag className={buttonClass} {...rest}>
      {children}
    </Tag>
  );
}
