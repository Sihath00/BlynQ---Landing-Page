import { motion } from "framer-motion";
import { BoxIcon } from "lucide-react";
interface ServiceCardProps {
  icon: typeof BoxIcon;
  title: string;
  description: string;
  features: string[];
  index: number;
}
export const ServiceCard = ({
  icon: Icon,
  title,
  description,
  features,
  index,
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{
        y: 20,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay: index * 0.1,
      }}
      whileHover={{
        y: -5,
      }}
      className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
    >
      <motion.div
        whileHover={{
          rotate: 360,
        }}
        transition={{
          duration: 0.5,
        }}
        className="bg-blue-50 p-4 rounded-2xl w-fit mb-6 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-transparent" />
        <Icon className="w-8 h-8 text-blue-600 relative z-10" />
      </motion.div>
      <h3 className="text-2xl font-bold mb-4 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-8 leading-relaxed">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center text-gray-600">
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};
