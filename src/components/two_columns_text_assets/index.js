import style from "./two_columns_text_assets.module.scss";

import ImageComponent from "../image_component";
import TitleText from "../title_text";

function Two_columns_text_assets({
  image,
  title,
  paragraphs,
  headerType,
  paragraphsColor,
  reverseColumns,
  textMarginRight,
  textMarginLeft,
  paddingBottom100,
  objectFit,
  imageSize,
  alt,
  children,
}) {
  return (
    <header
      className={`${style.header} 
      ${style[reverseColumns]} 
      ${style[textMarginLeft]} 
      ${style[textMarginRight]} 
      ${style[paddingBottom100]}`}
    >
      <div className={style.left_side}>
        <TitleText
          title={title}
          paragraphs={paragraphs}
          headerType={headerType}
          paragraphsColor={paragraphsColor}
          textMarginLeft={textMarginLeft}
          textMarginRight={textMarginRight}
        />
      </div>
      <div className={style.assets_side}>
        <ImageComponent
          image={image}
          objectFit={objectFit}
          imageSize={imageSize}
          alt={alt}
        />
      </div>
      <div className={style.children}>{children}</div>
    </header>
  );
}

export default Two_columns_text_assets;
