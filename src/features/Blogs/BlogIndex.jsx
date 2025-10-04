import React from 'react';
import PostCard from './components/PostCard';
import { useFetchAllPosts } from './hooks/useFetchPosts';

const BlogIndex = () => {
  const { posts, loading, error } = useFetchAllPosts();

  if (loading) {
    return (
      <div className="p-8 text-center text-indigo-600 font-semibold text-lg">
        <svg className="animate-spin h-6 w-6 mr-3 inline" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Loading blog posts...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 text-center bg-red-100 border border-red-400 text-red-700 rounded-lg mx-auto max-w-lg">
        <h2 className="font-bold">Error Loading Posts</h2>
        <p>{error.message}</p>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="p-8 text-center text-gray-500">
        <h2 className="text-2xl font-bold">No Blog Posts Yet!</h2>
        <p>Check back soon for new content.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-10 border-b pb-4">
        Our Developer Blog
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogIndex;
