import React  from 'react';
import Text from '../body/header-bar/Text/Text';
import ProductGrid from '../body/ProductGrid/ProductGrid';
import { Products,ProductCategories } from '../body/ProductGrid/Products';
import RecordsList from '../body/RecordList';

const geodomProducts = Products.filter(product => product.category === ProductCategories.INTERIOR);


const Interier = () => {
    return (
      <>
      <Text header = {"Interier"} popis={"Objav tie najvacsie kokotiny este dnes"}/>
      <ProductGrid productsInGrid={geodomProducts} />
  
      </>
    )

  };
  
  export default Interier;