import { ITextProps } from "./Text.types"
import styles from "./Text.module.css";

export default function Text({type, children, className, ...rest}: ITextProps) {
  return (
    <div className={`${styles[type]} ${className}`} {...rest}>
      {children}
    </div>
  )
}
