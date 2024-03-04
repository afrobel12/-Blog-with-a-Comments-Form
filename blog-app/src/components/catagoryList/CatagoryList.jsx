import React from "react"
import Link from "next/link"
import styles from "./catagoryList.module.css"
import Image from "next/image"

export default function CatagoryList() {
    return (
        <div className={styles.container}>
          <h1 className={styles.title}>Popular Catagories</h1>
           <div className={styles.categories}>
            <Link href="/" 
              className={`${styles.category } ${styles.style}`}>
              style
              
            </Link>
            <Link href="/" className={`${styles.category} ${styles.fashion}`} >
              fashion
            </Link>
            <Link href="/" className={`${styles.category} ${styles.food}`} >
              food
            </Link>
            <Link href="/" className={`${styles.category} ${styles.travel}`} >
              travel
            </Link>
            <Link href="/" className={`${styles.category} ${styles.culture}`} >
              culture
            </Link>
            <Link href="/" className={`${styles.category} ${styles.coding}`} >
              coding
            </Link>
           </div>
        
        </div>
    )
}