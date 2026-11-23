
import { useState } from "react";
import { motion } from "motion/react";
import {
  Github,
  Linkedin,
  Youtube,
  Mail,
  ArrowUpRight,
  Download,
  Copy,
  Check,
} from "lucide-react";
import {
  EMAIL,
  EMAIL_SUBJECT,
  CV_URL,
  CV_FILENAME,
} from "../data/contact";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/A7MED-N3GEH",
    Icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ahmed-nageh-572643384",
    Icon: Linkedin,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@A7med__Nageh",
    Icon: Youtube,
  },
];

const subject = encodeURIComponent(EMAIL_SUBJECT);
const to = encodeURIComponent(EMAIL);

// Ways to write an email that work with or without a mail app installed.
const emailLinks = [
  {
    name: "Gmail",
    url: `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}`,
    external: true,
  },
  {
    name: "Outlook",
    url: `https://outlook.live.com/mail/0/deeplink/compose?to=${to}&subject=${subject}`,
    external: true,
  },
  {
    name: "Mail app",
    url: `mailto:${EMAIL}?subject=${subject}`,
    external: false,
  },
];

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fallback for browsers / contexts without the Clipboard API
    try {
      const area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(area);
      return ok;
    } catch {
      return false;
    }
  }
}

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const ok = await copyText(EMAIL);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      <section
        id="contact"
        className="bg-[#0B1020] px-6 py-28"
      >
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-violet-400">
              Get In Touch / 04
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Let's{" "}
              <span className="text-violet-400">
                Connect.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-400">
              Interested in competitive programming,
              software development, or collaboration?
              Feel free to connect with me.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              {socialLinks.map(({ name, url, Icon }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-xl border border-slate-700 bg-[#111827] px-5 py-3.5 text-sm font-medium text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/60 hover:text-white"
                >
                  <Icon size={19} />

                  {name}

                  <ArrowUpRight
                    size={16}
                    className="text-slate-500 transition-colors group-hover:text-violet-400"
                  />
                </a>
              ))}
            </div>

            {/* Email options (work without a mail app) */}
            <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-slate-700 bg-[#111827] p-6">
              <div className="flex items-center justify-center gap-3 text-slate-200">
                <Mail size={19} className="text-violet-400" />
                <span className="break-all text-sm font-medium sm:text-base">
                  {EMAIL}
                </span>
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                {emailLinks.map(({ name, url, external }) => (
                  <a
                    key={name}
                    href={url}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-violet-500/60 hover:text-white"
                  >
                    {name}
                  </a>
                ))}

                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-violet-500/60 hover:text-white"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>

              <p className="sr-only" role="status" aria-live="polite">
                {copied ? "Email address copied to clipboard" : ""}
              </p>
            </div>

            {/* CV */}
            <a
              href={CV_URL}
              download={CV_FILENAME}
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-violet-600 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-violet-500"
            >
              <Download size={18} />
              Download CV
            </a>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-slate-800 bg-[#080B15] px-6 py-7">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Ahmed Nageh.
            All rights reserved.
          </p>

          <p className="text-xs text-slate-500">
            Built with React & Tailwind CSS
          </p>
        </div>
      </footer>
    </>
  );
}
