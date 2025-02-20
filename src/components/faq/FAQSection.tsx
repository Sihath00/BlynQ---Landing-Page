import { useState } from "react";
import { FAQItem } from "./FAQItem";
import { motion } from "framer-motion";
import React from "react";

const faqs = [{
  question: "What is Blynq and how does it work?",
  answer: "Blynq is a modern software solution that helps businesses streamline their operations. Our platform provides intuitive tools for managing your business processes efficiently and effectively."
}, {
  question: "Is there a free trial available?",
  answer: "Yes, we offer a 14-day free trial with full access to all features. No credit card is required to start your trial."
}, {
  question: "What kind of support do you provide?",
  answer: "We provide 24/7 technical support through email and chat. Our dedicated support team is always ready to help you with any questions or issues you might encounter."
}, {
  question: "Can I integrate Blynq with other tools?",
  answer: "Yes, Blynq offers seamless integration with popular business tools and platforms. We support API integration and have built-in connectors for many common business applications."
}, {
  question: "How secure is my data with Blynq?",
  answer: "We take security seriously. All data is encrypted both in transit and at rest, and we follow industry-best security practices. We are SOC 2 compliant and regularly perform security audits."
}];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl mx-auto px-6 py-24 sm:px-8 sm:py-32"
      >
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-semibold mb-6"
          >
            Got Questions?
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-blue-600 to-pink-600 bg-clip-text text-transparent"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-gray-600 text-xl max-w-2xl mx-auto"
          >
            Have a different question?{" "}
            <a 
              href="#" 
              className="text-blue-600 hover:text-purple-600 font-medium transition-all duration-300 border-b-2 border-blue-600 hover:border-purple-600"
            >
              Contact our support team
            </a>
          </motion.p>
        </div>

        <div  className="space-y-6 bg-white backdrop-blur-lg bg-opacity-80 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 ">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.8 }}
              className="group"
            >
              {/* <div className="bg-white backdrop-blur-lg bg-opacity-80 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"> */}
                <FAQItem
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                />
              {/* </div> */}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};