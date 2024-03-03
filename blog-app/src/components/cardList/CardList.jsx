
import styles from "./cardlist.module.css"
import Pageination from "../pageination/Pageination"
import Card from "../card/Card"


export default function CardList() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Recent Posts</h1>
            <div className={styles.posts}>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
           <Pageination />
        </div>
    )
}