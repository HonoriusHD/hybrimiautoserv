import { ContactsData } from "./contacts_data";

import styles from "./contacts.module.scss";

function Contacts(border) {
  return (
    <div className={styles.contacts_wrapper}>
      {ContactsData.map((contact) => {
        return (
          <>
            <div key={contact.id} className={styles.contacts}>
              <h4>{contact.contactTitle}</h4>
              <p>{contact.contact}</p>
            </div>
            {contact.id !== 3 && (
              <div className={styles.contact_lines_between}></div>
            )}
          </>
        );
      })}
    </div>
  );
}

export default Contacts;
