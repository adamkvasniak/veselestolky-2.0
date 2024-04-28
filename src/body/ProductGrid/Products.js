
// zahon XL
import zahonXl from "./images/zahonXL1.jpeg"
import zahonXL2 from "./images/zahonXL2.jpeg"
import zahonXL3 from "./images/zahonXL3.JPG"

// zahon L
import zahonL1 from './images/zahonL1.JPG'
import zahonL2 from './images/zahonL2.JPG'
import zahonL3 from './images/zahonL3.JPG'

//zahon custom
import zahonC from './images/zahonCustom1.JPG'
import zahonC2 from './images/zahonCustom2.JPG'
import zahonC3 from './images/zahonCustom3.JPG'

// hojdacka
import hojda1 from "./IMG_7610.JPG"
import hojda2 from "./IMG_7598.JPG"
import hojda3 from "./IMG_7603.JPG"

// stol
import stol1 from "./images/stol3.JPG"
import stol2 from "./images/stol2.JPG"
import stol3 from "./images/stol1.jpg"

// hamak
import hamak from './images/hamak1.JPG'
import hamak2 from './images/hamak2.jpg'
import hamak3 from './images/hamak3.jpg'

// geodom
import geodom from './images/geodom.png'

export const ProductCategories = {
    EXTERIOR: 'Exteriér',
    INTERIOR: 'Interiér',
    GEODOM: 'Geodomy',
    DOPLNKY: "Drevené doplnky",
    ZAHONY:  "Vyvýšené zahony"
};
  
export const Products = [
    {
        gallery: [stol1, stol2, stol3],
        url : "/stol",
        title: 'Stol',
        category: ProductCategories.INTERIOR,
        dimensions: '21 m2',
        price: 15777,
        text: 'ae dicta sui architecto beatae vitae dicta sunt explicabo. ',
        textDetailed : 'Sed ut pe lais et quasarc hitecto beatae ut pe lais et et quasarc hitecto beatae ut pe lais et et quasarc hitecto beatae ut pe lais et quasarc hitecto beata vitae dicta sui architecto beatae vitae dicta sunt explicabo Sed ut pe lais et quasarc hitecto beatae ut pe lais et et quasarc hitecto beatae ut pe lais et et quasarc hitecto beatae ut pe lais et quasarc hitecto beata vitae dicta sui architecto beatae vitae dicta sunt explicabo Sed ut pe lais et quasarc hitecto beatae ut pe lais et et quasarc hitecto beatae ut pe lais et et quasarc hitecto beatae ut pe lais et quasarc hitecto beata vitae dicta sui architecto beatae vitae dicta sunt explicaboSed ut pe lais et quasarc hitecto beatae ut pe lais et et quasarc hitecto beatae ut pe lais et et quasarc hitecto beatae ut pe lais et quasarc hitecto beata vitae dicta sui architecto beatae vitae dicta sunt explicabo',
        cName: 'productCard',
        isAvailable: false,
        deliveryTime: 10,
      },
    
    {
        gallery: [zahonL1,zahonL2,zahonL3],
        url : "/vyvyseny-zahon",
        title: 'Vyvýšené záhony L',
        category: ProductCategories.ZAHONY,
        dimensions: '200 x 70 cm',
        price: 15,
        text: 'Sed ut pe lais et quasarc hitecto beatae vitae dicta sui architecto beatae vitae dicta sunt explicabo. ',
        cName: 'productCard',
        isAvailable: true,
      },
      
      {
        gallery: [zahonXl,zahonXL2,zahonXL3],
        url : "/vyvyseny-zahon",
        title: 'Vyvýšené záhony XL',
        category: ProductCategories.ZAHONY,
        dimensions: '200 x 70 cm',
        price: 15,
        text: 'Sed ut pe lais et quasarc hitecto beatae vitae dicta sui architecto beatae vitae dicta sunt explicabo. ',
        cName: 'productCard',
        isAvailable: true,
      },
    {
      gallery: [hojda1, hojda2, hojda3],
      url: "/hojdacka",
      title: 'Hojdačka',
      category: ProductCategories.EXTERIOR,
      dimensions: '200 x 180 x 150 cm',
      price: 177,
      text: 'Sed ut pe lais et quasarc hitecto beatae vitae dicta sui architecto beatae vitae dicta sunt explicabo. ',
      cName: 'productCard',
      isAvailable: true,
    },
    
    {
      gallery: [hamak, hamak2, hamak3],
      url: "/stojan-na-hamak",
      title: 'Stojan na hamak',
      category: ProductCategories.EXTERIOR,
      dimensions: '200 x 120 x 150 cm',
      price: 177,
      text: 'Sed ut pe lais et quasarc hitecto beatae vitae dicta sui architecto beatae vitae dicta sunt explicabo. ',
      textDetailed : 'Sed ut pe lais et quasarc hitecto beatae ut pe lais et et quasarc hitecto beatae ut pe lais et et quasarc hitecto beatae ut pe lais et quasarc hitecto beata vitae dicta sui architecto beatae vitae dicta sunt explicabo Sed ut pe lais et quasarc hitecto beatae ut pe lais et et quasarc hitecto beatae ut pe lais et et quasarc hitecto beatae ut pe lais et quasarc hitecto beata vitae dicta sui architecto beatae vitae dicta sunt explicabo Sed ut pe lais et quasarc hitecto beatae ut pe lais et et quasarc hitecto beatae ut pe lais et et quasarc hitecto beatae ut pe lais et quasarc hitecto beata vitae dicta sui architecto beatae vitae dicta sunt explicaboSed ut pe lais et quasarc hitecto beatae ut pe lais et et quasarc hitecto beatae ut pe lais et et quasarc hitecto beatae ut pe lais et quasarc hitecto beata vitae dicta sui architecto beatae vitae dicta sunt explicabo',
      cName: 'productCard',
      isAvailable: true,
    },
    {
      gallery: [stol1, stol2, stol3],
      title: 'DOPLNOK',
      url: '/doplnok-1',
      category: ProductCategories.DOPLNKY,
      dimensions: '200 x 70 cm',
      price: 457,
      text: 'Sed ut pe lais et quasarc hitecto beatae vitae dicta sui architecto beatae vitae dicta sunt explicabo. ',
      cName: 'productCard',
      isAvailable: false,
      deliveryTime: 10,
    },
    {
        gallery: [zahonC,zahonC2,zahonC3],
        url : "/zahon-custom",
        title: 'Vyvýšené záhony na objednavku',
        category: ProductCategories.ZAHONY,
        dimensions: 'rozne velkosti',
        price: 15,
        text: 'Sed ut pe lais et quasarc hitecto beatae vitae dicta sui architecto beatae vitae dicta sunt explicabo. ',
        cName: 'productCard',
        isAvailable: true,
      },
];


  