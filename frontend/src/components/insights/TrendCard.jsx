import { motion } from "framer-motion";

export default function TrendCard({ title, dark }) {
  return (
    <motion.div
      whileHover={{ scale: 1.06 }}
      transition={{ duration: 0.2 }}
      className={`
        rounded-xl px-6 py-5 font-medium text-center cursor-default
        border
        hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]
        transition-all
        ${dark
          ? "bg-[#0F172A] border-blue-500/20 text-slate-200 hover:text-blue-400 hover:border-cyan-400/40"
          : "bg-white border-gray-200 text-slate-700 hover:text-blue-600"}
      `}
    >
      {title}
    </motion.div>
  );
}
