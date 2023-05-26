import React from 'react';

import style from './quote_over_image.module.scss';
import ImageComponent from '../image_component';
import quoteImage from 'assets/quoteImage.jpg';

function QuoteOverImage({ quote, author, imageSize, objectFit }) {
  return (
    <div className={style.content}>
      <div className={style.content_text}>
        <h3>
          <em>{quote}</em>
        </h3>
        <h4>{author}</h4>
      </div>

      <ImageComponent
        image={quoteImage}
        objectFit={objectFit}
        imageSize={imageSize}
        alt='Aceasta este o reprezentare ilustrativa ce face referire la un services auto'
      />
      <div className={style.transparentBg}></div>
    </div>
  );
}

export default QuoteOverImage;
