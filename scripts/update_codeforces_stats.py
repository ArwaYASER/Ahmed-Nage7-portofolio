import json
import time
import requests
from datetime import datetime, timezone
from pathlib import Path

HANDLE = "_Nageh"
API_URL = "https://codeforces.com/api/user.status"

solved = set()
start = 1

while True:
    response = requests.get(
        API_URL,
        params={"handle": HANDLE, "from": start, "count": 1000},
        timeout=30,
    )
    response.raise_for_status()

    data = response.json()

    if data["status"] != "OK":
        raise RuntimeError(data.get("comment", "Codeforces API error"))

    submissions = data["result"]

    if not submissions:
        break

    for sub in submissions:
        if sub.get("verdict") == "OK":
            problem = sub["problem"]
            key = (
                problem.get("problemsetName"),
                problem.get("contestId"),
                problem.get("index"),
            )
            solved.add(key)

    start += len(submissions)

    if len(submissions) < 1000:
        break

    time.sleep(2.5)

output = {
    "handle": HANDLE,
    "solved": len(solved),
    "updatedAt": datetime.now(timezone.utc).isoformat(),
}

path = Path("public/codeforces-stats.json")
path.parent.mkdir(parents=True, exist_ok=True)
path.write_text(json.dumps(output, indent=2), encoding="utf-8")

print(f"Updated {HANDLE}: {len(solved)} problems solved.")
