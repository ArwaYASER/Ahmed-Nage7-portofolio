
import { motion } from "motion/react";

import CodeforcesCard from "./CodeforcesCard";
import PlatformCard from "./PlatformCard";
import { platforms } from "../data/platforms";

export default function CodingProfiles() {
  return (
    <section
      id="problem-solving"
      className="relative bg-[#080B15] px-6 py-28"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-violet-400">
            Competitive Programming / 01
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Coding{" "}
            <span className="text-violet-400">
              Profiles.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
            Explore my competitive programming journey,
            coding platforms, and algorithmic problem
            solving experience.
          </p>
        </motion.div>

        {/* Featured Codeforces Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <CodeforcesCard />
        </motion.div>

        {/* Other Platforms */}
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {platforms.map((platform) => (
            <PlatformCard
              key={platform.name}
              platform={platform}
            />
          ))}
        </div>

      </div>
    </section>
  );
}



// https://cses.fi/user/299691