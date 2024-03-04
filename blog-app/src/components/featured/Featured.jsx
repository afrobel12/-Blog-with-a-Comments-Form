import styles from "./featured.module.css"
import Image from "next/image"
import { sql } from "@vercel/postgres"
import Link from "next/link"

export default async function Featured() {
    let posts = (await sql`SELECT * FROM posts`).rows
    return (
        
        <div className={styles.container}>
        <h1 className={styles.title}>
            <b>Hello, this is Abels blog</b>
            Discover my posts here 
        </h1>
        <div className={styles.post}>
        {posts.map(post => (
        <div key={post.postsid} >
            <div className={styles.imgContainer}>
            {post.imgurl && <Image src={post.imgurl} alt=" " fill className={styles.image} />}
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.postTitle}>{post.title}</h1>
                <p className={styles.postDesc}>{post.content}</p>
                <Link className={styles.button} href="/posts">Read More</Link>
            </div>
        </div>
         ))}
          
        </div>
        </div>
    )
}

