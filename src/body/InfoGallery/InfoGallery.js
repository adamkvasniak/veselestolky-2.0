import React from "react";
import styles from "./InfoGallery.module.css";
import connect from "./connection.gif";
import hex from "./hexagonal.gif";
import pyramida from "./pyramid.gif"

 export  default function InfoGallery() {
    return (
    <div className={styles.infoGallery}>
        <h7 className={styles.header}>Máme riešenia na veľké výzvy</h7>
        <div className={styles.infografika}>
            <div className={styles.infoitem}>
                <i><img src={connect} alt=""></img></i>
                <div className={styles.text}>
                    <h7>Unikátny dizajn</h7>
                    <p>Lorem ipsum boha ti maria tvojho otca syna ducha svateho amen</p>
                </div>
            </div>    
        
            <div className={styles.infoitem}>
                <i><img src={hex} alt=""></img></i>
                <div className={styles.text}>
                    <h7>Unikátny dizajn</h7>
                    <p>Lorem ipsum boha ti maria tvojho otca syna ducha svateho amen</p>
                </div>
            </div>
            <div className={styles.infoitem}>
                <i><img src={pyramida} alt=""></img></i>
                <div className={styles.text}>
                    <h7>Unikátny dizajn</h7>
                    <p>Lorem ipsum boha ti maria tvojho otca syna ducha svateho amen</p>
                </div>
            </div>
        </div>
    </div>
    )
}