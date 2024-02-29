import Link from "next/link"
export default function Nav() {
    return (
        <div>
            <ol className="flex flex-row p-3">
                <li className="m-4"><Link href='/'>Home</Link></li>
                <li className="m-4"><Link href='/posts'>Posts</Link></li>
                <li className="m-4"><Link href='/posts/add-posts'>Add new post</Link></li>
            </ol>
        </div>
    )
}