import styles from './benefits.module.scss';
import { BenefitsData, title } from './benefits_data';

import { SetHeaderType } from 'logic';

function Benefits({ headerType, subHeaderType, cardStroke, paragraphWidh }) {
  return (
    <div className={`${styles.benefits} ${styles[cardStroke]}`}>
      {SetHeaderType(headerType, title())}
      <div className={styles.benefit_cards}>
        {BenefitsData.map((benefit) => {
          return (
            <div key={benefit.id} className={styles.benefit_card}>
              <span className={styles.icon}>{benefit.icon}</span>
              {SetHeaderType(subHeaderType, benefit.subtitle)}
              <p style={{ width: paragraphWidh }}>{benefit.paragraph}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Benefits;
