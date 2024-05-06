import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home";
import Geodomy from "./pages/Geodomy";
import Contact from "./pages/Contact/Contact";
import NoPage from "./pages/NoPage";
import "./index.css"
import Interier from './pages/Interier';
import Zahony from './pages/Zahony';
import Exterier from './pages/Exterier';
import Doplnky from './pages/Accessories';
import { ChakraProvider } from '@chakra-ui/react'
import ProductPage from './body/ProductPage/ProductPage';
import {Products} from './body/ProductGrid/Products'


function App() {
  const fetchData = async () => {
    const res = await fetch("http://localhost:4000/");
    console.log(res);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ChakraProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="zahony" element={<Zahony />} />
          <Route path="geodomy" element={<Geodomy />} />
          <Route path="kontakt" element={<Contact />} />
          <Route path="interier" element={<Interier />} />
          <Route path="exterier" element={<Exterier />} />
          <Route path="doplnky" element={<Doplnky />} />
           {/* Dynamically create ProductPage routes */}
           {Products.map((product) => (
              <Route 
                key={product.url} 
                path={product.url} 
                element={<ProductPage hovno={product} />} 
              />
            ))}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </ChakraProvider>
  )
}

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="zahony" element={<Zahony />} />
//           <Route path="geodomy" element={<Geodomy />} />
//           <Route path="kontakt" element={<Contact />} />
//           <Route path="interier" element={<Interier />} />
//           <Route path="exterier" element={<Exterier />} />
//           <Route path="doplnky" element={<Doplnky />} />

//           <Route path="*" element={<NoPage />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);