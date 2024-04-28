import React, { useState } from 'react'
import styles from "./Product.module.css"
import {Link} from "react-router-dom"
import { Icon } from '@chakra-ui/react';
import { FaAngleLeft, FaAngleRight, FaCheck,FaTruck,FaHeart } from 'react-icons/fa6';



export const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const prevImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  
    return (
      <div className={styles.carousel}>
        <FaAngleLeft class={styles.left} size ="32" onClick={prevImage}/>
        <FaAngleRight class={styles.right} size ="30" onClick={nextImage}/>
        <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      </div>
    );
};

export const HeartIcon = () => {
  const [isSolid, setIsSolid] = useState(true); // Set initial state to true

  const handleClick = () => {
    setIsSolid(!isSolid);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        cursor: 'pointer',
        color: isSolid ?  'pink':'red',
        transition: 'color 0.3s ease',
      }}
    >
      <FaHeart size="36"/>
    </div>
  );
};

export const AvailabilityIcon = ({item}) => {
  return (
    <div>
    {item.isAvailable ? (
    <div class={styles.iconInfo}>
      <FaCheck  class={styles.icon} color="green" />
      <p>Na sklade</p>
    </div>
  ) : (
    <div class={styles.iconInfo}>
      <Icon  as={FaTruck} boxSize={20} class={styles.icon} color="black"/>
      <p>Do {item.deliveryTime} dní</p>
    </div>
  )}</div>
  )
  
};

export default function Product({item}){
    return (
        <div class={styles.productCard}>
            <div  class={styles.imageShow}>
                <div class={styles.carousel}>
                  <ImageCarousel images = {item.gallery} /> 
                  <div class={styles.availability}>
                    <AvailabilityIcon item={item} />
                     <HeartIcon class= {styles.heart}/>
                   </div>
                </div>
            </div> 
                <Link className={styles.category} to={item.url} > {item.category}</Link>
                <h3 class={styles.productTitle}>{item.title}</h3>
                <p class={styles.dimensions}>{item.dimensions}</p>
                <p class={styles.productDescription}>{item.text}</p>
                <div class={styles.cenaAinfoTlacidlo}>
                    <span class={styles.price}>od {item.price}€</span>
                    <button class={styles.detailButton}><Link to={item.url}>ZOBRAZIŤ DETAILY</Link></button>
                </div>
                      
        </div>
    )
}
