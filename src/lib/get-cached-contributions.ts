import { unstable_cache } from "next/cache";

import type { Activity } from "@/components/github-contributions";

type GitHubContributionsResponse = {
  contributions: Activity[];
};

function isActivityList(value: unknown): value is Activity[] {
  return (
    Array.isArray(value) &&
    value.every(
      (item): item is Activity =>
        typeof item === "object" &&
        item !== null &&
        typeof (item as Activity).date === "string" &&
        typeof (item as Activity).count === "number" &&
        typeof (item as Activity).level === "number",
    )
  );
}

export const getCachedContributions = unstable_cache(
  async (username: string) => {
    try {
      const res = await fetch(
        `${process.env.GITHUB_CONTRIBUTIONS_API_URL || `https://github-contributions-api.jogruber.de`}/v4/${username}?y=last`,
        { signal: AbortSignal.timeout(8000) },
      );
      if (!res.ok) return [];
      const data = (await res.json()) as GitHubContributionsResponse;
      if (!isActivityList(data.contributions)) return [];
      return data.contributions;
    } catch {
      return [];
    }
  },
  ["github-contributions"],
  { revalidate: 86400 },
);
