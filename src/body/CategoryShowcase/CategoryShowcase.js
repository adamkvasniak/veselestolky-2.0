import React from 'react';
import geodom from "./geodom.png"
import styles from'./CategoryShowcase.module.css'
const CategoryShowcase = () => {

  return (
    <div className={styles.categoryShowcase}>
        <div className={styles.headers}>
          <a>Vytvárame umenie z dreva pre váš domov</a>
      </div>
      <div className={styles.geodom}></div>
      <img src={geodom}/>
    </div>
  );
};

export default CategoryShowcase;
