import { motion } from "framer-motion";


import { Car, Clock, FileText, Calendar, Users, Star, ArrowRight, CheckCircle, Shield, Zap, Database, Bell, UsersIcon, FileCheck2, UserRoundCheck } from "lucide-react";

const mobileFeatures = [
  {
    icon: <Car />,
    title: "Vehicle Tracking",
    description: "Stay Updated on Vehicle Status and Location",
  },
  {
    icon: <Clock />,
    title: "Booking Appointments",
    description: "Schedule Service Appointments at Partnered Service Centers",
  },
  {
    icon: <FileText />,
    title: "Document Management",
    description: "Upload & Manage Vehicle Related Documents",
  },

  {
    icon: <Bell />,
    title: "Instant Reminders",
    description: "Get Notified on Upcoming Services and Updates",
  },

  {
    icon: <FileCheck2 />,
    title: "Service History",
    description: "Access Detailed Service History and Reports",
  },

  {
    icon: <UsersIcon />,
    title: "Community Form",
    description: "Connect with Other Vehicle Owners for Insights and Discussions",
  },
];

const testimonials = [
  {
    name: "Sihath Senarath",
    role: "Web Developer",
    content:
      "BlynQ is more than just a platform, It’s our vision for smarter, more efficient vehicle management.",
    
  },
  {
    name: "Amina Haja Meyan",
    role: "Mobile App Developer",
    content:
      "Every feature in BlynQ is crafted with precision ensuring to get the most efficient user friendly experience .",
    
  },
  {
    name: "Gaindu Amarasinghe",
    role: "Mobile App Developer",
    content:
      "Innovation drives us. With BlynQ, we’re reshaping vehicle management to be more accessible, intuitive, and future-ready.",
    
  },
  {
    name: "Sithum Duleka",
    role: "Web Developer",
    content:
      "We believe technology should that—making vehicle management stress-free and smarter than ever before.",
    
  },
  {
    name: "Pesadi Wikramathilaka",
    role: "Mobile App Developer",
    content:
      "We built BlynQ to eliminate the hassle of tracking services, and handling vehicle data. Now, it’s all in one seamless system.",
    
  },
];

const webFeatures = [
  {
    icon: <Shield />,
    title: "Secure Data Handling",
    description: "Keep custormer data safe and secure",
  },
  {
    icon: <UserRoundCheck />,
    title: "Customer Interaction",
    description: "Notify customers on service updates",
  },
  {
    icon: <FileText />,
    title: "Report Management",
    description: "Efficiently Genaerate Reports for Analysis",
  },
  {
    icon: <Users />,
    title: "Employee Management",
    description: "Manage Employees for efficient workflow",
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
      title: "Businness Insights",
      description: "Data-driven decision making"
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
    <><div className="w-full overflow-hidden">

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
          }} />
        <div className="max-w-7xl mx-auto px-4 py-24 relative">
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
                Simplifying Vehicle Management for {" "}
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
                <img src="/hero.png" alt="Vehicle Management" className="rounded-2xl shadow-2xl" />
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
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          </div>
        </div>
      </section>
    </div><section className="bg-gradient-to-b from-white to-[#E8EAF6] py-16 relative overflow-hidden mt-[-100px]">
        {/* Animated Background Grid */}
        <motion.div
          className="absolute inset-0 bg-grid-pattern opacity-10"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 40, repeat: Infinity, repeatType: "mirror" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
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
            className="mb-20"
          >
            <h3 className="text-3xl font-semibold text-[#1A237E] mb-10 text-center">Mobile Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mobileFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="modern-card p-6 hover-lift shadow-2xl rounded-2xl transition-transform transform hover:scale-105 bg-white hover:bg-gradient-to-t from-[#E8EAF6] to-white"
                  whileHover={{ y: -8 }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
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
                  className="glass p-6 rounded-2xl hover-lift shadow-2xl transition-transform transform hover:scale-105 bg-white bg-opacity-70 backdrop-blur-md"
                  whileHover={{ y: -8 }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
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
      
    </section><WhyChooseUs /><section className="py-16 bg-gradient-to-b from-white to-blue-50 overflow-hidden">

      
    <div className="max-w-7xl mx-auto px-4 relative">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center mb-16"
  >
    <h2 className="text-5xl font-extrabold text-blue-900 mb-4">
      Built for You, Designed by Us
    </h2>
    <p className="text-lg text-gray-700">
      Trusted by vehicle owners and service centers across Sri Lanka
    </p>
  </motion.div>

  <div className="overflow-hidden w-full relative px-6">
    <motion.div
      className="flex gap-8 items-center"
      animate={{ x: ["0%", "-50%"] }}
      transition={{
        duration: 50,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        width: `${testimonials.length * 400 * 2}px`,
        display: "flex",
      }}
    >
      {/* First set of testimonials */}
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={`first-${index}`}
          className="relative bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 w-[400px] flex-shrink-0"
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
          <p className="text-gray-700 italic mb-6">"{testimonial.content}"</p>
          <div className="flex items-center">
          
          </div>
        </motion.div>
      ))}
      {/* Second set of testimonials */}
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={`second-${index}`}
          className="relative bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 w-[400px] flex-shrink-0"
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
          <p className="text-gray-700 italic mb-6">"{testimonial.content}"</p>
          <div className="flex items-center">
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</div>
      </section></>
   
  );
};
