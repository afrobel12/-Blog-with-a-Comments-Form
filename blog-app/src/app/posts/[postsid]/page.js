import SubmitButton from "@/components/SubmitButton";
import { sql } from "@vercel/postgres";
import Image from "next/image";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation"



export default async function Page({params}) {
    const post = (await sql `SELECT * FROM posts WHERE postsid= ${params.postsid}`).rows[0]
    
    async function handleAddComment(formData) {
        "use server"
        const comment = formData.get('comment')
        const postid = params.postsid

        await sql `INSERT INTO comments (comment, postid) VALUES(${comment}, ${postid})`

        revalidatePath ('/posts/[postsid]')

        
    }  
    
    const comments = (await sql`
        SELECT * FROM comments
        LEFT JOIN posts ON posts.postsid = comments.postid
        WHERE postsid = ${params.postsid}`).rows;
       
    let commentDisplay = comments.length > 0 
        ? comments.map((post )=> 
        <div key={post.postid}> 
        <h3>{post.comment}</h3> 
        </div> )
        : <div>No Comment</div>

        
    return (
        <div> 
            <h2>{post.title}</h2>
            <h3>{post.content}</h3>
            {post.imgurl && <Image src={post.imgurl} width={300} height={500} alt=""/>}  
          <div>
            <form action={handleAddComment}>
                <label>add comment:</label>
                <input name="comment" placeholder="comment"/>
                <SubmitButton />
            </form>
          </div> 
        <div >comments:<h3>{commentDisplay}</h3></div>   
        </div>
    )
}