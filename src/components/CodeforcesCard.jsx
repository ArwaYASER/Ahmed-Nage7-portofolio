
import { ArrowUpRight, Activity } from "lucide-react";
import useCodeforces from "../hooks/useCodeforces";

export default function CodeforcesCard() {
  const { stats, loading, error } = useCodeforces();

  const metrics = stats
    ? [
        {
          label: "CURRENT RATING",
          value: stats.rating ?? "Unrated",
        },
        {
          label: "MAX RATING",
          value: stats.maxRating ?? "—",
        },
        {
          label: "PROBLEMS SOLVED",
          value: stats.solved,
        },
      ]
    : [];

  return (
    <article className="rounded-2xl border border-slate-800 bg-[#111827] p-6 md:p-8">

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-5">
        <div className="flex items-center gap-4">
          
<div className="flex h-14 w-14 items-center justify-center rounded-xl border border-slate-700 bg-slate-800/70 p-2.5">
  <img
    src={`${import.meta.env.BASE_URL}logos/codeforces.svg`}
    alt="Codeforces logo"
    className="h-full w-full object-contain"
  />
</div>


          <div>
            <h3 className="text-2xl font-semibold text-white">
              Codeforces
            </h3>
            <p className="mt-1 text-sm text-slate-400">
              @_Nageh
            </p>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-3 py-1.5 text-xs text-slate-400">
          <Activity size={14} />
          {loading
            ? "Fetching data"
            : error || !stats
            ? "Stats unavailable"
            : "Live API data"}
        </div>
      </div>

      <div className="my-7 h-px bg-slate-800" />

      {/* Statistics */}
      {loading ? (
        <div className="grid gap-4 sm:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="h-28 animate-pulse rounded-xl bg-slate-800/60"
            />
          ))}
        </div>
      ) : stats ? (
        <>
          <div className="grid gap-4 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl border border-slate-800 bg-[#192235] p-5"
              >
                <p className="text-xs font-medium tracking-wider text-slate-400">
                  {metric.label}
                </p>

                <p className="mt-4 text-3xl font-semibold tracking-tight text-white">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-5 text-sm text-slate-400">
            Current rank:{" "}
            <span className="font-medium capitalize text-violet-300">
              {stats.rank}
            </span>
          </p>
        </>
      ) : (
        <p className="rounded-xl border border-slate-800 bg-slate-800/30 p-5 text-sm text-slate-400">
          Codeforces statistics are temporarily unavailable.
          You can still visit the official profile.
        </p>
      )}

      {/* Profile Link */}
      <div className="mt-8 flex justify-end">
        <a
          href="https://codeforces.com/profile/_Nageh"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-violet-300 transition-colors hover:text-violet-200"
        >
          View Codeforces Profile
          <ArrowUpRight size={17} />
        </a>
      </div>
    </article>
  );
}
