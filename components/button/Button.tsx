import { IButtonProps } from './Button.types';
import styles from './Button.module.scss';
import clsx from 'clsx';

export default function Button({
  variant,
  type,
  size,
  children,
  component = 'button',
  ...rest
}: IButtonProps) {
  const Tag = component;
  const buttonClass = clsx(
    styles.button,
    styles[`${variant}-${type}`],
    styles[size]
  );

  return (
    <Tag className={buttonClass} {...rest}>
      {children}
    </Tag>
  );
}
