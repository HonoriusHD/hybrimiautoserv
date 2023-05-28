import { useEffect, useState } from "react";

import style from "./image_component.module.scss";

function ImageComponent({ image, imageSize, alt }) {
  const [currentClass, setCurrentClass] = useState(style.imageSize);

  useEffect(() => {
    setCurrentClass(style[imageSize]);
  }, [imageSize]);

  return (
    <div className={`${style.image_wrapper} ${style[imageSize]}`}>
      <img
        src={image}
        alt={alt}
        className={`${style.bg} ${currentClass}`}
        imageSize={imageSize}
      />
    </div>
  );
}

export default ImageComponent;
