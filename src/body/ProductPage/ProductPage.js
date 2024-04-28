import React, { useState } from 'react'
import styles from './ProductPage.module.css'
import productStyles from '../ProductGrid/Product.module.css'
import {ImageCarousel } from "../ProductGrid/Product";
import { Products,ProductCategories } from '../ProductGrid/Products';
import ModalWindow from './Modal';
import Text from '../header-bar/Text/Text'
import InfoPopover from './InfoPopover'
import {AvailabilityIcon} from "../ProductGrid/Product"

const ProductPage = ({hovno}) => {
    console.log(hovno.dimensions)
    return (
        <div className={styles.productPage}>
            <Text header = {hovno.category} />
            <div className={styles.row}>
                <div className={styles.carouselContainer}>
                    <ImageCarousel images={hovno.gallery} />
                </div> 
                 <div className={styles.productDescriptionContainer}>
                    <div className={styles.titleAndIconDiv}>
                        <h1 className={styles.productTitle}>{hovno.title}</h1>
                        <AvailabilityIcon item={hovno} />
                    </div>
                    

                    <p>Material: </p>
                    <p class={styles.dimensions}>Rozmery: {hovno.dimensions}</p>
                    <p class={styles.productDescription}>{hovno.textDetailed}</p>
                    
                    <div className={`${styles.row} ${styles.priceAndButtonDiv}`}>
                        <h3 className={productStyles.price}>od {hovno.price} $ <InfoPopover infoText='Vysledna cena produktu sa odvija od individualnych specifikacii' /></h3>
                        <ModalWindow />
                    </div>
                        
                </div>
            </div>
            
            
        </div>
    )
};

export default ProductPage;