/**
 * Custom hook to simulate fetching blog posts from an API.
 * This is where you would integrate real API calls (e.g., Axios or fetch).
 */
import { useState, useEffect } from 'react';

// --- MOCK DATA ---
const MOCK_POSTS = [
  { 
    id: 'mastering-hooks', 
    title: 'Mastering React Hooks: The Essentials', 
    summary: 'A deep dive into useState, useEffect, and custom hooks for building robust and scalable applications.', 
    content: '<h2>Introduction to Hooks</h2><p>React Hooks revolutionized component design by allowing functional components to manage state and lifecycle features.</p><p>The two most fundamental hooks are <code>useState</code> for state management and <code>useEffect</code> for side effects.</p><h3>useState</h3><p><code>useState</code> lets you add state to functional components. It returns an array with the current state value and a function to update it.</p><h3>useEffect</h3><p><code>useEffect</code> handles side effects like data fetching, subscriptions, or manually changing the DOM.</p>', 
    date: '2024-05-01', 
    author: 'Jane Doe', 
    category: 'React',
    imageUrl: 'https://placehold.co/600x400/10B981/ffffff?text=REACT+HOOKS'
  },
  { 
    id: 'tailwind-tips', 
    title: '5 Tailwind CSS Tricks You Need to Know', 
    summary: 'Boost your CSS workflow with these lesser-known utility classes and configurations.', 
    content: '<h2>Utility First Magic</h2><p>Tailwind CSS is a utility-first framework that allows for rapid UI development...</p>', 
    date: '2024-04-15', 
    author: 'John Smith', 
    category: 'CSS',
    imageUrl: 'https://placehold.co/600x400/6366F1/ffffff?text=TAILWIND+CSS'
  },
  { 
    id: 'async-await', 
    title: 'Understanding Async/Await in JavaScript', 
    summary: 'A beginner-friendly guide to asynchronous programming and cleaning up your promise chains.', 
    content: '<h2>Promises vs. Async/Await</h2><p>Before async/await, handling multiple promises could lead to deeply nested <code>.then()</code> chains...</p>', 
    date: '2024-03-28', 
    author: 'Alice Brown', 
    category: 'JavaScript',
    imageUrl: 'https://placehold.co/600x400/F97316/ffffff?text=JS+ASYNC'
  },
];
// --- END MOCK DATA ---

const SIMULATED_DELAY = 500; // 0.5 second delay

/**
 * Fetches all posts.
 */
export function fetchAllPosts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_POSTS);
    }, SIMULATED_DELAY);
  });
}

/**
 * Fetches a single post by ID.
 * @param {string} id The slug/ID of the post.
 */
export function fetchPostById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const post = MOCK_POSTS.find(p => p.id === id);
      if (post) {
        resolve(post);
      } else {
        reject(new Error(`Post with ID "${id}" not found.`));
      }
    }, SIMULATED_DELAY);
  });
}

/**
 * Custom hook to manage the state of fetching blog posts.
 * @returns {{posts: Array, loading: boolean, error: Error | null}}
 */
export function useFetchAllPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    fetchAllPosts()
      .then(data => {
        if (isMounted) {
          setPosts(data);
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
      isMounted = false; // Cleanup function to prevent state update on unmounted component
    };
  }, []);

  return { posts, loading, error };
}
