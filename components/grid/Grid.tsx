import { IGridProps } from "./Grid.types";
import styles from "./Grid.module.scss";
import clsx from "clsx";

export default function Grid({size, children, className, component="section", ...rest}: IGridProps) {
    const Tag = component;
  return (
    <Tag className={clsx(styles[size], className)} {...rest}> {children}</Tag>
  )
}