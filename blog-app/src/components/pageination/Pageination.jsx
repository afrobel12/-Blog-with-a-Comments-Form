import Link from "next/link"
import styles from "./pageination.module.css"

export default function Pageination() {
    return (
        <div className={styles.container}>
            <button className={styles.button}>Previous</button>
            <button className={styles.button}>Next</button>
        </div>
    )
}