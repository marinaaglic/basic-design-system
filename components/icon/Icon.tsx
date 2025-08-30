import { IIconProps } from './Icon.types';
import styles from './Icon.module.scss';
import SearchIcon from '../../public/assets/search.svg';
import CloseIcon from '../../public/assets/close.svg';
import DarkIcon from '../../public/assets/dark.svg';
import LightIcon from '../../public/assets/light.svg';
import ArrowRightIcon from '../../public/assets/arrow-right.svg';

export default function Icon({ size, type, className, ...rest }: IIconProps) {
  const icons = {
    search: SearchIcon,
    close: CloseIcon,
    dark: DarkIcon,
    light: LightIcon,
    arrowRight: ArrowRightIcon,
  };

  const IconComponent = icons[type];
  return (
    <span
      className={`${styles.iconWrapper ?? ''} ${className ?? ''}`}
      {...rest}
    >
      <IconComponent className={styles[size]} />
    </span>
  );
}
