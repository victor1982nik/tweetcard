const BackgroundImage = ({
  //srcSetWebp,
  srcSetOldTypes,
  placeholderImg,
  typeOldTypes = "image/jpeg",
  // typeWebp = "image/webp",
  className,
  // children,
}) => {
  return (
    <picture>
      {/* <source srcSet={srcSetWebp} type={typeWebp} /> */}
      <source srcSet={srcSetOldTypes} type={typeOldTypes} />
      <img className={className} src={placeholderImg} alt="" />
      {/* {children} */}
    </picture>
  );
};

export default BackgroundImage;
