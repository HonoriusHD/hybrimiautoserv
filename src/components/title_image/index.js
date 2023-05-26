import style from './title_image.module.scss';
import ImageComponent from '../image_component';
import { SetHeaderType } from 'logic';

function TitleImage({ title, image, headerType, objectFit, imageSize, alt }) {
  return (
    <div className={style.title_image}>
      {SetHeaderType(headerType, title)}
      <ImageComponent
        image={image}
        objectFit={objectFit}
        alt={alt}
        imageSize={imageSize}
      />
    </div>
  );
}

export default TitleImage;
