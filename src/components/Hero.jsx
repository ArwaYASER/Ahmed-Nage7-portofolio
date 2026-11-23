
import { motion } from "motion/react";
import { ArrowDown, Github, Code2 } from "lucide-react";
import Typewriter from "./Typewriter";
import StarsBackground from "./Navbar";
const roles = [
  "Competitive Programmer",
  "Problem Solving Coach",
  "Algorithms Enthusiast",
  "ACPC Qualifier",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#080816] px-6 pt-28"
    ><StarsBackground />
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-violet-700/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-700/20 blur-[120px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-7"
        >
          <p className="text-lg font-medium text-violet-400">
            Welcome to my Portfolio
          </p>

          <h1 className="text-4xl font-extrabold leading-tight text-white md:text-6xl">
            Hi! I'm
            <br />
            <Typewriter
              words={["Ahmed Nageh Ali"]}
              typingSpeed={110}
              pauseTime={2500}
              className="bg-gradient-to-r from-violet-400 via-purple-300 to-blue-400 bg-clip-text text-transparent"
            />
          </h1>

          <div className="min-h-[80px] text-2xl font-semibold text-white md:text-3xl">
            I'm a{" "}
            <Typewriter
              words={roles}
              typingSpeed={90}
              deletingSpeed={45}
              className="text-violet-400"
            />
          </div>

          <p className="max-w-xl text-base leading-8 text-slate-400 md:text-lg">
            Passionate about competitive programming,
            algorithms, data structures, and solving
            challenging problems through efficient solutions.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#achievements"
              className="rounded-xl bg-violet-600 px-7 py-3 font-semibold text-white transition hover:bg-violet-500"
            >
              Explore My Journey
            </a>

            <a
              href="#profiles"
              className="rounded-xl border border-violet-500/40 px-7 py-3 font-semibold text-white transition hover:bg-violet-500/10"
            >
              Coding Profiles
            </a>
          </div>

          <div className="flex items-center gap-5 pt-4">
            <a
              href="https://codeforces.com/profile/_Nageh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Codeforces"
              className="text-slate-400 transition hover:text-violet-400"
            >
              <Code2 size={25} />
            </a>

            {/* Add GitHub link when available */}
          </div>
        </motion.div>

        {/* Right Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute inset-0 rounded-full bg-violet-600/30 blur-[90px]" />

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <img
              src="/images/profile.jpg"
              alt="Ahmed Nageh Ali"
              className="relative z-10 w-full rounded-3xl object-cover shadow-2xl shadow-violet-900/30"
            />
          </motion.div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-violet-400"
      >
        <ArrowDown size={26} />
      </a>
    </section>
  );
}
