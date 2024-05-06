import React  from 'react';
import Text from '../body/header-bar/Text/Text';
import ProductGrid from '../body/ProductGrid/ProductGrid';
import { Products,ProductCategories } from '../body/ProductGrid/Products';

import RecordsList from '../body/RecordList';

const geodomProducts = Products.filter(product => product.category === ProductCategories.EXTERIOR);


const Exterier = () => {
    return (
      <>
      <Text header={"Exterier"}/>
      <ProductGrid productsInGrid={geodomProducts} />
      </>
    )

  };
  
  export default Exterier;