
import json
import re
from datetime import datetime, timezone
from pathlib import Path

import requests
from bs4 import BeautifulSoup

HANDLE = "_Nageh"
PROFILE_URL = f"https://codeforces.com/profile/{HANDLE}"

response = requests.get(
    PROFILE_URL,
    headers={"User-Agent": "Mozilla/5.0"},
    timeout=30,
)
response.raise_for_status()

soup = BeautifulSoup(response.text, "html.parser")
page_text = soup.get_text(" ", strip=True)

match = re.search(
    r"([\d,]+)\s+problems\s+solved\s+for all time",
    page_text,
    re.IGNORECASE,
)

if not match:
    raise RuntimeError("Could not find solved problems count.")

solved = int(match.group(1).replace(",", ""))

output = {
    "handle": HANDLE,
    "solved": solved,
    "updatedAt": datetime.now(timezone.utc).isoformat(),
}

output_path = Path("public/codeforces-stats.json")
output_path.parent.mkdir(parents=True, exist_ok=True)

output_path.write_text(
    json.dumps(output, indent=2),
    encoding="utf-8",
)

print(f"Updated {HANDLE}: {solved} problems solved.")
