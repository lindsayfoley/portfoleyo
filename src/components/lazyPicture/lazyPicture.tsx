export interface ImageProps {
  src: string;
  alt: string;
  useEagerLoading?: boolean;
}

export interface LazyPictureProps {
  image: ImageProps;
  mediaCondition?: {
    srcSet: string;
    media: string;
  };
  classname?: string;
}

const LazyPicture = ({
  image,
  mediaCondition,
  classname,
}: LazyPictureProps) => {
  const { src, alt, useEagerLoading } = image;
  const supportedNextGenImageFormat = ["avif", "webp"];
  const imageSrcWithoutFormat = src.slice(0, src.indexOf("."));

  return (
    <picture>
      {mediaCondition && <source {...mediaCondition} />}
      {supportedNextGenImageFormat.map((format) => (
        <source
          key={format}
          srcSet={`${imageSrcWithoutFormat}.${format}`}
          type={`image/${format}`}
        />
      ))}
      <img
        className={classname}
        src={src}
        alt={alt}
        loading={useEagerLoading ? undefined : "lazy"}
      />
    </picture>
  );
};

export default LazyPicture;
