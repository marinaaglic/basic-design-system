import { IIconProps } from './Icon.types';
import styles from './Icon.module.scss';
import { icons } from './Icon.utils';

export default function Icon({ size, type, className, ...rest }: IIconProps) {
  const IconComponent = icons[type];
  return (
    <span className={`${styles.iconWrapper} ${className}`} {...rest}>
      <IconComponent className={styles[size]} />
    </span>
  );
}
