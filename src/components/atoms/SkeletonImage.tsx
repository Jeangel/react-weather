import { useEffect, useState } from "react";
import Skeleton from "./Skeleton";

interface SkeletonImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  height: string | number;
  width: string | number;
}

export const SkeletonImage = ({
  src,
  alt,
  style,
  height,
  width,
  ...rest
}: SkeletonImageProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  useEffect(() => {
    setIsImageLoaded(false);
  }, [src]);
  return (
    <>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        {...rest}
        onLoad={() => setIsImageLoaded(true)}
        style={{ ...style, display: isImageLoaded ? "block" : "none" }}
      />
      <Skeleton
        style={{
          height: height,
          width: width,
          display: isImageLoaded ? "none" : "block",
        }}
      />
    </>
  );
};
