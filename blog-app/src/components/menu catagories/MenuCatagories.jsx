import styles from "./menuCatagories.module.css"
import Link from "next/link"

export default function MenuCatagories() {
    return(
        <div className={styles.CatagoryList}>
            <Link href="/" 
              className={`${styles.category } ${styles.style}`}>
              Style  
            </Link>
            <Link href="/" className={`${styles.category} ${styles.fashion}`} >
          
              Fashion
            </Link>
            <Link href="/" className={`${styles.category} ${styles.food}`} >
              
              Food
            </Link>
            <Link href="/" className={`${styles.category} ${styles.travel}`} >
              
              Travel
            </Link>
        </div>
    )
}