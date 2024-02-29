import { sql } from "@vercel/postgres";

export default async function page({params}) {
    const posts = (await sql `SELECT * FROM posts WHERE id= ${params.id}`).rows[0]

    return (
        <div>
            <h2>{posts.title}</h2>
            <h3>{posts.content}</h3>
        </div>
    )
}