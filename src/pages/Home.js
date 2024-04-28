import React  from 'react';
import CategoryShowcase from '../body/CategoryShowcase/CategoryShowcase';
import Text from '../body/header-bar/Text/Text';
import ProductGrid from '../body/ProductGrid/ProductGrid';
import InfoGallery from '../body/InfoGallery/InfoGallery';
import Banner from '../body/Banner/Banner';
import SpinningPictureOnScroll from '../body/SpinninPicture/SpinningPictureOnScroll';
import { Products } from '../body/ProductGrid/Products';

const Home = () => {
  const firstFourProducts = Products.slice(0, 4);

    return (
    <>
    <CategoryShowcase />
    <Text header = {"TOP PONUKY"} />
    <ProductGrid productsInGrid = {firstFourProducts}/>
    <InfoGallery />
    {/* <SpinningPictureOnScroll />
    <Banner /> */}
    </>
    );
  };
export default Home;