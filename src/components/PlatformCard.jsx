
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function PlatformCard({ platform }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="group flex h-full flex-col rounded-2xl border border-slate-800 bg-[#111827] p-6 transition-colors duration-300 hover:border-slate-600"
    >
      <div className="mb-7 flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-800/70">
          <span className="text-sm font-bold tracking-wider text-slate-200">
            {platform.initials}
          </span>
        </div>

        <ArrowUpRight
          size={19}
          className="text-slate-500 transition-colors group-hover:text-violet-400"
        />
      </div>

      <h3 className="text-xl font-semibold text-white">
        {platform.name}
      </h3>

      <p className="mt-1 break-all text-sm text-slate-400">
        @{platform.handle}
      </p>

      <p className="mt-4 text-sm text-slate-500">
        {platform.description}
      </p>

      <div className="mt-auto pt-7">
        {platform.url ? (
          <a
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-violet-300 transition-colors hover:text-violet-200"
          >
            View Profile
            <ArrowUpRight size={16} />
          </a>
        ) : (
          <span className="text-sm text-slate-500">
            Profile link unavailable
          </span>
        )}
      </div>
    </motion.article>
  );
}
