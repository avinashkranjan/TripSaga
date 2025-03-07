"use client";

import {
  MapPin,
  Calendar,
  Users,
  Award,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import HeroSection from "@/components/home/hero";

export default function Home() {
  const upcomingTrips = [
    {
      title: "Mystical Rajasthan",
      image:
        "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800",
      price: "₹45,000",
      duration: "7 Days",
      location: "Jaipur, Udaipur, Jodhpur",
    },
    {
      title: "Kerala Backwaters",
      image:
        "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=800",
      price: "₹35,000",
      duration: "5 Days",
      location: "Alleppey, Munnar, Kochi",
    },
    {
      title: "Himalayan Adventure",
      image:
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800",
      price: "₹55,000",
      duration: "8 Days",
      location: "Manali, Leh, Ladakh",
    },
  ];

  const associations = [
    {
      name: "IATA",
      logo: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?q=80&w=200",
    },
    {
      name: "TAAI",
      logo: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?q=80&w=200",
    },
    {
      name: "IATO",
      logo: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?q=80&w=200",
    },
    {
      name: "PATA",
      logo: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?q=80&w=200",
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <>
      {/* <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://w0.peakpx.com/wallpaper/43/30/HD-wallpaper-travel-couple-lifestyle.jpg"
          alt="Travel Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          className="relative z-10 text-center text-white px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Discover Your Next Adventure
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Explore the world with our curated travel experiences
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button
              size="lg"
              className="text-lg px-8 hover:scale-105 transition-transform"
            >
              Start Planning
            </Button>
          </motion.div>
        </motion.div>
      </section> */}
      {/* <section
        className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1802183/pexels-photo-1802183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative text-center max-w-3xl z-10">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl font-bold drop-shadow-lg section-subtitle"
          >
            Explore the World with{" "}
            <span className="text-yellow-400">TripSaga</span>
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mt-4 text-lg text-gray-200"
          >
            Discover breathtaking destinations and embark on unforgettable
            journeys.
          </motion.p>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="mt-2 text-md text-gray-300"
          >
            From stunning beaches to bustling cities, TripSaga helps you plan
            the perfect trip with ease.
          </motion.p>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            className="mt-2 text-md text-gray-300"
          >
            Find the best deals on flights, hotels, and experiences—all in one
            place.
          </motion.p>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="mt-6"
          >
            <Button className="bg-yellow-400 text-black px-6 py-3 text-lg font-semibold shadow-lg hover:bg-yellow-500">
              Start Your Journey
            </Button>
          </motion.div>
        </div>
      </section> */}

      <HeroSection />

      {/* About Us Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Choose Us
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: MapPin,
                title: "Handpicked Destinations",
                desc: "Carefully selected locations for the best experience",
              },
              {
                icon: Calendar,
                title: "Flexible Booking",
                desc: "Easy scheduling and free cancellation options",
              },
              {
                icon: Users,
                title: "Expert Guides",
                desc: "Professional local guides for authentic experiences",
              },
              {
                icon: Award,
                title: "Best Price Guarantee",
                desc: "Competitive prices and value for money",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={fadeInUp}
              >
                <feature.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Upcoming Trips
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {upcomingTrips.map((trip, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <CardContainer className="inter-var overflow-auto">
                  <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                      {trip.title}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                      {trip.location}
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mt-4">
                      <Image
                        src={trip.image}
                        alt={trip.title}
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      />
                    </CardItem>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-primary font-bold">
                        {trip.price}
                      </span>
                      <span className="text-gray-600 dark:text-gray-300">
                        {trip.duration}
                      </span>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <CardItem
                        translateZ={20}
                        as={Link}
                        href="#!"
                        target="__blank"
                        className="py-2 rounded-xl text-xs font-normal dark:text-white"
                      >
                        View Details →
                      </CardItem>
                      <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                      >
                        Book Now
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Associations Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Associations
          </motion.h2>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {associations.map((association, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center"
                variants={fadeInUp}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src={association.logo}
                  alt={association.name}
                  width={100}
                  height={100}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-12 section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Follow Our Journey
          </motion.h2>
          <motion.div
            className="flex justify-center space-x-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { Icon: Facebook, href: "#" },
              { Icon: Instagram, href: "#" },
              { Icon: Twitter, href: "#" },
              { Icon: Youtube, href: "#" },
            ].map(({ Icon, href }, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={href}
                  className="text-gray-600 dark:text-gray-300 hover:text-primary"
                >
                  <Icon className="h-8 w-8" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
