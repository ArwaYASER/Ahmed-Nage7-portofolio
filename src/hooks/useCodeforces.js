
import { useEffect, useState } from "react";

const HANDLE = "_Nageh";
const COUNT = 1000;

const sleep = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export default function useCodeforces() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchStats() {
      try {
        setLoading(true);
        setError(false);

        const userResponse = await fetch(
          `https://codeforces.com/api/user.info?handles=${HANDLE}`,
          { signal: controller.signal }
        );

        if (!userResponse.ok) {
          throw new Error("Failed to fetch user info");
        }

        const userData = await userResponse.json();

        if (userData.status !== "OK") {
          throw new Error("Invalid user data");
        }

        let from = 1;
        let allSubmissions = [];

        while (true) {
          if (controller.signal.aborted) return;

          const response = await fetch(
            `https://codeforces.com/api/user.status?handle=${HANDLE}&from=${from}&count=${COUNT}`,
            { signal: controller.signal }
          );

          if (!response.ok) {
            throw new Error("Failed to fetch submissions");
          }

          const data = await response.json();

          if (data.status !== "OK") {
            throw new Error("Codeforces API error");
          }

          const submissions = data.result;

          allSubmissions.push(...submissions);

          if (submissions.length < COUNT) break;

          from += COUNT;

          await sleep(2100);
        }

        if (controller.signal.aborted) return;

        const user = userData.result[0];

        const solvedProblems = new Set(
          allSubmissions
            .filter((submission) => submission.verdict === "OK")
            .map((submission) => {
              const problem = submission.problem;

              return `${problem.contestId ?? problem.problemsetName}-${problem.index}`;
            })
        );

        setStats({
          handle: user.handle,
          rating: user.rating ?? null,
          maxRating: user.maxRating ?? null,
          rank: user.rank ?? "Unrated",
          solved: solvedProblems.size,
        });

        setError(false);

      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Codeforces Error:", err);
          setError(true);
        }

      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchStats();

    return () => controller.abort();

  }, []);

  return { stats, loading, error };
}
