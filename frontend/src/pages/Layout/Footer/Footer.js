import React from "react";
import styles from "./Footer.module.css"
import {Link,useLocation} from "react-router-dom"
import { FaEnvelope,FaFacebookF,FaTwitter,FaInstagram } from 'react-icons/fa';
import { Heading,Box,Stack,Flex,Image,HStack,Divider,VStack,Icon,Text } from "@chakra-ui/react";
import logo from "./logo1.jpg";

function Extra(){
    return (
        <div className = {styles.logoDiv}>
    <Flex justify="center" >
      <Image
        src={logo}
        alt="Company Logo"
        borderRadius='full'
        width={{
          base: "150px",
          lg: "200px",
        }}
        height={{
          base: "150px",
          lg: "200px",
        }}
        my={{
          base: 2,
          lg: 0,
        }}
      />
    </Flex>
  </div> )
}

function Footer() {
    const location = useLocation();
    return (<div>
        <div class={styles.footerContainer}>
            <div class={styles.kontaktText}>
              <Heading as='h2' size='3xl' class={styles.contactTextHeader}>Kontaktujte nás!</Heading>
              <Heading as='h4' size='md'>Máte nejaké otázky týkajúce sa našich produktov?
                      Kontaktujte nás a my sa vám ozveme!</Heading>
            </div>
            <div class={location.pathname === '/kontakt' ?  styles.neaktiv :styles.telKontaktAktiv}>
                <a><i class="fas fa-phone"></i>+421 911 690 230</a>
                <Link class = {styles.napisNam} to="kontakt" > <FaEnvelope size="42"/>Kontaktuj nas!</Link>
            </div>
       
            
        </div>
        <Extra />
        </div>
    )
}

export default Footer;