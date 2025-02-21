import { useState } from "react";
import { FAQItem } from "./FAQItem";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

<Link to="/contact" className="text-blue-600 hover:text-purple-600 font-medium transition-all duration-300 border-b-2 border-blue-600 hover:border-purple-600">
  Contact our support team
</Link>


const faqs = [{
  question: "1. What is Blynq and how does it work?",
  answer: "BlynQ is a smart vehicle management platform designed to simplify service booking, vehicle tracking, document storage, and maintenance reminders. It connects vehicle owners with service centers for a seamless experience."
}, {
  question: "2. How can I book a service appointment?",
  answer: "You can easily book an appointment through the BlynQ app by selecting your preferred service center, choosing a service, and scheduling a time that works best for you."
}, {
  question: "3. Is BlynQ available for all types of vehicles?",
  answer: "Yes! BlynQ supports cars, bikes, trucks, and other vehicles, providing a unified platform for all vehicle owners."
}, {
  question: "4. Can I manage multiple vehicles on BlynQ?",
  answer: "Yes! You can add and manage multiple vehicles under one account, keeping all service records and documents organized."
}, {
  question: "5. Is my vehicle data safe with BlynQ?",
  answer: "We take security seriously. All data is encrypted both in transit and at rest, and we follow industry-best security practices. Cloud-based storage with encryption to protect all your data, ensuring privacy and security.."
},
{
  question: "6. How can service centers benefit from BlynQ",
  answer: "Service centers can manage appointments, track customer history, handle inventory, generate invoices, and get valuable business insights—all from a single, easy-to-use dashboard."
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
            <Link to="/contact" className="text-blue-600 hover:text-purple-600 font-medium transition-all duration-300 border-b-2 border-blue-600 hover:border-purple-600">
              Contact our support team
            </Link>
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