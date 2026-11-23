
import { motion } from "motion/react";
import {
  Youtube,
  ArrowUpRight,
  BookOpen,
  Code2,
} from "lucide-react";

export default function Teaching() {
  return (
    <section
      id="teaching"
      className="bg-[#080B15] px-6 py-28"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-violet-400">
            Knowledge Sharing / 03
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Teaching{" "}
            <span className="text-violet-400">
              & Content.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
            Sharing problem-solving knowledge and
            helping others explore competitive programming.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl border border-slate-800 bg-[#111827]"
        >
          <div className="grid lg:grid-cols-2">
            <div className="flex flex-col justify-center p-8 md:p-12">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/10">
                <Youtube
                  size={28}
                  className="text-red-400"
                />
              </div>

              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
                YouTube Channel
              </p>

              <h3 className="text-3xl font-bold tracking-tight text-white">
                Learn. Solve. Improve.
              </h3>

              <p className="mt-5 max-w-md text-sm leading-8 text-slate-400">
                Exploring programming problems,
                algorithms, and problem-solving
                techniques through educational videos.
              </p>

              <a
                href="https://www.youtube.com/@A7med__Nageh"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex w-fit items-center gap-3 rounded-xl bg-violet-500 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-violet-400"
              >
                Visit YouTube Channel
                <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="flex min-h-72 flex-col justify-center gap-5 border-t border-slate-800 bg-[#151D30] p-8 md:p-12 lg:border-l lg:border-t-0">
              <div className="flex items-center gap-4 rounded-xl border border-slate-700/70 bg-[#111827] p-5">
                <div className="rounded-lg bg-violet-500/10 p-3">
                  <Code2
                    size={22}
                    className="text-violet-400"
                  />
                </div>

                <div>
                  <h4 className="font-semibold text-white">
                    Problem Solving
                  </h4>
                  <p className="mt-1 text-sm text-slate-400">
                    Coding challenges and solutions
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-slate-700/70 bg-[#111827] p-5">
                <div className="rounded-lg bg-violet-500/10 p-3">
                  <BookOpen
                    size={22}
                    className="text-violet-400"
                  />
                </div>

                <div>
                  <h4 className="font-semibold text-white">
                    Algorithms
                  </h4>
                  <p className="mt-1 text-sm text-slate-400">
                    Concepts and practical explanations
                  </p>
                </div>
              </div>

              <p className="text-center text-xs text-slate-500">
                Explore more content on YouTube
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
