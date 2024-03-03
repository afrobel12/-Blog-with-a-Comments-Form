import { sql } from "@vercel/postgres";
import SubmitButton from "@/components/SubmitButton";

export default function Page() {
    async function handleAddComment(formData) {
        "use server"
        const comment = formData.get('comment')

        await sql `INSERT INTO comments (comment) VALUES(${comment})`

    }
    return (
        <div>
            <form action={handleAddComment} className="w-6/12 flex flex-col justify-center text-black">
            <label className='text-amber-400 text-lg'>Comment</label>
            <textarea name="comment" placeholder="comment"/>
            <SubmitButton />
            </form>
        </div>
    )
}