import style from './card_text_only.module.scss';

import { SetHeaderType } from 'logic';

function CardTextOnly({ title, headerType }) {
  return (
    <div className={style.card_text_only}>
      {SetHeaderType(headerType, title)}
    </div>
  );
}

export default CardTextOnly;
