import React from "react";

const Features = () => {
    const features = [
        {
            title: "Who we are?",
            desc: "We are a dynamic group of students igniting entrepreneurial spirit. We cultivate innovation, creative thinking, and help turn groundbreaking ideas into reality.",
        },
        {
            title: "Workshops & Networking",
            desc: "Through workshops, interactive events, and networking, we provide a platform where aspiring entrepreneurs can learn, collaborate, and grow.",
        },
        {
            title: "Our Events",
            desc: "We organize impactful events—online and offline—to foster creativity, collaboration, and meaningful connections within our community.",
        },
        {
            title: "Ongoing Initiatives",
            desc: "With many more initiatives in the pipeline, we continue inspiring and empowering an ever-growing community of innovators.",
        },
        {
            title: "Community & Inclusion",
            desc: "Together, we build a vibrant, inclusive environment that supports personal and collective success across diverse teams and ideas.",
        },
        {
            title: "Our Team",
            desc: "A dedicated, hardworking team striving for excellence—tackling challenges and delivering results to advance innovation and entrepreneurship.",
        },
    ];

    return (
        <section className="bg-gray-900 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                {/* Heading */}
                <div className="mb-12 md:mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
                        What We Stand For
                    </h2>
                    <p className="mx-auto max-w-screen-md text-gray-300 md:text-lg">
                        We are a team of students passionate about inspiring innovation and empowering ideas. Through events and collaboration, we create opportunities for learning, creativity, and growth.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid gap-6 sm:grid-cols-2 md:gap-8 xl:grid-cols-3">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col rounded-lg border border-gray-700 bg-gray-800 p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
                        >
                            <h3 className="mb-2 text-lg font-semibold text-white md:text-xl">
                                {feature.title}
                            </h3>
                            <p className="mb-4 text-gray-300">{feature.desc}</p>
                            <a
                                href="#"
                                className="mt-auto font-bold text-indigo-400 transition duration-150 hover:text-indigo-300 active:text-indigo-500"
                            >
                                More
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
