import React, { useEffect } from 'react';
import { ModalContext } from 'pages';
import { useContext } from 'react';
import { TfiClose } from 'react-icons/tfi';

import styles from './modal.module.scss';

function Modal({ children, isModalVisible }) {
  const { handleModalVisibility } = useContext(ModalContext);
  const blockBody = () => {
    document.body.style.height = '100vh';
    document.body.style.overflow = 'hidden';
  };
  useEffect(() => {
    isModalVisible === 'openModal'
      ? blockBody()
      : (document.body.style.overflow = 'initial');
  });
  return (
    <div className={`${styles.modal} ${styles[isModalVisible]}`}>
      <div className={styles.modal_wrapper}>
        <div
          className={styles.close_modal}
          onClick={() => handleModalVisibility()}
        >
          <div className={styles.close_button}>
            <TfiClose color='black' fontSize='25px' className='close-icon' />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;
