
import { motion } from "motion/react";
import { Trophy, Code2, GraduationCap } from "lucide-react";

const highlights = [
  {
    icon: <Code2 size={26} />,
    title: "Competitive Programmer",
    description:
      "Passionate about algorithms, data structures and efficient problem solving.",
  },
  {
    icon: <Trophy size={26} />,
    title: "ACPC Qualifier",
    description:
      "Qualified for ACPC 2026 through the ECPC competition.",
  },
  {
    icon: <GraduationCap size={26} />,
    title: "Problem Solving Coach",
    description:
      "Helping aspiring programmers strengthen their problem solving skills.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#080816] px-6 py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
            Get To Know Me
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            About <span className="text-violet-400">Me.</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-violet-500" />
        </motion.div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <h3 className="mb-6 text-2xl font-bold text-white md:text-3xl">
            Passionate About{" "}
            <span className="text-violet-400">
              Problem Solving.
            </span>
          </h3>

          <p className="mb-5 max-w-4xl text-lg leading-9 text-slate-400">
            I'm Ahmed Nageh Ali, a competitive programmer
            and problem solving coach passionate about
            algorithms, data structures, and solving
            challenging programming problems.
          </p>

          <p className="max-w-4xl text-lg leading-9 text-slate-400">
            My competitive programming journey includes
            qualifying for ECPC and ACPC in 2026.
            I also enjoy helping aspiring programmers
            improve their analytical thinking and
            problem solving abilities.
          </p>
        </motion.div>

        {/* Highlight Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{ y: -8 }}
              className="rounded-2xl border border-violet-500/20 bg-white/5 p-7 transition-colors hover:border-violet-400/50"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                {item.icon}
              </div>

              <h4 className="mb-3 text-xl font-semibold text-white">
                {item.title}
              </h4>

              <p className="leading-7 text-slate-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
