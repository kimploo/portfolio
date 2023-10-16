import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"

export default function Learn() {
  return (
    <div className="prose dark:prose-invert">
      {allPosts
      .filter(post => post.path === 'LEARN')
      .map((post) => (
        <article key={post._id}>
          <Link href={post.slug}>
            <h2>{post.title}</h2>
          </Link>
          {post.description && <p>{post.description}</p>}
        </article>
      ))}
    </div>
  )
}
