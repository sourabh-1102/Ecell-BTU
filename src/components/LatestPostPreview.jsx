import React from "react";

const BlogSection = () => {
  const blogs = [
    {
      date: "July 19, 2021",
      title: "Our First Event",
      description:
        "This is our first event and bus itna hi...",
      image:
        "https://img.freepik.com/free-vector/hello-comic-style_53876-26585.jpg?semt=ais_hybrid&w=740&q=80",
      link: "#",
    },
    {
      date: "April 07, 2021",
      title: "Working with legacy stacks",
      description:
        "This is a section of some simple filler text, also known as placeholder text.",
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600",
      link: "#",
    },
    {
      date: "March 15, 2021",
      title: "10 best smartphones for devs",
      description:
        "This is a section of some simple filler text, also known as placeholder text.",
      image:
        "https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600",
      link: "#",
    },
    {
      date: "January 27, 2021",
      title: "8 High performance Notebooks",
      description:
        "This is a section of some simple filler text, also known as placeholder text.",
      image:
        "https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600",
      link: "#",
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        {/* Heading */}
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="mb-4 text-[55px] rounded-2xl inline-block  font-bold text-[#243137] ">
            Blog
          </h2>
          <p className="mx-auto max-w-screen-md text-black text-[19px]">
            Here are our lattest blogs and articles about the ever-changing in
            E-cell. stay updated
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {blogs.map((post, index) => (
            <div
              key={index}
              className="flex flex-col rounded-2xl   bg-[#243137] p-2   hover:border-2 hover:border-white hover:shadow-balck hover:scale-105 transform  duration-300flex overflow-hidden border border-gray-700 shadow-sm transition hover:shadow-lg"
            >
              <div className="flex flex-col gap-3 p-4 lg:p-6">
                <span className="text-sm text-white">{post.date}</span>
                <h3 className="text-[19px] font-bold text-white">
                  <a
                    href={post.link}
                    className="transition duration-200 hover:text-indigo-400"
                  >
                    {post.title}
                  </a>
                </h3>
                <p className="text-gray-300">{post.description}</p>
                <div>
                  <a
                    href={post.link}
                    className="font-semibold text-indigo-400 transition duration-200 hover:text-indigo-300"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;




// import React, { useEffect } from 'react';
// // Corrected relative path
// import { useFetchAllPosts } from '../features/Blogs/hooks/useFetchPosts.js'; 
// import PostCard from '../features/Blogs/components/PostCard.jsx';
// import { Link } from 'react-router-dom';

// const LatestPostsPreview = () => {
//   const { posts, loading, error, fetchPosts } = useFetchAllPosts();

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const previewPosts = posts.slice(0, 3);

//   return (
//     <div className="container mx-auto px-4 py-16">
//       <header className="text-center mb-12">
//         <h2 className="text-4xl font-extrabold text-gray-900 mb-2">Latest from the Blog</h2>
//         <p className="text-lg text-gray-600">Don't miss our newest articles and tutorials.</p>
//       </header>

//       {loading && <div className="text-center text-indigo-600">Loading latest posts...</div>}
      
//       {error && <div className="text-center text-red-600">Failed to load preview. {error.message}</div>}

//       {(!loading && posts.length === 0) && <div className="text-center text-gray-600">No posts available.</div>}

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {!loading && previewPosts.map(post => (
//           <PostCard 
//             key={post.id} 
//             post={post} 
//           />
//         ))}
//       </div>
      
//       <div className="text-center mt-12">
//         <Link 
//           to="/blog" 
//           className="px-6 py-3 font-semibold text-white bg-gray-800 rounded-full shadow-md hover:bg-gray-700 transition duration-150 transform hover:scale-105"
//         >
//           View All Posts &rarr;
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default LatestPostsPreview;
