import React from 'react'
import styles from './ProductPage.module.css'
import { useDisclosure } from '@chakra-ui/react'
import ContactForm from "../../pages/Contact/ContactForm"
import {
    Modal,
    Button,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react';



function ModalWindow() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button size='lg' colorScheme="green" className={styles.orderButton} onClick={onOpen}>Objednat produkt</Button>
        <Modal size="lg"  isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody>
                <ContactForm />
            </ModalBody>
            
          </ModalContent>
        </Modal>
      </>
    )
}

export default ModalWindow;