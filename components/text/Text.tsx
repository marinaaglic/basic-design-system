import { ITextProps } from "./Text.types"
import styles from "./Text.module.css";

export default function Text({size, children, className, component = "span", ...rest}: ITextProps) {
  const Tag = component;
  return (
    <Tag className={`${styles[size]} ${className}`} {...rest}>
      {children}
    </Tag>
  )
}
