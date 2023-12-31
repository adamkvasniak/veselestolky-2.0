import React  from 'react';
import CategoryShowcase from '../body/CategoryShowcase';
import Text from '../body/header-bar/Text/Text';
import Product from '../body/ProductGrid/ProductGrid';
import InfoGallery from '../body/InfoGallery/InfoGallery';

const Home = () => {
    return (
    <>
    <CategoryShowcase />
    <Text />
    <Product />
    <InfoGallery />
    <Product />
    </>
    );
  };
export default Home;