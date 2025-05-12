interface LazyPictureProps {
  image: {
    src: string;
    alt: string;
  };
  mediaCondition?: {
    srcSet: string;
    media: string;
  };
  classname?: string;
  useEagerLoading?: boolean;
}

const LazyPicture = ({
  image,
  mediaCondition,
  classname,
  useEagerLoading,
}: LazyPictureProps) => {
  const { src, alt } = image;
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
