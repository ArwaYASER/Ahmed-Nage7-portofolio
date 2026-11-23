
import { useEffect, useState } from "react";

const HANDLE = "_Nageh";

export default function useCodeforces() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchStats() {
      try {
        setLoading(true);

        const [userResponse, submissionsResponse] =
          await Promise.all([
            fetch(
              `https://codeforces.com/api/user.info?handles=${HANDLE}`,
              { signal: controller.signal }
            ),
            fetch(
              `https://codeforces.com/api/user.status?handle=${HANDLE}`,
              { signal: controller.signal }
            ),
          ]);

        if (!userResponse.ok || !submissionsResponse.ok) {
          throw new Error("Failed to fetch Codeforces data");
        }

        const userData = await userResponse.json();
        const submissionsData = await submissionsResponse.json();

        if (
          userData.status !== "OK" ||
          submissionsData.status !== "OK"
        ) {
          throw new Error("Invalid Codeforces response");
        }

        const user = userData.result[0];

        const solvedProblems = new Set(
          submissionsData.result
            .filter((submission) => submission.verdict === "OK")
            .map(
              (submission) =>
                `${submission.problem.contestId ?? "unknown"}-${submission.problem.index}-${submission.problem.name}`
            )
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
          console.error(err);
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
