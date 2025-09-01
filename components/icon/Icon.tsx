import { IIconProps } from './Icon.types';
import styles from './Icon.module.scss';

export default function Icon({
  size,
  children,
  className = '',
  ...rest
}: IIconProps) {
  return (
    <svg className={`${styles[size]} ${className}`} {...rest}>
      {children}
    </svg>
  );
}
