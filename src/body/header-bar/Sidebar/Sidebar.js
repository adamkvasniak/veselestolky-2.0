import React, { useState } from 'react';
import './Sidebar.css';
import { FaBars } from 'react-icons/fa';
import { IoClose } from "react-icons/io5";
import {Link} from "react-router-dom";
import { SidebarData } from './SidebarData';


function Navbar(){
    const [sidebar, setSideBar] = useState(false)
    const showSidebar = () => setSideBar(!sidebar)
    return (
        <>
        <div className='navbar'>
            <Link to="#" classname= 'menu-bars'>
                <FaBars classname="icon-bars" size={30} onClick={showSidebar}/>
            </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items'>
                <li className='navbar-toggle'>
                    <Link to= '#' className='menu-bars' onClick={showSidebar}>
                    <IoClose className='icona'/>
                    </Link>
                </li>
                
                {SidebarData.map((item,index) => {
                    return (
                        <li key ={index} className={item.cName}>
                            <Link to={item.path} onClick={showSidebar}>
                                <img src = {item.icon}></img>
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
        </>
    )
}

export default Navbar;
