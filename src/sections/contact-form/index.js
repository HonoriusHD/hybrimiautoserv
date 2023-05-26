import React, { useRef, useState } from 'react';
import style from './contact_form.module.scss';

import TitleText from 'components/title_text';

import contactImage from 'assets/contactImage.jpg';
import ImageComponent from 'components/image_component';

import PrimaryButton from 'components/primary_button';

// const sendEmail = (e) => {
//   e.preventDefault();
//   setButtonValue('Mesaj in curs de trimitere');
//   setDisabledValue(true);
//   emailjs
//     .sendForm(
//       'service_qfcopfk',
//       'template_6ai953d',
//       form.current,
//       '0gAhEKFkzn8XRbu9D'
//     )
//     .then(
//       (result) => {
//         setDisabledValue(false);
//         setButtonValue('TRIMITE');
//         submitFunctions();
//         alert(
//           'Mesajul a fost trimis cu succes. Va multumim si va vom contacta in cel mai scurt timp posibil.'
//         );
//       },
//       (error) => {
//         'Ne pare rau, insa a avut loc o eroare la procesare. Va rugam mai incercati o data, sau contactati-ne la numarul de telefon disponibili sau scrieti-ne un e-mail. Va multumim pentru intelegere';
//       }
//     );
// };

const contactFormTitle = function () {
  return (
    <>
      Pentru programari, sugestii sau reclamatii, lasati-ne un
      <span> mesaj</span> si va contactam cat mai repede.
    </>
  );
};

function ContactForm() {
  const form = useRef();
  return (
    <section id='hero' className={`${style.contact_form} sectionPaddingBottom`}>
      <article className={`${style.contact_form_content} article-content`}>
        <ImageComponent
          image={contactImage}
          objectFit='cover'
          imageSize='footerSize'
          alt='Aceasta reprezinta o ilustratie specifica pentru o sectiune de contact'
        />
        <div className={style.form_wrapper}>
          <TitleText
            title={contactFormTitle()}
            headerType='h4'
            customWidth='custotWidth'
          />
          <div className={style.form}>
            <form
              ref={form}
              // onSubmit={sendEmail}
            >
              <div className={style.input_box}>
                <input type='text' name='firstName' required />
                <label>
                  <p>Nume</p>
                </label>
              </div>
              <div className={style.input_box}>
                <input type='text' name='firstName' required />
                <label>
                  <p>Telefon</p>
                </label>
              </div>
              <div className={style.input_box}>
                <input type='text' name='firstName' required />
                <label>
                  <p>Email</p>
                </label>
              </div>
              <div className={`${style.input_box} ${style.textarea_box}`}>
                <textarea
                  className='textarea'
                  name='message'
                  required
                ></textarea>
                <label>
                  <p>Mesajul tau</p>
                </label>
              </div>
              <PrimaryButton
                buttonName='Trimite mesaj'
                textColor='primary_color'
              />
            </form>
          </div>
        </div>
      </article>
    </section>
  );
}

export default ContactForm;
