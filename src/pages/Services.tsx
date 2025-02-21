import { motion } from "framer-motion";
import {
  FileText,
  MapPlus,
  CarFront,
  HeartPulse,
  UsersRound,
  FileCheck2,
  MapPinned,
  ChartNoAxesCombined,
  BadgeDollarSign,
  UserRoundCog,
  BellRing,
  Car,
  Users,
  CalendarCheck,
} from "lucide-react";
import { ServiceCard } from "../components/ServiceCard";
import { MouseLight } from "../components/MouseLight";
export const Services = () => {
  const vehicleServices = [
    {
      icon: CalendarCheck,
      title: "Appointment Management",
      description:
        "Efficiently manage customer bookings with ease.",
      features: [
        "Automated scheduling",
        "Real-time updates",
        "Reschedule & cancel options",
      ],
    },
    {
      icon: UsersRound,
      title: "Customer Relationship Management",
      description:
        "Enhance customer experience with seamless communication",
      features: ["Customer profiles & history", "Automated service reminders", "Direct messaging & notifications"],
    },
    {
      icon: FileText,
      title: "Service Record Management",
      description:
        "Keep track of all service histories in one place.",
      features: ["Digital record-keeping", "Quick access to past services", "Secure cloud storage"],
    },
    {
      icon: ChartNoAxesCombined,
      title: "Business Insights & Analytics",
      description:
        "Gain valuable insights to grow your service center.",
      features: ["Performance reports", "Customer trends analysis", "Data-driven decision-making"],
    },
    {
      icon: UserRoundCog,
      title: "Employee Management",
      description:
        "Optimize workflow with efficient staff management.",
      features: ["Assign tasks to technicians", "Track work progress", "Track work progress"],
    },
    {
      icon: BadgeDollarSign,
      title: "Marketing & Promotions",
      description:
        "Boost customer engagement with targeted promotions.",
      features: ["Special offers & discounts", "Loyalty programs", "Automated promotional campaigns"],
    },
  ];
  const userServices = [
    {
      icon: FileCheck2,
      title: " Report Management",
      description:
        "Track vehicle-related expenses and access detailed reports.",
      features: ["Expense tracking dashboard", "Service history insights", "Downloadable reports"],
    },
    {
      icon: MapPinned,
      title: "Real-Time Vehicle Tracking",
      description:
        "Monitor your vehicle’s location and service status with precision.",
      features: ["GPS-based tracking", "Live service updates", "Instant notifications"],
    },
    {
      icon: MapPlus,
      title: "Service Center Discovery",
      description:
        "Find trusted service centers near you with ease.",
      features: ["Location-based search", "Verified service providers", "Customer ratings & reviews"],
    },
    {
      icon: CarFront,
      title: "Multi-Vehicle Management",
      description:
        "Easily manage multiple vehicles from one dashboard.",
      features: ["Add and track multiple vehicles", "Unified service history", "Centralized document storage"],
    },
    {
      icon: BellRing,
      title: "Automated Maintenance Reminders",
      description:
        "Stay on top of maintenance schedules with smart alerts.",
      features: ["Service due notifications", "Customizable reminders", "Scheduled maintenance tracking"],
    },
    {
      icon: HeartPulse,
      title: "Vehicle Health Monitoring",
      description:
        "Stay informed about your vehicle’s condition in real time.",
      features: ["Diagnostic alerts", "Maintenance recommendations", "Performance insights"],
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