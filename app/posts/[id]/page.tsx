//posts/[id]/page.tsx
import axios from 'axios';
import Image from 'next/image';
import { Post } from '../../types/index';

interface PostPageProps {
  params: {
    id: string;
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const response = await axios.get(`https://dummyjson.com/posts/${params.id}`);
  const post: Post = response.data;

  return (
    <main className="max-w-3xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
      <p className="text-gray-700 mb-4">{post.body}</p>
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <Image src="/images/eye.svg" alt="Views" width={24} height={24} />
          <span className="ml-2 text-green-600 font-semibold">{post.views}</span>
        </div>
      </div>
    </main>
  );
}
