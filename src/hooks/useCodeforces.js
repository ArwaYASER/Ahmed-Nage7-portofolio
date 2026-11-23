
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
          console.log("Page from:", from);
          console.log("Submissions in this page:", submissions.length);
          console.log(
          "First ID:",
          submissions[0]?.id,
          "Last ID:",
           submissions[submissions.length - 1]?.id
);
          allSubmissions.push(...submissions);

          if (submissions.length < COUNT) break;

          from += COUNT;

          await sleep(2100);
        }
console.log("Final submissions count:", allSubmissions.length);
console.log("First submission ID:", allSubmissions[0]?.id);
console.log("Last submission ID:", allSubmissions.at(-1)?.id);
        if (controller.signal.aborted) return;

        const user = userData.result[0];

       const accepted = allSubmissions.filter(
  (submission) => submission.verdict === "OK"
);

const solvedProblems = new Set(
  accepted.map(({ problem }) => {
    if (problem.contestId != null) {
      return `${problem.contestId}-${problem.index}`;
    }

    if (problem.problemsetName) {
      return `${problem.problemsetName}-${problem.index}`;
    }

    return problem.name;
  })
);

console.log("Total submissions:", allSubmissions.length);
console.log("Accepted submissions:", accepted.length);
console.log("Unique solved problems:", solvedProblems.size);
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
