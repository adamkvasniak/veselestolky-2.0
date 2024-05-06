import React from 'react';
import styles from './Contact.module.css';
import { Alert,AlertIcon, AlertTitle,AlertDescription} from '@chakra-ui/react';


const SuccessAlert = () => {
    return (<div> <Alert
          className={styles.alertSucces}
          status='success'
          variant='subtle'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          textAlign='center'
          height='200px'
        >
          <AlertIcon boxSize='40px' mr={0} />
          <AlertTitle mt={4} mb={1} fontSize='lg'>
            Application submitted!
          </AlertTitle>
          <AlertDescription maxWidth='sm'>
            Thanks for submitting your application. Our team will get back to you soon.
          </AlertDescription>
            </Alert>
            </div>
        );
    }
export default SuccessAlert;