import{ useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Target, Award, ArrowRight, Mail, Linkedin, Github } from "lucide-react";
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
      role: "Founder & Web App Developer",
      image: "/sihath.jpg", 
      bio: "A passionate undergraduate at the Informatic Institute of Technology, exploring the world of software development with a keen interest in full-stack technologies.",
      social: {
        linkedin: "https://www.linkedin.com/in/sihathsenarath",
        github: "https://github.com/Sihath00",
        email: "mailto:sihathsenarathyapa26@gmail.com",
      },
    },
    {
      name: "Amina Haja Meyan",
      role: "Project Manager & Mobile Developer",
      image: "/amina.jpg", 
      bio: "Enthusiastic about coding and problem-solving, currently honing skills in web and mobile development as an undergraduate at IIT",
      social: {
        linkedin: "https://www.linkedin.com/in/aminahajameyan",
        github: "https://github.com/AminaHajaMeyan",
        email: "mailto:aminahajameyan123@gmail.com",
      },
    },
    {
      name: "Gaindu Amarasingha",
      role: "Chief Technology Officer & Backend Developer",
      image: "/gaindu.jpeg", 
      bio: "An aspiring software engineer eager to learn and innovate, diving into backend development and database management at IIT",
      social: {
        linkedin: "https://www.linkedin.com/in/gainduamarasinghe",
        github: "https://github.com/gainduamarasinghe",
        email: "mailto:gaindu2k03@gmail.com",
      },
    },
    {
      name: "Pesadi Wikramathilaka",
      role: "UI/UX Designer & Mobile Developer",
      image: "/pesadi.jpeg", 
      bio: "Passionate about UI/UX design and frontend development, striving to create user-friendly applications while pursuing studies at IIT",
      social: {
        linkedin: "https://www.linkedin.com/in/pesadi-wickramathilaka-8a266928b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/methwari",
        email: "mailto:methwari02@gmail.com",
      },
    },
    {
      name: "Sithum Duleka Kalhara",
      role: "Head of Product & Cloud Engineer",
      image: "/sithum.png", 
      bio: " A tech enthusiast exploring cloud computing and DevOps, eager to build scalable solutions as an undergraduate at IIT.",
      social: {
        linkedin: "https://linkedin.com",
        github: "https://twitter.com",
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
          BlynQ is a smart, all-in-one vehicle management platform connecting vehicle owners, service centers, and businesses. With real-time tracking, seamless service bookings, and automated reports, we simplify and streamline vehicle management like never before.
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
              To redefine vehicle management by bringing the entire automobile industry into one app. We are committed to leveraging cutting-edge technology, data-driven insights, and seamless connectivity to simplify service operations, enhance customer engagement, and drive innovation across the industry. 
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
              To be the leading digital ecosystem for the automobile industry, seamlessly integrating vehicle owners, service providers, and businesses into a unified, intelligent platform that enhances efficiency, transparency, and user experience.
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
            <a href={member.social.github} className="text-blue-600 hover:text-blue-400 transition-colors">
              <Github className="w-6 h-6" />
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
            <a href={member.social.github} className="text-blue-600 hover:text-blue-400 transition-colors">
            <Github className="w-6 h-6" />
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
                year: "2024-09",
                title: "Picted the Idea",
                description: "Identified the need for a smarter vehicle management system and conceptualized BlynQ as an all-in-one platform for vehicle owners and service centers.",
                image: "/idea.jpeg",
              },
              {
                year: "2024-10",
                title: "Start Desiging UI/UX",
                description: "Focused on creating an intuitive, modern, and seamless user experience, ensuring easy navigation and accessibility across mobile and web platforms.",
                image: "/figma.jpeg",
              },
              {
                year: "2025-01",
                title: "Start Impelmenting",
                description: "Built the core features, integrated real-time tracking, service booking, and automation, while ensuring scalability and security.",
                image: "/implementation.jpeg",
              },
              {
                year: "2025-02",
                title: "Finalizing the Product",
                description: "Refining performance, enhancing user experience, and ensuring a seamless, efficient, and reliable system before launch.",
                image: "/final.jpeg",
              },
              {
                year: "2025-03",
                title: "Launching the Product",
                description: "Bringing BlynQ to the world, transforming vehicle management with an innovative, tech-driven solution that connects users and service providers seamlessly.",
                image: "/soon.jpeg",
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
