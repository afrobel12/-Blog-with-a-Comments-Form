import Link from "next/link"
import styles from "./menu.module.css"
import Image from "next/image"
import MenuCatagories from "../menu catagories/MenuCatagories"

export default function Menu() {
    return (
        <div className={styles.container}>
        <h2 className={styles.subtitle}>{"What's hot"}</h2>
        <h1 className={styles.title}>Most Popular</h1>
        <div className={styles.items}>
            <Link href="/" className={styles.item}>
                <div className={styles.imgContainer}>
                </div>
                <div className={styles.textContainer}>
                    <span className={`${styles.catagory} ${styles.travel}`}>Travel</span>
                    <h3 className={styles.postTitle}>random textrandom textrandom textrandom text</h3>
                </div>
            </Link>
            <Link href="/" className={styles.item}>
                <div className={styles.imgContainer}>    
                </div>
                <div className={styles.textContainer}>
                    <span className={`${styles.catagory} ${styles.culture}`}>Culture</span>
                    <h3 className={styles.postTitle}>random textrandom textrandom textrandom text</h3>
                </div>
            </Link>
            <Link href="/" className={styles.item}>
                <div className={styles.imgContainer}> 
                </div>
                <div className={styles.textContainer}>
                    <span className={`${styles.catagory} ${styles.food}`}>Food</span>
                    <h3 className={styles.postTitle}>random textrandom textrandom textrandom text</h3>
                </div>
            </Link>
            <Link href="/" className={styles.item}>
                <div className={styles.imgContainer}>   
                </div>
                <div className={styles.textContainer}>
                    <span className={`${styles.catagory} ${styles.fashion}`}>Fashion</span>
                    <h3 className={styles.postTitle}>random textrandom textrandom textrandom text</h3>
                </div>
            </Link>
        </div>
        <h2 className={styles.subtitle}>Discover by topic</h2>
        <h1 className={styles.title}>Catagories</h1>
        <MenuCatagories />
        <h2 className={styles.subtitle}>Choosen by the editor</h2>
        <h1 className={styles.title}>Editors pick</h1>
        <div className={styles.items}>
            <Link href="/" className={styles.item}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                </div>
                <div className={styles.textContainer}>
                    <span className={`${styles.catagory} ${styles.travel}`}>Travel</span>
                    <h3 className={styles.postTitle}>random textrandom textrandom textrandom text</h3>
                </div>
            </Link>
            <Link href="/" className={styles.item}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                </div>
                <div className={styles.textContainer}>
                    <span className={`${styles.catagory} ${styles.culture}`}>Culture</span>
                    <h3 className={styles.postTitle}>random textrandom textrandom textrandom text</h3>
                </div>
            </Link>
            <Link href="/" className={styles.item}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                </div>
                <div className={styles.textContainer}>
                    <span className={`${styles.catagory} ${styles.food}`}>Food</span>
                    <h3 className={styles.postTitle}>random textrandom textrandom textrandom text</h3>
                </div>
            </Link>
            <Link href="/" className={styles.item}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                </div>
                <div className={styles.textContainer}>
                    <span className={`${styles.catagory} ${styles.fashion}`}>Fashion</span>
                    <h3 className={styles.postTitle}>random textrandom textrandom textrandom text</h3>
                </div>
            </Link>
        </div>

        </div>
    )
}