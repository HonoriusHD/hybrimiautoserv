import styles from "./contact.module.scss";

import TitleText from "components/title_text";

import ImageComponent from "components/image_component";
import aboutShapes from "assets/aboutShapes.png";

import { ContactData } from "./contact_data";

function Contact() {
  return (
    <section id="contact" className={`${styles.contact} sectionPaddingTop`}>
      <article className={`${styles.contact_content} article-content`}>
        <div className={styles.contact_wrapper}>
          <TitleText
            title={ContactData.contactTitle()}
            paragraphs={ContactData.contactParagraph()}
            headerType="h2"
            customWidth="customWidth"
            paragraphsColor="secondary_two"
          />
          <div className={styles.contact_info_wrapper}>
            {ContactData.contactText.map((contact) => {
              return (
                <div key={contact.id} className={styles.contactData}>
                  <p className={styles.contactTitle}>{contact.contactType}</p>
                  <h5 className={styles.contactParagraph}>{contact.contact}</h5>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.map_wrapper}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1930.9957352543563!2d23.75261915607029!3d46.80745051567957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4749752af61ad88b%3A0xdca1de7bc742fefb!2sLa%20Daniel%20-%20Vulcanizare%2FSpalatorie%20auto%20self%20wash!5e0!3m2!1sro!2sro!4v1682415628618!5m2!1sro!2sro"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0, borderRadius: 14 }}
            title="map"
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </article>
      <div className={styles.children}>
        <ImageComponent
          image={aboutShapes}
          objectFit="cover"
          imageSize="contactShapes"
          alt="Acesta este lopo-ul site-ului"
        />
      </div>
    </section>
  );
}

export default Contact;
