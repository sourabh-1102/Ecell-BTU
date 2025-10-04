import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
  const { id, title, summary, date, author, imageUrl } = post;
  
  // Format the date
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric', month: 'short', day: 'numeric'
  });

  return (
    <article className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1">
      <Link to={`/blog/${id}`} className="block">
        {/* Image Section */}
        <div className="h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={`Cover for ${title}`} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
            onError={(e) => { 
                e.target.onerror = null; 
                e.target.src="https://img.freepik.com/free-vector/hello-comic-style_53876-26585.jpg?semt=ais_hybrid&w=740&q=80" 
            }}
          />
        </div>

        {/* Content Section */}
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-2 leading-snug">
            {title}
          </h2>
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {summary}
          </p>
          
          {/* Metadata */}
          <div className="flex justify-between items-center text-xs text-gray-500 border-t pt-4">
            <span className="font-medium text-indigo-600">
              {author}
            </span>
            <span>
              {formattedDate}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default PostCard;
