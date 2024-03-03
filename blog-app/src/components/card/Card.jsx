import Link from "next/link"
import styles from "./card.module.css"
import Image from "next/image"

export default function Card() {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
               <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
            </div>
             <div className={styles.textContainer}>
               <div className={styles.detail}>
                <b className={styles.catagory}>culture</b>
                </div>
                    <b >Lorem ipsum dolor sit amet alim consectetur adipisicing elit.</b>
                    <p className={styles.disc}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                     Cupiditate, quam nisi magni ea laborum inventore voluptatum l
                     audantium repellat ducimus unde aspernatur fuga. Quo, 
                     accusantium quisquam! Harum unde sit culpa debitis.  
                    </p>
                    <Link href="/" className={styles.link}>Read more..</Link>
             </div>
        </div>
    )
}

