import React, { useRef, useState } from "react";
import style from "./contact_form.module.scss";

import TitleText from "components/title_text";

import contactImage from "assets/contactImage.jpg";
import ImageComponent from "components/image_component";

import emailjs from "@emailjs/browser";

import PrimaryButton from "components/primary_button";

import {
  ValidateUserEmail,
  ValidateUserPhone,
} from "validations/userValidations";

const contactFormTitle = function () {
  return (
    <>
      Pentru programari, sugestii sau reclamatii, lasati-ne un
      <span> mesaj</span> si va contactam cat mai repede.
    </>
  );
};

function ContactForm() {
  const [email, setEmail] = useState("");
  const [showEmail, setShowEmail] = useState(false);
  const [phone, setPhone] = useState("");
  const [showPhone, setShowPhone] = useState(false);
  const [disabledValue, setDisabledValue] = useState(false);
  const [message, setMessage] = useState("");
  const [DataProcessing, setDataProcessing] = useState(false);

  const [buttonValue, setButtonValue] = useState("TRIMITE");
  const [validations, setValidations] = useState(true);

  const checkValidations = () => {
    console.log(DataProcessing);
    if (
      DataProcessing &&
      !showEmail &&
      !showPhone &&
      email !== "" &&
      phone !== ""
    ) {
      setValidations(true);
    } else {
      alert(
        "Pentru a va putea oferi servicii de calitate, este necesara completarea coracta a tuturor datelor si bifarii acordului de prelucrare a datelor. Multumim"
      );
      setValidations(false);
    }
  };

  const AcceptDataProcessing = () => {
    setDataProcessing(!DataProcessing);
  };

  const ValidateEmail = () => {
    setShowEmail(ValidateUserEmail({ email }));
  };
  const ValidatePhone = () => {
    setShowPhone(ValidateUserPhone({ phone }));
  };

  const focusEmail = () => {
    setShowEmail(false);
  };
  const focusPhone = () => {
    setShowPhone(false);
  };
  const form = useRef();

  const resetForm = () => {
    form.current?.reset();
  };

  const submitFunctions = () => {
    resetForm();
    setPhone("");
    setEmail("");
    setMessage("");
    AcceptDataProcessing();
  };
  const sendEmail = (e) => {
    e.preventDefault();
    setButtonValue("Mesaj in curs de trimitere");
    setDisabledValue(true);
    emailjs
      .sendForm(
        "service_y5vmbtu",
        "template_jbwvksw",
        form.current,
        "mJWKhohUrnSdXhJq4"
      )
      .then(
        (result) => {
          setDisabledValue(false);
          setButtonValue("TRIMITE");
          submitFunctions();
          alert(
            "Mesajul a fost trimis cu succes. Va multumim si va vom contacta in cel mai scurt timp posibil."
          );
        },
        (error) => {
          "Ne pare rau, insa a avut loc o eroare la procesare. Va rugam mai incercati o data, sau contactati-ne la numarul de telefon disponibili sau scrieti-ne un e-mail. Va multumim pentru intelegere";
        }
      );
  };

  return (
    <section id="hero" className={`${style.contact_form} sectionPaddingBottom`}>
      <article className={`${style.contact_form_content} article-content`}>
        <ImageComponent
          image={contactImage}
          objectFit="cover"
          imageSize="footerSize"
          alt="Aceasta reprezinta o ilustratie specifica pentru o sectiune de contact"
        />
        <div className={style.form_wrapper}>
          <TitleText
            title={contactFormTitle()}
            headerType="h4"
            customWidth="custotWidth"
          />
          <div className={style.form}>
            <form ref={form} onSubmit={sendEmail}>
              <div className={style.input_box}>
                <input type="text" name="name" required />
                <label>
                  <p>Nume</p>
                </label>
              </div>
              <div className={style.input_box}>
                <input
                  type="text"
                  name="phone"
                  onBlur={ValidatePhone}
                  onFocus={focusPhone}
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  required
                />
                {showPhone && (
                  <p style={{ color: "red" }}>
                    Numarul trebuie sa contina doar cifre
                  </p>
                )}
                <label>
                  <p>Telefon</p>
                </label>
              </div>
              <div className={style.input_box}>
                <input
                  type="text"
                  name="email"
                  onBlur={ValidateEmail}
                  onFocus={focusEmail}
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
                {showEmail && (
                  <p style={{ color: "red" }}>Formatul mailului este gresit</p>
                )}
                <label>
                  <p>Email</p>
                </label>
              </div>
              <div className={`${style.input_box} ${style.textarea_box}`}>
                <textarea
                  required
                  className="textarea"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <label>
                  <p>Mesajul tau</p>
                </label>
              </div>
              <div className={style.checkProcessData}>
                <PrimaryButton
                  type={(validations && "submit") || "button"}
                  value={buttonValue}
                  className="send-button"
                  checkValidations={checkValidations}
                  disabled={disabledValue}
                  textColor="primary_color"
                />
                <label
                  style={{
                    top: "10px",
                    position: "relative",
                  }}
                >
                  <input
                    type="checkbox"
                    name="acordProcesareDate"
                    value="Da"
                    onClick={AcceptDataProcessing}
                  />
                  <span style={{ color: "gray", marginLeft: "10px" }}>
                    Sunt de acord cu proceasarea datelor
                  </span>
                </label>
              </div>
            </form>
          </div>
        </div>
      </article>
    </section>
  );
}

export default ContactForm;
