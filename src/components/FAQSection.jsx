import React, { useState } from "react";

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "How does the product work?",
            answer:
                "This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing.",
        },
        {
            question: "What are the features?",
            answer:
                "This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing.",
        },
        {
            question: "What about integrations?",
            answer:
                "This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing.",
        },
        {
            question: "Is support available?",
            answer:
                "This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing.",
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-gray-900 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                {/* Heading */}
                <div className="mb-12 md:mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
                        Frequently asked questions
                    </h2>
                    <p className="mx-auto max-w-screen-md text-gray-300 md:text-lg">
                        This is a section of some simple filler text, also known as
                        placeholder text. It shares some characteristics of a real written
                        text but is random or otherwise generated.
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="mx-auto max-w-screen-sm divide-y divide-gray-800 border-t border-gray-800">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-800">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="flex w-full items-center justify-between gap-2 py-4 text-left font-semibold text-white transition duration-200 hover:text-indigo-400"
                            >
                                <span className="md:text-lg">{faq.question}</span>
                                <span
                                    className={`transform transition-transform duration-300 ${openIndex === index ? "rotate-180 text-indigo-400" : "text-indigo-400"}`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </span>
                            </button>
                            {openIndex === index && (
                                <p className="mb-4 text-gray-300">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
