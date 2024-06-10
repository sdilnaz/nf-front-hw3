// // api/posts.ts
// import axiosInstance from './axiosInstance';
// import { Post } from '../types/index';

// export const fetchPosts = async (): Promise<Post[]> => {
//   const response = await axiosInstance.get('/posts');
//   return response.data.posts;
// };

// export const fetchPost = async (id: string): Promise<Post> => {
//   const response = await axiosInstance.get(`/posts/${id}`);
//   return response.data;
// };

import axiosInstance from './axiosInstance';
import { Post } from '../types/index';

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await axiosInstance.get('/posts');
  return response.data.posts;
};

export const fetchPost = async (id: string): Promise<Post> => {
  const response = await axiosInstance.get(`/posts/${id}`);
  return response.data;
};

export const addPost = async (newPost: Post): Promise<Post> => {
  const response = await axiosInstance.post('/posts', newPost);
  return response.data;
};

export const updatePost = async (updatedPost: Post): Promise<Post> => {
  const response = await axiosInstance.put(`/posts/${updatedPost.id}`, updatedPost);
  return response.data;
};

export const deletePost = async (postId: string): Promise<void> => {
  await axiosInstance.delete(`/posts/${postId}`);
};
