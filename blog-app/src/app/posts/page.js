import { sql } from "@vercel/postgres";
import Link from "next/link"

export default async function PostsPage() {

    let posts = (await sql`SELECT * FROM posts`).rows

    return (
        <div>
            <h1>Posts</h1>
            <div className="flex flex-row">
                {posts.map(post => (
                    <div className="border-solid border-yellow-300" key={post.id}>
                        <h2>{post.title}</h2>
                        <Link href={`/posts/${post.id}`}>Read More</Link>
                        </div>
                ))}
            </div>
        </div>
    )
}