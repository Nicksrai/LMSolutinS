import { motion } from "framer-motion";

export default function EventCard({ name, type, date, info, dark }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className={`
        rounded-2xl border p-6
        hover:border-cyan-400/40
        hover:shadow-[0_0_24px_rgba(34,211,238,0.12)]
        transition-all
        ${dark
          ? "bg-[#0F172A] border-blue-500/15"
          : "bg-white border-gray-200"}
      `}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">
          {name}
        </h3>

        <span
          className={`text-xs px-3 py-1 rounded-full
          ${dark
            ? "bg-blue-500/10 text-blue-400"
            : "bg-blue-100 text-blue-600"}`}
        >
          {type}
        </span>
      </div>

      <p className={`text-sm ${dark ? "text-slate-400" : "text-slate-600"}`}>
        {info}
      </p>

      <p className={`mt-4 text-xs ${dark ? "text-slate-500" : "text-slate-400"}`}>
        {date}
      </p>
    </motion.div>
  );
}
