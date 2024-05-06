import React, { useState } from 'react';
import styles from './Contact.module.css';
import axios from 'axios';
import {Input,Textarea, Button, Checkbox, Select, Heading, Text } from '@chakra-ui/react';
import SuccessAlert from './SuccessAlert';
import { Products } from '../../body/ProductGrid/Products';
import BlueAlert from './BlueAlert';

const ContactForm = () => {

const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    product: '',
});
const [isFormSubmitted, setFormSubmitted] = useState(false); 

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
};

const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
};
// BLUE ALERT STATES
const [alertVisible, setAlertVisible] = useState(true);

  const handleCloseAlert = () => {
    setAlertVisible(false);
  };

  const handleOpenAlert = () => {
    setAlertVisible(true);
  };


// SUBMIT FORM
  const handleSubmit = async (e) => {
    e.preventDefault();
    //const isFormValid = Object.values(formData).every(value => value.trim() !== '');
    setFormSubmitted(true);
    handleOpenAlert();
    console.log('Form Data:', formData);
    try {
      // Make a POST request to the server endpoint
      const response = await axios.post('/hello', { name: formData.name,phone:formData.phone, email: formData.email,message: formData.message,product:formData.product });
      // Handle the server response as needed
      console.log('Server Response:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  

  return (
    <>
    <div className={styles.contactFormContainer}>
      <Heading className={styles.header} size='lg' fontSize='27px'>Formulár pre nezávislu cenovú ponuku</Heading>
      <Text className={styles.text} size='lg' fontSize='18px'>Snažíme sa naše produkty čo najviac prispôsobit vaším potrebám a preto sa väčšina produktov vyrába na objednávku. Tento formulár je prvým krokom v ceste k vašému novému domovu. Dajte nám vedieť o ktorý produkt máte záujem a náš tím sa postará o zvyšok! </Text>
      <form onSubmit={handleSubmit}>
        <label>
          Meno:
          <Input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Telefón:
          <Input type="phone" name="phone" value={formData.phone} onChange={handleChange} />
        </label>
        <label>
          Email:
          <Input type="email" name="email" value={formData.email} onChange={handleChange} size='md'/>
        </label>
        <label>
          Správa:
          <Textarea name="message" value={formData.message} onChange={handleChange} />
        </label>
        <label>
        Mám záujem o:         
        <Select
        placeholder='Vyber produkt'
        name="product"
        value={formData.product}
        onChange={handleChange}
      >
        {/* Map over Products array and create an option for each product */}
        {Products.map((product, index) => (
          <option key={index} value={product.title}>
            {product.title}
          </option>
        ))}
      </Select>
      </label>
      <Checkbox size='sm' name='agreement' defaultChecked onChange={handleCheckboxChange} >Súhlasim so spracovaním osobných údajov</Checkbox>
        <Button colorScheme = 'green' type="submit" onClick={handleSubmit}>Odoslať</Button>
      </form>
      {isFormSubmitted && (
      <SuccessAlert />
      )}
    </div>
    </>
  );
};

export default ContactForm;