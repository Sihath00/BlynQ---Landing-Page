import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage("");

    const serviceId = "service_pyfn0cz"; 
    const templateId = "template_cdct4pu"; // Replace with your actual Template ID
    const publicKey = "80NRBScFV9Pv8TFz3"; // Replace with your Public Key

    try {
      const response = await emailjs.send(serviceId, templateId, formData, publicKey);
      if (response.status === 200) {
        setStatusMessage("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatusMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatusMessage("Error sending message. Please check console for details.");
    }

    setIsSending(false);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative bg-gradient-to-br from-blue-700 to-blue-900 text-white py-32 px-4 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-extrabold mb-6"
          >
            Let's <span className="text-blue-300">Connect</span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl opacity-90 max-w-3xl mx-auto"
          >
            Reach out for support, inquiries, or just to say hello!
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-500"
          >
            <h2 className="text-4xl font-extrabold mb-6 text-blue-900">Send Us a Message</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              {["name", "email", "phone", "subject", "message"].map((field, index) => (
                <div key={index}>
                  <label className="block text-gray-700 mb-2 font-medium" htmlFor={field}>
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  {field === "message" ? (
                    <textarea
                      id={field}
                      rows={4}
                      className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                      placeholder="Your Message"
                      value={formData[field as keyof typeof formData]}
                      onChange={handleChange}
                    ></textarea>
                  ) : (
                    <input
                      type={field === "email" ? "email" : "text"}
                      id={field}
                      className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                      placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                      value={formData[field as keyof typeof formData]}
                      onChange={handleChange}
                    />
                  )}
                </div>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                disabled={isSending}
              >
                {isSending ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
            {statusMessage && (
              <p className={`mt-4 text-lg ${statusMessage.includes("success") ? "text-green-600" : "text-red-600"}`}>
                {statusMessage}
              </p>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} className="space-y-10">
            <div>
              <h3 className="text-3xl font-extrabold mb-6 text-blue-900">Contact Info</h3>
              <div className="grid gap-6">
                {[
                  { icon: Mail, label: "Email", info: "info.blynq@gmailcom" },
                  { icon: Phone, label: "Phone", info: "+94 718959193" },
                  { icon: MapPin, label: "Address", info: "123 Main Street, Colombo 03, Sri Lanka" },
                  { icon: Clock, label: "Business Hours", info: "Mon - Fri: 9:00 AM - 6:00 PM" },
                ].map((item, idx) => (
                  <motion.div key={idx} whileHover={{ scale: 1.03 }} className="flex items-center bg-white p-5 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                    <item.icon className="w-8 h-8 text-blue-600 mr-4" />
                    <div>
                      <p className="font-semibold text-blue-900">{item.label}</p>
                      <p className="text-gray-700">{item.info}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            {/* Animated Map Section */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="h-80 bg-gray-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 mt-8"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.58585959615!2d79.8136811674035!3d6.921833369666432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1645488345520!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};