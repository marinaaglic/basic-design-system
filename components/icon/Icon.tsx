import { IIconProps } from "./Icon.types"
import styles from "./Icon.module.scss";

export default function Icon({ size, icon: IconComponent, className = "", ...rest }: IIconProps) {
  return (
    <span className={`${styles[size]} ${className}`} {...rest}>
        <IconComponent />
    </span>
  )
}