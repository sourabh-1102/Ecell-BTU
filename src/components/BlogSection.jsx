import React from "react";

const BlogSection = () => {
    const blogs = [
        {
            date: "July 19, 2021",
            title: "New trends in Tech",
            description: "This is a section of some simple filler text, also known as placeholder text.",
            image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600",
            link: "#",
        },
        {
            date: "April 07, 2021",
            title: "Working with legacy stacks",
            description: "This is a section of some simple filler text, also known as placeholder text.",
            image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600",
            link: "#",
        },
        {
            date: "March 15, 2021",
            title: "10 best smartphones for devs",
            description: "This is a section of some simple filler text, also known as placeholder text.",
            image: "https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600",
            link: "#",
        },
        {
            date: "January 27, 2021",
            title: "8 High performance Notebooks",
            description: "This is a section of some simple filler text, also known as placeholder text.",
            image: "https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600",
            link: "#",
        },
    ];

    return (
        <section className="bg-gray-900 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                {/* Heading */}
                <div className="mb-12 md:mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">Blog</h2>
                    <p className="mx-auto max-w-screen-md text-gray-300 md:text-lg">
                        This is a section of some simple filler text, also known as placeholder text.
                        It shares some characteristics of a real written text but is random or otherwise generated.
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                    {blogs.map((post, index) => (
                        <div
                            key={index}
                            className="flex flex-col overflow-hidden rounded-lg border border-gray-700 bg-gray-800 shadow-sm transition hover:shadow-lg"
                        >
                            <div className="flex flex-col gap-3 p-4 lg:p-6">
                                <span className="text-sm text-gray-400">{post.date}</span>
                                <h3 className="text-xl font-bold text-white">
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
