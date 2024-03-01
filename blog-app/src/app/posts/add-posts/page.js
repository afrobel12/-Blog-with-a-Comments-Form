import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation"

import SubmitButton from "@/components/SubmitButton";


export default function Page() {
    async function handleAddPost(formData) {
        "use server"
        const title = formData.get('title')
        const content = formData.get('content')

        await sql`INSERT INTO posts (title, content) VALUES(${title}, ${content})`

        revalidatePath('/posts')

        redirect('/posts')

    }

    return (
        <div>
            <div>
                <form action={handleAddPost} className="w-6/12 flex flex-col justify-center text-black">
                    <label className='text-amber-400 text-lg'>Name</label>
                    <input name="title" placeholder="Title"/>
                    <label className='text-amber-400 text-lg'>Content</label>
                    <textarea name="content" placeholder="content" />
                    <label className="text-amber-400 text-lg">Image</label>
                    <input name="img_url" placeholder="img_url"></input>
                    <SubmitButton />
                </form>
            </div>
        </div>
    )
}