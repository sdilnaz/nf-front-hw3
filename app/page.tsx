
'use client'
import React, { useEffect, useState } from 'react';
import { Post } from './types/index';
import { fetchPosts, addPost, updatePost, deletePost } from './api/posts';
import PostComponent from '@/components/post';
import ProtectedRoute from '@/components/protectedRoute';
import ThemeToggle from '@/components/themeToggle';
import { useTheme } from './context/ThemeToggle';

const HomePage: React.FC = () => {
  const { theme } = useTheme();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const fetchedPosts = await fetchPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      }
    };

    loadPosts();
  }, []);

  const handleAddPost = async (newPost: Post) => {
    try {
      const addedPost = await addPost(newPost);
      setPosts([...posts, addedPost]);
    } catch (error) {
      console.error('Failed to add post:', error);
    }
  };

  const handleUpdatePost = async (updatedPost: Post) => {
    try {
      const updatedPostData = await updatePost(updatedPost);
      const updatedPosts = posts.map((post) =>
        post.id === updatedPostData.id ? updatedPostData : post
      );
      setPosts(updatedPosts);
    } catch (error) {
      console.error('Failed to update post:', error);
    }
  };

  const handleDeletePost = async (postId: string) => {
    try {
      await deletePost(postId);
      const updatedPosts = posts.filter((post) => post.id !== postId);
      setPosts(updatedPosts);
    } catch (error) {
      console.error('Failed to delete post:', error);
    }
  };

  return (
    <ProtectedRoute>
      
      <main className={`max-w-3xl mx-auto p-4 ${theme === 'dark' ? 'dark' : ''}`}>
        <h1 className="text-4xl font-bold mb-8">Posts</h1>
        {posts.length === 0 ? (
          <p>No posts available.</p>
        ) : (
          posts.map((post) => (
            <PostComponent
              key={post.id}
              post={post}
              onUpdatePost={handleUpdatePost}
              onDeletePost={handleDeletePost}
            />
          ))
        )}
        <button onClick={() => handleAddPost({ title: 'New Post', content: '...' })}>
          Add Post
        </button>
      </main>
    </ProtectedRoute>
  );
};

export default HomePage;
