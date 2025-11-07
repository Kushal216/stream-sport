"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function FAQ() {
  const faqs = [
    {
      question: "What is StreamSport?",
      answer:
        "StreamSport is a platform designed to provide sports enthusiasts with real-time streaming, schedules, and updates of various sports events in one place.",
    },
    {
      question: "Is StreamSport free to use?",
      answer:
        "Yes, StreamSport is completely free to access. However, some premium features may be added in the future to enhance your viewing experience.",
    },
    {
      question: "How can I watch live matches?",
      answer:
        "You can explore the 'Live' section of the app to access ongoing matches. Simply click on your desired sport or event to start streaming.",
    },
    {
      question: "Can I use StreamSport on mobile devices?",
      answer:
        "Absolutely! StreamSport is designed to work seamlessly on both Android and iOS devices through our app and responsive web platform.",
    },
    {
      question: "How can I contact support?",
      answer:
        "If you encounter any issues or have questions, you can reach out to our support team at support@streamsport.com.",
    },
  ];

  return (
    <main className="bg-gray-100 min-h-screen text-gray-900">
      <Navbar />
      <section className="max-w-4xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
          Frequently Asked Questions
        </h1>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {faq.question}
              </h2>
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-700">
            Still have questions?{" "}
            <a
              href="mailto:support@streamsport.com"
              className="text-blue-600 font-medium hover:underline"
            >
              Contact our support team
            </a>
            .
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
