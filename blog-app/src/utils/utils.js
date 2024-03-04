"use server"
import { sql } from "@vercel/postgres"
import { revalidatePath } from "next/cache"

export async function handleDelete(postsid) {
    await sql`DELETE FROM posts WHERE postsid=${postsid}`
    revalidatePath('/posts')
}

