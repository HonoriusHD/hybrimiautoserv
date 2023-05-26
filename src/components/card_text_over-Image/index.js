import style from "./card_text_over-Image.module.scss";

import ImageComponent from "../image_component";
import CardTextOnly from "../card_text_only";

function CardTextOverImage({ image, text, alt, headerType }) {
  return (
    <div className={style.card_text_over_image}>
      <ImageComponent
        image={image}
        objectFit="cover"
        imageSize="smallCardSize"
        alt={alt}
      />
      <CardTextOnly title={text} headerType={headerType} />
    </div>
  );
}

export default CardTextOverImage;
