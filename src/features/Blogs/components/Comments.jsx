import React, { useState } from 'react';

const Comments = ({ postId }) => {
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [commentsList, setCommentsList] = useState([
    { id: 1, user: 'User123', text: 'Great article! Very helpful introduction to the topic.', date: '2024-05-10' },
    { id: 2, user: 'ReactFan', text: 'I agree, the examples for useEffect were particularly clear.', date: '2024-05-11' },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;

    setIsSubmitting(true);
    // Simulate API call to post comment
    setTimeout(() => {
      const newComment = {
        id: Date.now(),
        user: 'You', // Assuming the user is authenticated
        text: comment.trim(),
        date: new Date().toISOString().split('T')[0],
      };
      setCommentsList([newComment, ...commentsList]);
      setComment('');
      setIsSubmitting(false);
      // In a real app, you would save this to Firestore/DB
    }, 1000);
  };

  return (
    <section className="mt-12 p-8 bg-gray-50 rounded-xl shadow-inner">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
        Comments ({commentsList.length})
      </h3>

      {/* Comment Submission Form */}
      <form onSubmit={handleSubmit} className="mb-8">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Join the discussion... (Max 500 characters)"
          rows="4"
          maxLength="500"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 resize-none text-gray-700"
          required
        ></textarea>
        <button
          type="submit"
          disabled={isSubmitting || !comment.trim()}
          className={`mt-3 px-6 py-2 rounded-lg text-white font-semibold transition-colors duration-200 ${
            isSubmitting || !comment.trim()
              ? 'bg-indigo-300 cursor-not-allowed'
              : 'bg-indigo-600 hover:bg-indigo-700 shadow-md'
          }`}
        >
          {isSubmitting ? 'Posting...' : 'Post Comment'}
        </button>
      </form>

      {/* Comment List */}
      <div className="space-y-6">
        {commentsList.map((c) => (
          <div key={c.id} className="border-b pb-4 last:border-b-0 last:pb-0">
            <div className="flex items-baseline mb-1">
              <span className="font-bold text-sm text-gray-900">{c.user}</span>
              <span className="ml-3 text-xs text-gray-500">
                {new Date(c.date).toLocaleDateString()}
              </span>
            </div>
            <p className="text-gray-700 text-sm">{c.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Comments;
