import React from "react"
import styles from "./Menu.module.css"
import { SidebarData } from '../Sidebar/SidebarData'
import {Link} from "react-router-dom";

const Menu = () => {
    const pole = SidebarData.slice();
    delete pole[0];
    return (
      <ul className={styles.menu}>
        {pole.map((sidebarItem, index) => (
          <li key={index} className={sidebarItem.cName}>
            <Link to={sidebarItem.path}>
              {sidebarItem.title}
            </Link>
          </li>
        ))}
      </ul>
    );
  };
export default Menu
