import { getSortedPostsData } from '@/lib/posts';
import ListItem from './ListItem';

const Posts = () => {
  const posts = getSortedPostsData();

  return (
    <section className="flex flex-col pt-8">
      <h2 className="text-2xl">Blog</h2>
      <ul>
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
};

export default Posts;
