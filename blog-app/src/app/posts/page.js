import { sql } from "@vercel/postgres";
import Link from "next/link"
import styles from "./page.module.css"
import DeleteButton from "@/components/DeleteButton";



export default async function PostsPage() {

    let posts = (await sql`SELECT * FROM posts`).rows
   

    return (
        <div>
            <h1>Posts</h1>
            <div className={styles.postContainer}>
                {posts.map(post => (
                    <div key={post.postsid}>
                        <h2 className={styles.postTitle}>{post.title}</h2>
                        <Link href={`/posts/${post.postsid}`}>Read More</Link>
                        <DeleteButton postsid={post.postsid} />
                        </div>
                ))}
            </div>
        </div>
    )
}