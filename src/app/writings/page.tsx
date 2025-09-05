import Link from "next/link";
import { formatDate, getBlogPosts } from "@/app/writings/utils";

export const metadata = {
  title: "Writings",
  description: "Read my blog."
};

export default function Page() {
  let allBlogs = getBlogPosts();

  return (
    <section>
      <h1 className='font-semibold text-2xl mb-8 tracking-tighter'>My Writings</h1>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map(post => (
          <Link key={post.slug} className='flex flex-col space-y-1 mb-4' href={`/writings/${post.slug}`}>
            <div className='w-full flex flex-col md:flex-row space-x-0 md:space-x-2'>
              <p className='text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums'>{formatDate(post.metadata.publishedAt, false)}</p>
              <p className='text-neutral-900 dark:text-neutral-100 tracking-tight'>{post.metadata.title}</p>
            </div>
          </Link>
        ))}
    </section>
  );
}
