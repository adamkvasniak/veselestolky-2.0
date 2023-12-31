import React, { useState } from 'react'
import "./ProductGrid.css"
import {Products} from "./Products"
import { FaAngleLeft, FaAngleRight, FaCheck,FaTruck,FaHeart } from 'react-icons/fa6';



const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const prevImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  
    return (
      <div className="image-carousel">
        <FaAngleLeft className="left" size ="32" onClick={prevImage}/>
        <FaAngleRight className= "right" size ="30" onClick={nextImage}/>
        <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      </div>
    );
};

const HeartIcon = () => {
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

export default function Product(){
    const productsList = Products.slice(0,4);    
    return (
        
        <div className='productGrid'>
        {productsList.map((item) => (
            <div  className='imageShow'>
                <div className='carousel'>
                  <ImageCarousel images = {item.gallery} /> 
                  <div className="availability">
                    {item.isAvailable ? (
                    <div className='iconInfo'>
                      <FaCheck className='icon' color="green" />
                      <p>Na sklade</p>
                    </div>
                  ) : (
                    <div className='iconInfo'>
                      <FaTruck className='icon' color="black"/>
                      <p>Do {item.deliveryTime} dní</p>
                    </div>

                  )}
                <HeartIcon className="heart"/>
                </div>
                </div>
              

                <h5 className="category"><a  href="kontakt.html">{item.category}</a></h5>
                <h3 className='productTitle'>{item.title}</h3>
                <p class="dimensions">{item.dimensions}</p>
                <p class="popisProduktu">{item.text}</p>
                <div class="cena-a-info-tlacidlo">
                    <span>od {item.price}€</span>
                    <button onclick="changeSlide(`box2`)">ZOBRAZIŤ DETAILY</button>
                </div>
            </div>
            
          ))}
        </div>
    )
}
