import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Post } from '@/app/types';

interface PostProps {
  post: Post;
}

const PostComponent: React.FC<PostProps> = ({ post }) => {
  return (
    <Link href={`/posts/[id]`} as={`/posts/${post.id}`}>
      <div className="post mb-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
        <p className="text-gray-700 mb-4">{post.body}</p>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <Image src="/images/eye.svg" alt="Likes" width={24} height={24} />
            <span className="ml-2 text-green-600 font-semibold">{post.views}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostComponent;
