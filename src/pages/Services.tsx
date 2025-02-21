import { motion } from "framer-motion";
import {
  Clock,
  FileText,
  Calendar,
  Shield,
  MessageSquare,
  BoxIcon,
  Car,
  Users,
} from "lucide-react";
import { ServiceCard } from "../components/ServiceCard";
import { MouseLight } from "../components/MouseLight";
export const Services = () => {
  const vehicleServices = [
    {
      icon: Clock,
      title: "Real-time Service Updates",
      description:
        "Track your vehicle's service status in real-time. Get notifications about progress and completion.",
      features: [
        "Live status updates",
        "Service timline",
        "Instant notifications",
      ],
    },
    {
      icon: BoxIcon,
      title: "Maintenance Tracking",
      description:
        "Keep track of all maintenance activities and get timely service reminders.",
      features: ["Service history", "Maintenance schedules", "Cost tracking"],
    },
    {
      icon: Shield,
      title: "Insurance Management",
      description:
        "Manage your vehicle insurance details and get renewal reminders.",
      features: ["Policy tracking", "Renewal alerts", "Claim assistance"],
    },
  ];
  const userServices = [
    {
      icon: FileText,
      title: "Document Management",
      description:
        "Store and manage all your vehicle-related documents in one secure place.",
      features: ["Digital storage", "Easy access", "Document reminders"],
    },
    {
      icon: Calendar,
      title: "Appointment Booking",
      description:
        "Schedule service appointments with your preferred service center hassle-free.",
      features: ["Online booking", "Reminder system", "Flexible scheduling"],
    },
    {
      icon: MessageSquare,
      title: "24/7 Support",
      description:
        "Get assistance whenever you need it through our dedicated support team.",
      features: ["Live chat", "Email support", "Phone support"],
    },
  ];
  return (
    <div className="w-full min-h-screen bg-white relative mt-20">
      <MouseLight />
      <div
        className="relative"
        style={{
          zIndex: 1,
        }}
      >
        <section className="pt-20 pb-24 px-4">
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
            className="mb-32"
          >
            <div className="text-center mb-16 relative">
              <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-24 h-24 bg-blue-50 rounded-full blur-xl opacity-50" />
              <motion.div
                initial={{
                  scale: 0.9,
                  opacity: 0,
                }}
                whileInView={{
                  scale: 1,
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                className="inline-flex items-center justify-center gap-3 bg-white px-6 py-2 rounded-full shadow-md mb-4 relative"
              >
                <Car className="w-5 h-5 text-blue-600" />
                <span className="text-blue-600 font-semibold bg-gradient-to-r from-blue-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
                  User Benefits
                </span>
              </motion.div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4 relative">
                For Vehicle Owners
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {userServices.map((service, index) => (
                <ServiceCard key={index} {...service} index={index} />
              ))}
            </div>
          </motion.div>
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
          >
            <div className="text-center mb-16 relative">
              <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-24 h-24 bg-blue-50 rounded-full blur-xl opacity-50" />
              <motion.div
                initial={{
                  scale: 0.9,
                  opacity: 0,
                }}
                whileInView={{
                  scale: 1,
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                className="inline-flex items-center justify-center gap-3 bg-white px-6 py-2 rounded-full shadow-md mb-4 relative"
              >
                <Users className="w-5 h-5 text-blue-600" />
                <span className="text-blue-600 font-semibold bg-gradient-to-r from-blue-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
                  Service Center Benefits
                </span>
              </motion.div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4 relative">
                For Service Centers
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {vehicleServices.map((service, index) => (
                <ServiceCard key={index} {...service} index={index} />
              ))}
            </div>
          </motion.div>
        </section>

        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto text-center bg-white rounded-3xl p-12 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-50" />
            <div className="relative z-10">
              <motion.h2
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
                className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-blue-600 to-pink-600 bg-clip-text text-transparent"
              >
                Ready to Get Started?
              </motion.h2>
              <motion.p
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
                  delay: 0.1,
                }}
                className="text-gray-600 text-lg mb-8"
              >
                Join thousands of satisfied users who have transformed their
                vehicle management experience with BlynQ.
              </motion.p>
              <motion.button
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
                  delay: 0.2,
                }}
                whileHover={{
                  scale: 1.05,
                }}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};