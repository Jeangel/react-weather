import React from "react";
import styles from "./styles.module.css";

interface SkeletonProps {
  className?: string;
  style?: React.CSSProperties;
}

const Skeleton = ({ className, style }: SkeletonProps) => {
  return (
    <span className={`${styles.root} ${className ?? ""}`} style={style}></span>
  );
};

export default Skeleton;
