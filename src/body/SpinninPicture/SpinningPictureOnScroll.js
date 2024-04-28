import React, { useRef, useEffect, useState } from 'react';
import { Parallax } from 'react-parallax';
import image from './circular.png';
import styles from './SpinningPictureOnScroll.module.css'

const SpinningPictureOnScroll = () => {
  const imageRef = useRef(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Get the current scroll position
      const scrollY = window.scrollY;

      // Adjust the rotation based on the scroll position
      const newRotation = scrollY % 360;
      setRotation(newRotation);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div class={styles.spinninContainer}>
    <Parallax
      blur={0}
      bgImageAlt="Spinning Picture"
      strength={200}
    
      style={{ height: 'auto',padding: '35px',backgroundColor:'#9ABDE8' }}
    >
      <div 
        ref={imageRef} 
        style={{
          width: '300px',
          height: '300px',
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          transform: `rotate(${rotation}deg)`,
          alignSelf: 'center'
        }} 
      />
    </Parallax>
    {/* <div className={styles.text}>
      <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</h1>
    </div> */}
    </div>
  );
};

export default SpinningPictureOnScroll;
