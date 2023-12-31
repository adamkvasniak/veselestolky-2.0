import React from "react";
import styles from "./Footer.module.css"
import {Link} from "react-router-dom"

function Footer() {
    return (
        <div class={styles.footerContainer}>
            <div class={styles.kontaktText}>
                <h1>Kontaktujte nás</h1>
                <p>Máte nejaké otázky týkajúce sa našich produktov?
                    Kontaktujte nás a my sa vám ozveme!</p>
            </div>
            <div class={styles.telKontakt}>
                <a><i class="fas fa-phone"></i>+421 911 690 230</a>
                <Link to="kontakt">Napíš nám!</Link>
            </div>
        </div>
    )
}

export default Footer;