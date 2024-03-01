import { sql } from "@vercel/postgres";
import Link from "next/link"
import styles from "./page.module.css"

export default async function PostsPage() {

    let posts = (await sql`SELECT * FROM posts`).rows

    return (
        <div>
            <h1>Posts</h1>
            <div className={styles.postContainer}>
                {posts.map(post => (
                    <div key={post.id}>
                        <h2 className={styles.postTitle}>{post.title}</h2>
                        <Link href={`/posts/${post.id}`}>Read More</Link>
                        </div>
                ))}
            </div>
        </div>
    )
}