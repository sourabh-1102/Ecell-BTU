import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchPostById } from './hooks/useFetchPosts';
import Comments from './components/Comments';

const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setPost(null); // Clear previous post content

    fetchPostById(postId)
      .then(data => {
        if (isMounted) {
          setPost(data);
          setError(null);
        }
      })
      .catch(err => {
        if (isMounted) {
          setError(err);
        }
      })
      .finally(() => {
        if (isMounted) {
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [postId]);

  if (loading) {
    return <div className="p-16 text-center text-indigo-600 font-semibold">Loading post details...</div>;
  }

  if (error) {
    return (
      <div className="container mx-auto p-16 text-center">
        <h2 className="text-3xl font-bold text-red-600 mb-4">Post Not Found (404)</h2>
        <p className="text-gray-600">{error.message}</p>
        <Link to="/blog" className="mt-6 inline-block text-indigo-600 hover:text-indigo-800 font-medium">
          &larr; Go back to Blog Index
        </Link>
      </div>
    );
  }

  const formattedDate = post.date 
    ? new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
      })
    : 'Date Unavailable';

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Link to="/blog" className="text-indigo-600 hover:text-indigo-800 font-medium mb-6 block">
        &larr; Back to all posts
      </Link>

      <article className="bg-white p-8 rounded-xl shadow-2xl">
        <header className="mb-8 border-b pb-4">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2 leading-tight">
            {post.title}
          </h1>
          <div className="text-sm text-gray-500">
            <span className="mr-4">By: <span className="font-semibold text-indigo-600">{post.author}</span></span>
            <span>Published: {formattedDate}</span>
          </div>
        </header>

        <figure className="mb-8 rounded-lg overflow-hidden">
          <img 
            src={post.imageUrl} 
            alt={`Image for ${post.title}`} 
            className="w-full h-auto object-cover" 
            onError={(e) => { 
                e.target.onerror = null; 
                e.target.src="https://placehold.co/800x500/D1D5DB/4B5563?text=Image+Unavailable" 
            }}
          />
        </figure>

        <section 
          className="prose max-w-none text-gray-800 leading-relaxed space-y-4"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
      </article>

      <Comments postId={postId} />
    </div>
  );
};

export default PostDetail;
