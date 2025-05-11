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
}

const LazyPicture = ({
  image,
  mediaCondition,
  classname,
}: LazyPictureProps) => {
  const { src, alt } = image;
  const defaultNextGenImageFormat = ["avif", "webp"];
  const imageSrcWithoutFormat = src.slice(0, src.indexOf("."));

  return (
    <picture>
      {mediaCondition && <source {...mediaCondition} />}
      {defaultNextGenImageFormat.map((format) => (
        <source
          key={format}
          srcSet={`${imageSrcWithoutFormat}.${format}`}
          type={format}
        />
      ))}
      <img className={classname} src={src} alt={alt} loading="lazy" />
    </picture>
  );
};

export default LazyPicture;
