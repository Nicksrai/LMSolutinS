import { motion } from "framer-motion";

export default function BlogCard({ blog, dark }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.25 }}
      className={`
        relative h-full flex flex-col rounded-2xl p-6 overflow-hidden
        border border-blue-500/10
        hover:border-cyan-400/40
        hover:shadow-[0_0_32px_rgba(34,211,238,0.15)]
        transition-all
        ${dark ? "bg-[#0F172A]" : "bg-white"}
      `}
    >
      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none" />

      {/* Image */}
      <div className="overflow-hidden rounded-lg mb-4">
        <img
          src={blog.image}
          alt={blog.title}
          className="h-44 w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-xl font-semibold mb-2">
          {blog.title}
        </h3>

        <p className="text-slate-400 text-sm mb-4">
          {blog.description}
        </p>
      </div>

      {/* Footer */}
      <div className="mt-auto flex items-center justify-between text-sm text-slate-500">
        <span>{blog.category}</span>
        <span>{blog.date}</span>
      </div>
    </motion.div>
  );
}
