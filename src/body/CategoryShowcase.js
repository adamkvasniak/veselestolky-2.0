import React from 'react';
import geodom from "./geodom.png"
import styles from'./CategoryShowcase.module.css'
const CategoryShowcase = () => {
  // Dummy data for category
  const category = {
    name: 'Electronaaaaics',
    header1: 'Explore the Latest',
    header2: 'Electronics Deals',
  };

  return (
    <div className={styles.categoryShowcase}>
        <div className={styles.headers}>
          <h1>{category.header1}</h1>
          <h1>{category.header2}</h1>
          <a>Klikni a zisti viac!</a>
      </div>
      <img src={geodom} alt={category.name} />
    </div>
  );
};

export default CategoryShowcase;
