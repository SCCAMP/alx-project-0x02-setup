import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { PostProps } from '@/interfaces';

interface PostsPageProps {
  posts: PostProps[];
}

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-6">Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post, index) => (
            // Mapping API 'body' to our 'content' prop
            <PostCard 
              key={index} 
              title={post.title} 
              content={post.content} 
              userId={post.userId} 
            />
          ))}
        </div>
      </main>
    </div>
  );
};

// Fetching data at build time
export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  // Map API data to match our interface if necessary
  // The API returns { userId, id, title, body }
  const posts = data.map((post: any) => ({
    title: post.title,
    content: post.body,
    userId: post.userId
  }));

  return {
    props: {
      posts,
    },
  };
}

export default Posts;