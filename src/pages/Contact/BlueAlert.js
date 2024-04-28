import React, { useState } from 'react';
import styles from "./Contact.module.css";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  Box,
} from '@chakra-ui/react';

const BlueAlert = ({ isVisible, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <>
      {isVisible && (
        <Alert status='info'
        className={styles.alertSucces}
         onClose={handleClose}>
          <AlertIcon />
          <Box>
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>
              Your application has been received. We will review your application
              and respond within the next 48 hours.
            </AlertDescription>
          </Box>
          <CloseButton
            alignSelf='flex-start'
            position='relative'
            right={-1}
            top={-1}
            onClick={handleClose}
          />
        </Alert>
      )}
    </>
  );
};

export default BlueAlert;
