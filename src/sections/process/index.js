import style from './process.module.scss';

import CarouselDisplay3Imgages from 'components/carousel_display_3_imgages';
import TitleText from 'components/title_text';

import {
  ProcessHeader,
  ProcessSubHeader,
  ProcessData,
  ImageSliderTitle,
} from './process_data';

function Process() {
  return (
    <section id='process' className={`${style.process} sectionPaddingBottom `}>
      <article className={`article-content`}>
        <TitleText
          title={ProcessHeader()}
          paragraphs={ProcessSubHeader()}
          headerType='h2'
          customWidth='customWidth'
        />
        <div className={style.process_wrapper}>
          {ProcessData.map((process, index) => {
            return (
              <div key={index} className={style.card}>
                <>
                  <div className={style.leftCornerElement} />
                  <div className={style.topCornerElement} />
                  <div className={style.rightCornerElement} />
                  <div className={style.bottomCornerElement} />
                  <div className={style.process_card}>
                    <h3 className={style.process_card_number}>
                      {process.number}
                    </h3>
                    <h4>{process.processTitle}</h4>
                    <p>{process.processContent}</p>
                  </div>
                </>
              </div>
            );
          })}
        </div>
      </article>
      <article className='article-content'>
        <TitleText
          title={ImageSliderTitle()}
          headerType='h2'
          customWidth='customWidth'
        />
        <CarouselDisplay3Imgages />
      </article>
    </section>
  );
}

export default Process;
