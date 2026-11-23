
import { motion } from "motion/react";
import {
  Code2,
  BrainCircuit,
  Network,
  Puzzle,
  Binary,
  Trophy,
} from "lucide-react";

const skills = [
  {
    name: "C++",
    description: "Programming Language",
    icon: Code2,
  },
  {
    name: "Algorithms",
    description: "Efficient Problem Solving",
    icon: BrainCircuit,
  },
  {
    name: "Data Structures",
    description: "Organizing & Optimizing Data",
    icon: Network,
  },
  {
    name: "Problem Solving",
    description: "Logical & Analytical Thinking",
    icon: Puzzle,
  },
  {
    name: "Dynamic Programming",
    description: "Optimization Techniques",
    icon: Binary,
  },
  {
    name: "Competitive Programming",
    description: "Contests & Challenges",
    icon: Trophy,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#080816] px-6 py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
            What I Work With
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Technical{" "}
            <span className="text-violet-400">Skills.</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-violet-500" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="group rounded-2xl border border-violet-500/20 bg-white/5 p-7 backdrop-blur-lg transition-colors hover:border-violet-400/60 hover:bg-violet-500/10"
              >
                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 transition-colors group-hover:bg-violet-500 group-hover:text-white">
                  <Icon size={28} />
                </div>

                {/* Skill Name */}
                <h3 className="mb-3 text-xl font-bold text-white">
                  {skill.name}
                </h3>

                {/* Description */}
                <p className="leading-7 text-slate-400">
                  {skill.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
