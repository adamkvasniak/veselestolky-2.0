import React, { useState } from 'react'
import Product from './Product'
import styles from "./Product.module.css"

export default function ProductGrid({productsInGrid}) {
    const length = productsInGrid.length;
    return (<div className={styles.productGrid}>
         {productsInGrid.map((product) => (
        <Product item={product} />
      ))}
    </div>
    )}; 