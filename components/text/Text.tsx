import { ITextProps } from "./Text.types"
import styles from "./Text.module.scss";
import clsx from "clsx";

export default function Text({size, children, className, component = "span", ...rest}: ITextProps) {
  const Tag = component;
  return (
    <Tag className={clsx(styles[size], className)} {...rest}>
      {children}
    </Tag>
  )
}
