import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import Text from '../../body/header-bar/Text/Text';
import styles from './Contact.module.css';


const Contact = () => {
  return (
  <>
  <Text header ={"Napíš nám!"} />
  <div class = {styles.infoAndFormContainer}>
    <ContactInfo />
    <div class = {styles.contactFormDiv}>
      <ContactForm /> 
    </div>
    
  </div>
</>)};

export default Contact;
