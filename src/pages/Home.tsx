import { motion } from "framer-motion";
import { Car, Clock, FileText, Calendar, Users, Star, ArrowRight, CheckCircle, Shield, Zap, Database } from "lucide-react";

const mobileFeatures = [
  {
    icon: <Car />,
    title: "Vehicle Tracking",
    description: "Real-time location updates",
  },
  {
    icon: <Clock />,
    title: "Service Scheduling",
    description: "Automated service reminders",
  },
  {
    icon: <FileText />,
    title: "Document Management",
    description: "Secure document storage",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Vehicle Owner",
    content:
      "BlynQ has completely transformed how I manage my vehicle maintenance. The real-time updates are invaluable!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Fleet Manager",
    content:
      "Managing our company's fleet has never been easier. The document management system is a game-changer.",
    rating: 5,
  },
  {
    name: "Priya Kumar",
    role: "Service Center Owner",
    content:
      "BlynQ helps us provide better service to our customers. The appointment system is seamless.",
    rating: 5,
  },
];

const webFeatures = [
  {
    icon: <Shield />,
    title: "Security",
    description: "Top-notch security features",
  },
  {
    icon: <Zap />,
    title: "Performance",
    description: "High performance and reliability",
  },
  {
    icon: <Database />,
    title: "Data Management",
    description: "Efficient data handling",
  },
  {
    icon: <Users />,
    title: "User Management",
    description: "Manage users with ease",
  },
];

 const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Shield />,
      title: "Transparency",
      description: "Clear communication and pricing",
    },
    {
      icon: <Zap />,
      title: "Efficiency",
      description: "Streamlined operations",
    },
    {
      icon: <Database />,
      title: "Secure Storage",
      description: "Protected data management",
    },
    {
      icon: <Users />,
      title: "Community Support",
      description: "Active user community",
    },
  ];
  return (
    <motion.section
      className="bg-gray-50 py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    style={{ willChange: "transform, opacity" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-5xl text-center mb-16 font-extrabold text-blue-900">Why Choose BlynQ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="text-[#FF5722] w-12 h-12 mx-auto mb-4">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#1A237E] mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};


export const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="w-full overflow-hidden">
      
      {/* Hero Section */}
      <motion.section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden"
       variants={containerVariants}
       initial="hidden"
       animate="visible">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 -top-12 -right-12 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute w-96 h-96 bottom-0 -left-12 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
        </div>
        {/* Animated Patterns */}
        <motion.div
          className="absolute inset-0 opacity-[0.15]"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="max-w-7xl mx-auto px-4 py-32 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="hero-content">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 bg-blue-500/20 rounded-full mb-6"
              >
                <span className="text-sm font-medium">#1 Vehicle Management Platform in Sri Lanka</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
              >
                Simplifying Vehicle Management for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">Everyone</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-blue-100 mb-8 max-w-xl"
              >
                Your all-in-one platform for vehicle service tracking, document management, and maintenance scheduling in Sri Lanka.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-white text-blue-900 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                >
                  Get Started Now
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-transparent border-2 border-white/20 rounded-full font-semibold text-lg hover:bg-white/10 transition-all"
                >
                  Watch Demo
                </motion.button>
              </motion.div>
              <div className="mt-12 grid grid-cols-3 gap-8">
              </div>
            </motion.div>
            {/* Hero Image/Animation */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative hidden lg:block">
              <div className="relative w-full aspect-square">
                <img src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3" alt="Vehicle Management" className="rounded-2xl shadow-2xl" />
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                  className="absolute -left-8 top-1/4 bg-white p-4 rounded-xl shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 w-6 h-6" />
                    <div>
                      <div className="text-sm font-medium text-gray-900">Service Complete</div>
                      <div className="text-xs text-gray-500">2 minutes ago</div>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
                  className="absolute -right-8 bottom-1/4 bg-white p-4 rounded-xl shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <Calendar className="text-blue-500 w-6 h-6" />
                    <div>
                      <div className="text-sm font-medium text-gray-900">Next Service</div>
                      <div className="text-xs text-gray-500">in 3 days</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          </div>
        </div>
      </section>

      

      <section className="bg-gradient-to-b from-white to-[#E8EAF6] py-20 relative overflow-hidden mt-[-100px]">
      {/* Animated Background Grid */}
      <motion.div
        className="absolute inset-0 bg-grid-pattern opacity-10"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 40, repeat: Infinity, repeatType: "mirror" }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Title */}
        <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-center mb-20"
        >
      <h2 className="text-5xl font-extrabold bg-gradient-to-r from-[#1A237E] to-[#673AB7] text-transparent bg-clip-text mb-4 drop-shadow-lg">
        Platform Features
      </h2>
      <div className="w-28 h-1.5 bg-gradient-to-r from-[#1A237E] to-[#4051B5] mx-auto rounded-full shadow-md"></div>
      <p className="mt-5 text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
        Discover the powerful tools designed to streamline your vehicle management effortlessly.
      </p>
        </motion.div>

        {/* Mobile Features */}
        <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="mb-24"
        >
      <h3 className="text-3xl font-semibold text-[#1A237E] mb-10 text-center">Mobile Features</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {mobileFeatures.map((feature, index) => (
          <motion.div
        key={index}
        className="modern-card p-8 hover-lift shadow-2xl rounded-2xl transition-transform transform hover:scale-105 bg-white hover:bg-gradient-to-t from-[#E8EAF6] to-white"
        whileHover={{ y: -8 }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
          >
        <motion.div
          whileHover={{ rotate: 15 }}
          transition={{ duration: 0.5 }}
          className="text-[#2196F3] mb-6 transform transition-transform"
        >
          {feature.icon}
        </motion.div>
        <h4 className="text-2xl font-semibold text-[#1A237E] mb-4">{feature.title}</h4>
        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>
        </motion.div>

        {/* Web Features */}
        <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="relative"
        >
      {/* Glassmorphism Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A237E] to-[#673AB7] opacity-10 rounded-3xl blur-xl"></div>
      <h3 className="text-3xl font-semibold text-[#1A237E] mb-10 text-center relative z-10">
        Web Features
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {webFeatures.map((feature, index) => (
          <motion.div
        key={index}
        className="glass p-8 rounded-2xl hover-lift shadow-2xl transition-transform transform hover:scale-105 bg-white bg-opacity-70 backdrop-blur-md"
        whileHover={{ y: -8 }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
          >
        <motion.div
          whileHover={{ rotate: 20 }}
          transition={{ duration: 0.5 }}
          className="text-[#2196F3] mb-6 transform transition-transform"
        >
          {feature.icon}
        </motion.div>
        <h4 className="text-2xl font-semibold text-[#1A237E] mb-4">{feature.title}</h4>
        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>
        </motion.div>
      </div>
    </section>

    <WhyChooseUs />
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
  <div className="max-w-7xl mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-5xl font-extrabold text-blue-900 mb-4">What Our Users Say</h2>
      <p className="text-lg text-gray-700">Trusted by vehicle owners and service centers across Sri Lanka</p>
    </motion.div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          className="relative bg-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center shadow-lg">
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
            </div>
            <div className="ml-4">
              <p className="text-xl font-semibold text-blue-900">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          </div>
          <p className="text-gray-700 italic mb-6">“{testimonial.content}”</p>
          <div className="flex items-center">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>    </div>
  );
};

