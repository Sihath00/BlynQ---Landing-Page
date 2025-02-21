import { Facebook, Twitter, Instagram, Mail, Phone, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const linkVariants = {
    hover: {
      scale: 1.1,
      color: "#3B82F6",
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 gradient-text">BlynQ.</h3>
            <p className="text-gray-400 hover:text-white transition-colors duration-300">
              Simplifying vehicle management for everyone in Sri Lanka.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <motion.div className="space-y-2">
              <motion.div
                variants={linkVariants}
                whileHover="hover"
                className="flex items-center justify-center transition-all duration-300"
              >
                <Mail size={20} className="mr-2" />
                <a
                  href="mailto:info@blynq.com"
                  className="text-gray-400 hover:text-white"
                >
                  info@blynq.com
                </a>
              </motion.div>
              <motion.div
                variants={linkVariants}
                whileHover="hover"
                className="flex items-center justify-center transition-all duration-300"
              >
                <Phone size={20} className="mr-2" />
                <a
                  href="tel:+94112345678"
                  className="text-gray-400 hover:text-white"
                >
                  +94 11 234 5678
                </a>
              </motion.div>
            </motion.div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <motion.div className="space-y-2">
              <motion.a
                href="#"
                variants={linkVariants}
                whileHover="hover"
                className="text-gray-400 hover:text-white block"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                variants={linkVariants}
                whileHover="hover"
                className="text-gray-400 hover:text-white block"
              >
                Terms of Service
              </motion.a>
            </motion.div>
          </div>
            <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4 justify-center">
              <motion.a
              href="#"
              variants={linkVariants}
              whileHover="hover"
              className="text-gray-400 hover:text-white"
              >
              <Facebook size={24} />
              </motion.a>
              <motion.a
              href="#"
              variants={linkVariants}
              whileHover="hover"
              className="text-gray-400 hover:text-white"
              >
              <Twitter size={24} />
              </motion.a>
              <motion.a
              href="#"
              variants={linkVariants}
              whileHover="hover"
              className="text-gray-400 hover:text-white"
              >
              <Instagram size={24} />
              </motion.a>
              <motion.a
              href="#"
              variants={linkVariants}
              whileHover="hover"
              className="text-gray-400 hover:text-white"
              >
              <Linkedin size={24} />
              </motion.a>
            </div>
          </div>

          
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {currentYear} BlynQ. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};