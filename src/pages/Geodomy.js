import React  from 'react';
import Text from '../body/header-bar/Text/Text';
import ProductGrid from '../body/ProductGrid/ProductGrid';
import { Products,ProductCategories } from '../body/ProductGrid/Products';

const geodomProducts = Products.filter(product => product.category === ProductCategories.GEODOM);


const Geodomy = () => {
    return (
      <>
      <Text header={"Geodomy"}/>
      <ProductGrid productsInGrid={geodomProducts} />
      </>
    )

  };
  
  export default Geodomy;