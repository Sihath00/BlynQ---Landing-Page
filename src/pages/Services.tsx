import React from "react";
import { motion } from "framer-motion";
import { Car, FileText, Bell, Calendar, Clock, Shield, MessageSquare, BoxIcon } from "lucide-react";
export const Services = () => {
  const services = [{
    icon: Clock,
    title: "Real-time Service Updates",
    description: "Track your vehicle's service status in real-time. Get notifications about progress and completion.",
    features: ["Live status updates", "Service timeline", "Instant notifications"]
  }, {
    icon: FileText,
    title: "Document Management",
    description: "Store and manage all your vehicle-related documents in one secure place.",
    features: ["Digital storage", "Easy access", "Document reminders"]
  }, {
    icon: Calendar,
    title: "Appointment Booking",
    description: "Schedule service appointments with your preferred service center hassle-free.",
    features: ["Online booking", "Reminder system", "Flexible scheduling"]
  }, {
    icon: BoxIcon,
    title: "Maintenance Tracking",
    description: "Keep track of all maintenance activities and get timely service reminders.",
    features: ["Service history", "Maintenance schedules", "Cost tracking"]
  }, {
    icon: Shield,
    title: "Insurance Management",
    description: "Manage your vehicle insurance details and get renewal reminders.",
    features: ["Policy tracking", "Renewal alerts", "Claim assistance"]
  }, {
    icon: MessageSquare,
    title: "24/7 Support",
    description: "Get assistance whenever you need it through our dedicated support team.",
    features: ["Live chat", "Email support", "Phone support"]
  }];
  return <div className="w-full">
      {/* Hero Section */}
      <motion.section initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-32 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 initial={{
          y: 20,
          opacity: 0
        }} animate={{
          y: 0,
          opacity: 1
        }} className="text-5xl md:text-6xl font-bold mb-6">
            Our Services
          </motion.h1>
          <motion.p initial={{
          y: 20,
          opacity: 0
        }} animate={{
          y: 0,
          opacity: 1
        }} transition={{
          delay: 0.2
        }} className="text-xl opacity-90 max-w-3xl mx-auto">
            Comprehensive vehicle management solutions tailored for you
          </motion.p>
        </div>
      </motion.section>
      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => <motion.div key={index} initial={{
            y: 20,
            opacity: 0
          }} whileInView={{
            y: 0,
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} whileHover={{
            y: -5
          }} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <motion.div whileHover={{
              rotate: 360
            }} transition={{
              duration: 0.5
            }} className="bg-blue-100 p-3 rounded-lg w-fit mb-6">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </motion.div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => <li key={i} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                      {feature}
                    </li>)}
                </ul>
              </motion.div>)}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 initial={{
          y: 20,
          opacity: 0
        }} whileInView={{
          y: 0,
          opacity: 1
        }} viewport={{
          once: true
        }} className="text-4xl font-bold mb-6">
            Ready to Get Started?
          </motion.h2>
          <motion.p initial={{
          y: 20,
          opacity: 0
        }} whileInView={{
          y: 0,
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.1
        }} className="text-gray-600 text-lg mb-8">
            Join thousands of satisfied users who have transformed their vehicle
            management experience with BlynQ.
          </motion.p>
          <motion.button initial={{
          y: 20,
          opacity: 0
        }} whileInView={{
          y: 0,
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.2
        }} whileHover={{
          scale: 1.05
        }} className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
            Start Free Trial
          </motion.button>
        </div>
      </section>
    </div>;
};