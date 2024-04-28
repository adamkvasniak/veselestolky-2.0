import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import './AlertAnimation.css'; // Import your CSS file for styling

const AlertAnimation = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleFormSubmit = () => {
    setShowAlert(true);

    // Optionally, reset showAlert after a certain duration to hide the alert
    setTimeout(() => {
      setShowAlert(false);
    }, 3000); // Adjust the duration as needed
  };

  return (
    <div>
      
      <AnimatePresence>
        {showAlert && (
          <motion.div
            className="alert-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="success-alert"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
            >
              {/* You can customize the content and styling of the success alert here */}
              Form submitted successfully!
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AlertAnimation;
