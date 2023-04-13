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
    <picture className={className}>
      {/* <source srcSet={srcSetWebp} type={typeWebp} /> */}
      <source srcSet={srcSetOldTypes} type={typeOldTypes} />
      <img src={placeholderImg} alt="" />
      {/* {children} */}
    </picture>
  );
};

export default BackgroundImage;
