import React from "react";
import styles from "./Text.module.css"
import { Heading } from '@chakra-ui/react'

const Text = ({header,popis}) => {
    return (
    <div class={styles.textContainer}>
        <Heading class={styles.header}>{header}</Heading>
        <Heading class={styles.popis} as='h4' size='md'>{popis}</Heading>
    </div> 
)}

export default Text;