import { motion } from "framer-motion";
import BlogCard from "../components/insights/BlogCard";
import EventCard from "../components/insights/EventCard";
import TrendCard from "../components/insights/TrendCard";

/* ================= DATA ================= */

const blogs = [
  {
    slug: "clean-architecture-modern-web",
    title: "Clean Architecture in Modern Web Apps",
    description: "How we design scalable frontend and backend systems.",
    category: "Engineering",
    date: "Aug 2025",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
  },
  {
    slug: "choosing-right-backend-startups",
    title: "Choosing the Right Backend for Startups",
    description: "FastAPI vs Node.js vs Django.",
    category: "Backend",
    date: "Jul 2025",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    slug: "building-platform-fastapi-react",
    title: "Building a Scalable Platform with FastAPI & React",
    description:
      "Architecture, tech choices, and lessons learned while designing a modern platform.",
    category: "Full Stack",
    date: "Sep 2025",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
  },
];

const events = [
  {
    name: "Cloud & DevOps Fundamentals",
    type: "Webinar",
    date: "Sep 2025",
    info: "Intro to cloud & CI/CD pipelines.",
  },
  {
    name: "Building Scalable APIs with FastAPI",
    type: "Webinar",
    date: "Oct 2025",
    info: "Designing high-performance APIs with modern Python best practices.",
  },
];

const trends = ["React", "FastAPI", "AWS", "DevOps", "AI", "Docker"];

/* ================= ANIMATIONS ================= */

/* Parent grid controls stagger */
const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

/* Individual card animation */
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

/* ================= PAGE ================= */

export default function InsightsPage() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="bg-[#0B1020] text-white"
    >

      {/* ================= HERO ================= */}
      <section className="pt-32 pb-24 text-center bg-gradient-to-b from-[#0B1020] to-[#0F172A]">
        <motion.h1
          variants={cardVariants}
          className="text-5xl md:text-6xl font-bold"
        >
          Insights &{" "}
          <span className="text-blue-500">Knowledge</span>
        </motion.h1>

        <motion.p
          variants={cardVariants}
          className="mt-6 text-slate-400 max-w-3xl mx-auto text-lg"
        >
          Blogs, events, and technology trends from our engineering team.
        </motion.p>
      </section>

      {/* ================= BLOGS ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <motion.h2
            variants={cardVariants}
            className="text-3xl font-semibold mb-10"
          >
            Blogs
          </motion.h2>

          <motion.div
            variants={gridVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {blogs.map((blog) => (
              <motion.div
                key={blog.slug}
                variants={cardVariants}
              >
                <BlogCard blog={blog} dark />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ================= EVENTS ================= */}
      <section className="py-20 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-6">

          <motion.h2
            variants={cardVariants}
            className="text-3xl font-semibold mb-10"
          >
            Events
          </motion.h2>

          <motion.div
            variants={gridVariants}
            className="grid md:grid-cols-2 gap-8"
          >
            {events.map((event) => (
              <motion.div
                key={event.name}
                variants={cardVariants}
              >
                <EventCard {...event} dark />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ================= TRENDS ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <motion.h2
            variants={cardVariants}
            className="text-3xl font-semibold mb-10"
          >
            Technology Trends
          </motion.h2>

          <motion.div
            variants={gridVariants}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {trends.map((trend) => (
              <motion.div
                key={trend}
                variants={cardVariants}
              >
                <TrendCard title={trend} dark />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

    </motion.div>
  );
}
