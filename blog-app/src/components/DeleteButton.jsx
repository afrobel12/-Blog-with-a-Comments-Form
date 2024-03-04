"use client"

import { handleDelete } from "@/utils/utils"

export default function DeleteButton({postsid}) {
    return (
    <button onClick={() => handleDelete(postsid)}>Delete</button>
    )
}