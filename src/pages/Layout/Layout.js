import React  from 'react';
import { Outlet} from "react-router-dom";
import HeaderBar from '../../body/header-bar/header-bar';
import styles from "./Layout.module.css"
import Footer from './Footer/Footer';

const Layout = () => {
  return (
    <div className={styles.root}>
      <HeaderBar />
      <Outlet />
      <Footer />
    </div>
  )
};

export default Layout;