import{ useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Target, Award, ArrowRight, Mail, Linkedin, Twitter } from "lucide-react";
export const About = () => {
  const containerRef = useRef(null);
  useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(useScroll().scrollY, [0, 1], [0, -100]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 20 });

  const team = [
    {
      name: "Sihath Senarath Yapa",
      role: "CEO & Founder",
      image: "/sihath.jpg", 
      bio: "With over 15 years of experience in automotive industry, John leads our vision for the future of vehicle management.",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "john@blynq.com",
      },
    },
    {
      name: "Amina Haja Meyan",
      role: "Head of Operations",
      image: "/amina.jpg", 
      bio: "Sarah brings 12 years of tech leadership experience, driving innovation in our platform development.",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "sarah@blynq.com",
      },
    },
    {
      name: "Gaindu Amarasingha",
      role: "Chief Technology Officer",
      image: "/gaindu.jpeg", 
      bio: "David oversees our day-to-day operations, ensuring seamless service delivery to all our clients.",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "david@blynq.com",
      },
    },
    {
      name: "Pesadi Wikramathilaka",
      role: "Head of Customer Success",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3",
      bio: "Maria leads our customer success team, focusing on delivering exceptional service experiences.",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "maria@blynq.com",
      },
    },
    {
      name: "Sithum Duleka Kalhara",
      role: "Head of Product",
      image: "/sithum.jpeg", 
      bio: "James drives our product strategy, bringing innovative solutions to vehicle management.",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "james@blynq.com",
      },
    },
  ];

  return (
    <div className="w-full" ref={containerRef}>
      {/* Hero Section with Video Background and Animated Text */}
      <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 to-blue-700 text-white text-center px-6">
        <video autoPlay loop muted className="absolute w-full h-full object-cover" style={{ filter: "brightness(0.3)" }}>
          <source src="/videos/about-hero.mp4" type="video/mp4" />
        </video>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl lg:text-7xl font-extrabold mb-6 z-10"
        >
          About <span className="text-blue-300">BlynQ</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg max-w-2xl text-blue-200 mb-8 z-10"
        >
          We are committed to transforming vehicle management through innovative solutions and unwavering dedication.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-white text-blue-900 font-semibold rounded-full shadow-lg z-10"
        >
          Learn More
        </motion.button>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        >
          <ArrowRight className="w-6 h-6 text-white transform rotate-90" />
        </motion.div>
      </div>

      {/* Mission & Vision with Parallax */}
      <motion.section style={{ y: smoothY }} className="relative py-32 bg-gradient-to-b from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="relative p-8 rounded-2xl bg-white/10 backdrop-blur-lg"
            >
              <div className="absolute -top-6 -left-6 p-4 bg-blue-600 rounded-xl shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                To simplify vehicle management and maintenance through innovative technology, making it accessible and efficient for
                everyone in Sri Lanka.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="relative p-8 rounded-2xl bg-white/10 backdrop-blur-lg"
            >
              <div className="absolute -top-6 -left-6 p-4 bg-blue-600 rounded-xl shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                To become the leading vehicle management platform in South Asia, known for innovation, reliability, and customer
                satisfaction.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Core Values Section */}
      
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-extrabold text-blue-900 mb-4 text-center">
        Our Core Values Driving Us
        </h2>
          <div className="relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-900 rounded-t-full opacity-10" />
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.2 }}
              className={`grid grid-cols-2 md:grid-cols-3 gap-6 relative`}
            >
              {[
                {
                  title: "Customer-Centricity",
                  icon: "👥",
                },
                {
                  title: "Integrity",
                  icon: "🛡️",
                },
                {
                  title: "Transparency",
                  icon: "🔍",
                },
                {
                  title: "Innovation",
                  icon: "💡",
                },
                {
                  title: "Reliability",
                  icon: "⚡",
                },
                {
                  title: "Collaboration",
                  icon: "🤝",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
          >
        <h2 className="text-5xl font-extrabold text-blue-900 mb-4">
          Meet Our Team
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          A dedicated group of professionals passionate about innovation and excellence.
        </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {team.slice(0, 3).map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="relative bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-500"
          >
            <div className="overflow-hidden">
          <motion.img
            src={member.image}
            alt={member.name}
            className="w-full h-80 object-cover transform hover:scale-110 transition-transform duration-700"
          />
            </div>
            <div className="p-6 text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-2">{member.name}</h3>
          <p className="text-blue-500 font-medium mb-4">{member.role}</p>
          <p className="text-gray-600 mb-6">{member.bio}</p>
          <div className="flex justify-center space-x-4">
            <a href={member.social.linkedin} className="text-blue-600 hover:text-blue-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href={member.social.twitter} className="text-blue-600 hover:text-blue-400 transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href={`mailto:${member.social.email}`} className="text-blue-600 hover:text-blue-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
            </div>
          </motion.div>
        ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto mt-10">
        {team.slice(3).map((member, index) => (
          <motion.div
            key={index + 3}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (index + 3) * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="relative bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-500"
          >
            <div className="overflow-hidden">
          <motion.img
            src={member.image}
            alt={member.name}
            className="w-full h-80 object-cover transform hover:scale-110 transition-transform duration-700"
          />
            </div>
            <div className="p-6 text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-2">{member.name}</h3>
          <p className="text-blue-500 font-medium mb-4">{member.role}</p>
          <p className="text-gray-600 mb-6">{member.bio}</p>
          <div className="flex justify-center space-x-4">
            <a href={member.social.linkedin} className="text-blue-600 hover:text-blue-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href={member.social.twitter} className="text-blue-600 hover:text-blue-400 transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href={`mailto:${member.social.email}`} className="text-blue-600 hover:text-blue-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
            </div>
          </motion.div>
        ))}
          </div>
        </div>
      </section>

      {/* Timeline Section with 3D Effect */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-50" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-extrabold text-blue-900 mb-4 text-center">Our Journey</h2>
            <p className="text-xl text-gray-600">The milestones that shaped BlynQ</p>
          </motion.div>
          <div className="space-y-24">
            {[
              {
                year: "2020",
                title: "Company Founded",
                description: "BlynQ was established with a vision to revolutionize vehicle management",
                image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3",
              },
              {
                year: "2021",
                title: "First 1000 Users",
                description: "Reached our first milestone of 1000 active users",
                image: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3",
              },
              {
                year: "2022",
                title: "Service Center Network",
                description: "Expanded our network to include 200+ service centers",
                image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3",
              },
              {
                year: "2023",
                title: "Mobile App Launch",
                description: "Launched our mobile application for iOS and Android",
                image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3",
              },
              {
                year: "2024",
                title: "International Expansion",
                description: "Started operations in neighboring countries",
                image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`flex items-center gap-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="flex-1">
                  <motion.div whileHover={{ scale: 1.05 }} className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img src={item.image} alt={item.title} className="w-full h-72 object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6">
                      <span className="text-5xl font-bold text-white">{item.year}</span>
                    </div>
                  </motion.div>
                </div>
                <div className="flex-1 space-y-4">
                  <h3 className="text-3xl font-bold text-gray-900">{item.title}</h3>
                  <p className="text-lg text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
        </div>
  );
};
