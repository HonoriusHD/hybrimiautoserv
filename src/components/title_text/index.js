import { SetHeaderType } from 'logic';
import style from './title_text.module.scss';

function TitleText({
  title,
  paragraphs,
  headerType,
  paragraphsColor,
  customWidth,
  textMarginRight,
  textMarginLeft,
}) {
  return (
    <div
      className={`${style[customWidth]} ${style[paragraphsColor]} ${style[textMarginLeft]} ${style[textMarginRight]}`}
    >
      {SetHeaderType(headerType, title)}
      {paragraphs}
    </div>
  );
}

export default TitleText;
