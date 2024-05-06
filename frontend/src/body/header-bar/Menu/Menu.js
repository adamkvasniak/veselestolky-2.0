import React from "react"
import styles from "./Menu.module.css"
import { SidebarData } from '../Sidebar/SidebarData'
import { Link, useLocation } from 'react-router-dom';

const Menu = () => {
  const location = useLocation();
  const pole = SidebarData.slice();

  return (
    <ul className={styles.menu}>
      {pole.map((sidebarItem, index) => (
        <li
          key={index}
          className={`${styles.menuItem} ${location.pathname === sidebarItem.path ? styles.activeMenuItem : ''}`}
        >
          <Link to={sidebarItem.path}>
            {sidebarItem.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Menu
