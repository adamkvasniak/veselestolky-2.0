import React from 'react';
import styles from './Contact.module.css'; // Import the CSS file

const ContactInfo = () => {
  const companyName = "Veselé Stolky";
  const address = " Hlavná 1200, 029 44, Rabča";
  const email = "veselestolky@gmail.com";
  const phoneNumber = "+421 911 690 230";
  const bankIBAN = "Your Bank IBAN";
  const swiftCode = "Your SWIFT Code";

  return (
    <div className={styles.contactInfo}>
      <h2>Kontaktné informácie</h2>
      <p><strong>Meno firmy: </strong> {companyName}</p>
      <p><strong>Addresa:</strong> {address}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Telefónné číslo: </strong> {phoneNumber}</p>
   
    </div>
  );
};

export default ContactInfo;