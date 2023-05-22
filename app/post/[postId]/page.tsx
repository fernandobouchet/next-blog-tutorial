import getFormattedDate from '@/lib/getFormattedDate';
import { getPostData, getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    postId: string;
  };
};

export const generateStaticParams = () => {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    postId: post.id,
  }));
};

export const generateMetadata = async ({ params }: Props) => {
  const posts = getSortedPostsData();
  const { postId } = params;

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  } else {
    return {
      title: post.title,
    };
  }
};

const Post = async ({ params }: Props) => {
  const posts = getSortedPostsData();
  const { postId } = params;

  if (!posts.find((post) => post.id === postId)) {
    notFound();
  }

  const { title, date, contentHtml } = await getPostData(postId);
  const pubDate = getFormattedDate(date);

  return (
    <main className="prose prose-xl prose-slate dark:prose-invert mx-auto max-w-none px-10 md:max-w-xl pb-10">
      <h1 className="text-2xl mt-4 mb-0">{title}</h1>
      <p className="mt-0">{pubDate}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <p className="pt-5">
          <Link href="/">← Back to home</Link>
        </p>
      </article>
    </main>
  );
};

export default Post;
