
import Navbar from "./components/Navbar";
import Typewriter from "./components/Typewriter";
import About from "./components/About";
import Skills from "./components/Skills";
import CodingProfiles from "./components/CodingProfiles";
import Achievements from "./components/Achievements";
import Teaching from "./components/Teaching";
import Contact from "./components/Contact";
import { Download } from "lucide-react";
import { CV_URL, CV_FILENAME } from "./data/contact";

const roles = [
  "Competitive Programmer",
  "Problem Solving Coach",
  "Algorithms Enthusiast",
  "ACPC Qualifier",
];

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <section
          id="home"
          className="relative flex min-h-screen items-center overflow-hidden bg-[#080816] px-6 pt-28"
        >
          {/* Background Glow */}
          <div className="pointer-events-none absolute left-0 top-20 h-80 w-80 rounded-full bg-violet-700/20 blur-[100px]" />

          <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-700/20 blur-[120px]" />

          <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">

            {/* LEFT: Text */}
            <div className="text-center lg:text-left">

              <p className="mb-5 text-lg font-medium text-violet-400">
                Welcome to my Portfolio
              </p>

              <h1 className="min-h-[110px] text-4xl font-bold leading-tight text-white md:text-6xl">
                <Typewriter words={["Ahmed Nageh Ali"]} />
              </h1>

              <div className="mt-5 min-h-[100px] text-xl font-semibold text-violet-400 md:text-3xl">
                <Typewriter words={roles} />
              </div>

              <p className="mt-5 max-w-xl text-base leading-8 text-slate-400">
                Passionate about competitive programming,
                algorithms, data structures, and solving
                challenging problems through efficient solutions.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
                <a
                  href="#problem-solving"
                  className="rounded-xl bg-violet-600 px-7 py-3 font-semibold text-white transition hover:bg-violet-500"
                >
                  Explore My Journey
                </a>

                <a
                  href="https://codeforces.com/profile/_Nageh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-violet-500/40 px-7 py-3 font-semibold text-white transition hover:bg-violet-500/10"
                >
                  Codeforces Profile
                </a>

                <a
                  href={CV_URL}
                  download={CV_FILENAME}
                  className="inline-flex items-center gap-2 rounded-xl border border-violet-500/40 px-7 py-3 font-semibold text-white transition hover:bg-violet-500/10"
                >
                  <Download size={18} />
                  Download CV
                </a>
              </div>
            </div>

            {/* RIGHT: Ahmed's Photo */}
            <div className="relative mx-auto w-full max-w-[420px]">

              {/* Purple Glow */}
              <div className="absolute inset-8 rounded-full bg-violet-600/30 blur-[80px]" />

              {/* Floating Image */}
              <div className="relative animate-floating">
                <img
                  src={`${import.meta.env.BASE_URL}images/profile.webp`}
                  alt="Ahmed Nageh Ali"
                  width="1305"
                  height="1205"
                  decoding="async"
                  className="relative z-10 w-full object-contain drop-shadow-[0_20px_45px_rgba(139,92,246,0.35)]"
                />
              </div>
            </div>

          </div>
                </section>

        <About />
        <Skills />
        <CodingProfiles />
        <Achievements />
        <Teaching />
        <Contact />
      </main>
    </>
  );
}
