import React from 'react';
import './header-bar.css';
import Sidebar from './Sidebar/Sidebar';
import Menu from "./Menu/Menu";
import { CiShoppingCart } from "react-icons/ci";
import logo from "./image.png"
import { Link } from 'react-router-dom';



const HeaderBar = () => {
  return (
    <div className="contactBar">
      <Link className='logoContainer' to= '/' ><img src = {logo} className='logo'></img></Link>
      <Sidebar />
      <Menu />
      <CiShoppingCart className='cart' size={35}/>
    </div>  
  );
};

export default HeaderBar;
