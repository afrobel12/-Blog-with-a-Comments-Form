import Link from "next/link"
import styles from "./cardlist.module.css"
import Pageination from "../pageination/Pageination"

export default function CardList() {
    return (
        <div className={styles.container}>cardlist
           <Pageination />
        </div>
    )
}