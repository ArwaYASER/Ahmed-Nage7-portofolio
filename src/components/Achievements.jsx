
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Trophy,
  Medal,
  Award,
  ExternalLink,
  X,
} from "lucide-react";

const achievements = [
  {
    number: "01",
    date: "19 AUG 2026",
    title: "8th Place",
    subtitle: "ECPC Qualifications — Day 7",
    description:
      "Secured 8th place in the ECPC 2026 qualification round, advancing to the Egyptian championship.",
    certificate:
      `${import.meta.env.BASE_URL}images/certificates/university-qualification.jpg`,
    Icon: Medal,
  },
  {
    number: "02",
    date: "23 AUG 2026",
    title: "49th Place",
    subtitle: "ECPC 2026",
    description:
      "Achieved 49th place at the Egyptian Collegiate Programming Contest 2026.",
    certificate:
      `${import.meta.env.BASE_URL}images/certificates/acpc-qualification.jpg`,
    Icon: Trophy,
  },
  {
    number: "03",
    date: "UPCOMING",
    title: "ACPC Qualified",
    subtitle: "Arab Collegiate Programming Contest",
    description:
      "Qualified to compete at the Arab Collegiate Programming Contest.",
    certificate: null,
    Icon: Award,
  },
];

export default function Achievements() {
  const [selectedCertificate, setSelectedCertificate] =
    useState(null);

  // Close the certificate lightbox with the Escape key
  useEffect(() => {
    if (!selectedCertificate) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setSelectedCertificate(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedCertificate]);

  return (
    <section
      id="achievements"
      className="bg-[#0B1020] px-6 py-28"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-violet-400">
            Competitive Programming / 02
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Achievements{" "}
            <span className="text-violet-400">
              & Milestones.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
            From national qualifications to the Arab
            Collegiate Programming Contest.
          </p>
        </motion.div>

        {/* Achievement cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {achievements.map((item, index) => (
            <motion.article
              key={item.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-[#111827]"
            >
              <div className="flex flex-1 flex-col p-7">
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10">
                    <item.Icon
                      size={23}
                      className="text-violet-400"
                    />
                  </div>

                  <span className="text-xs font-medium tracking-wider text-slate-500">
                    {item.date}
                  </span>
                </div>

                <h3 className="text-3xl font-bold tracking-tight text-white">
                  {item.title}
                </h3>

                <p className="mt-3 font-medium text-violet-300">
                  {item.subtitle}
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>
              </div>

              {/* Certificate preview */}
              {item.certificate ? (
                <button
                  type="button"
                  onClick={() =>
                    setSelectedCertificate(item.certificate)
                  }
                  className="group relative mx-5 mb-5 overflow-hidden rounded-xl border border-slate-700 bg-white text-left"
                  aria-label={`View certificate for ${item.subtitle}`}
                >
                  <img
                    src={item.certificate}
                    alt={`${item.subtitle} certificate`}
                    loading="lazy"
                    className="h-44 w-full object-contain p-2 transition-transform duration-300 group-hover:scale-[1.03]"
                  />

                  <div className="flex items-center justify-between border-t border-slate-200 bg-slate-50 px-4 py-3">
                    <span className="text-xs font-semibold text-slate-700">
                      View Certificate
                    </span>
                    <ExternalLink
                      size={15}
                      className="text-slate-500"
                    />
                  </div>
                </button>
              ) : (
                <div className="mx-5 mb-5 rounded-xl border border-dashed border-violet-500/30 bg-violet-500/5 px-4 py-5 text-center text-sm text-violet-300">
                  Next Chapter: ACPC
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>

      {/* Certificate lightbox */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedCertificate(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Certificate preview"
        >
          <button
            type="button"
            onClick={() => setSelectedCertificate(null)}
            className="absolute right-5 top-5 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
            aria-label="Close certificate"
          >
            <X size={22} />
          </button>

          <img
            src={selectedCertificate}
            alt="Achievement certificate enlarged"
            className="max-h-[85vh] max-w-full rounded-lg bg-white object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
