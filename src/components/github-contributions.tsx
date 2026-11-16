"use client";

import { use, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { getDictionary } from "@/lib/dictionary";

export type Activity = {
  date: string;
  count: number;
  level: number;
};

const BLOCK_SIZE = 11;
const STEP = 14;
const LABEL_HEIGHT = 22;
const DAY = 86_400_000;
const parseDate = (date: string) => new Date(`${date}T00:00:00Z`);

export function GitHubContributions({
  contributions,
  githubProfileUrl,
  className = "",
}: {
  contributions: Promise<Activity[]>;
  githubProfileUrl: string;
  className?: string;
}) {
  const { language } = useLanguage();
  const t = getDictionary(language);
  const monthFormat = new Intl.DateTimeFormat(language, { month: "short", timeZone: "UTC" });
  const dateFormat = new Intl.DateTimeFormat(language, {
    month: "short", day: "2-digit", year: "numeric", timeZone: "UTC",
  });
  const data = use(contributions).toSorted((a, b) =>
    a.date.localeCompare(b.date),
  );
  const [tooltip, setTooltip] = useState<{
    label: string;
    x: number;
    y: number;
  } | null>(null);

  if (data.length === 0) return null;

  const start = parseDate(data[0].date);
  const cells = data.map((activity) => {
    const date = parseDate(activity.date);
    const offset = Math.round((date.getTime() - start.getTime()) / DAY);

    return {
      activity,
      date,
      day: date.getUTCDay(),
      label: `${activity.count} contribution${activity.count === 1 ? "" : "s"} ${t.github.on} ${dateFormat.format(date)}`,
      week: Math.floor((offset + start.getUTCDay()) / 7),
    };
  });
  const weekCount = cells.at(-1)!.week + 1;
  const months = cells.reduce<{ month: number; label: string; week: number }[]>(
    (labels, cell) => {
      const month = cell.date.getUTCMonth();

      if (labels.at(-1)?.month !== month) {
        labels.push({
          month,
          label: monthFormat.format(cell.date),
          week: cell.week,
        });
      }

      return labels;
    },
    [],
  );
  const total = data.reduce((sum, activity) => sum + activity.count, 0);

  return (
    <div className={`flex max-w-full flex-col gap-2 ${className}`}>
      <div className="max-w-full overflow-x-auto overflow-y-hidden">
        <svg
          aria-label={t.github.title}
          className="block w-full overflow-visible"
          height={LABEL_HEIGHT + STEP * 7 - 3}
          preserveAspectRatio="xMinYMin meet"
          role="img"
          viewBox={`0 0 ${weekCount * STEP - 3} ${LABEL_HEIGHT + STEP * 7 - 3}`}
        >
          <title>{t.github.title}</title>
          <g className="fill-foreground text-sm">
            {months.map(({ label, week }) => (
              <text
                dominantBaseline="hanging"
                key={`${label}-${week}`}
                x={week * STEP}
              >
                {label}
              </text>
            ))}
          </g>
          {cells.map(({ activity, day, label, week }) => (
            <rect
              aria-label={label}
              className="fill-muted-foreground/10"
              data-level={activity.level}
              height={BLOCK_SIZE}
              key={activity.date}
              onPointerLeave={() => setTooltip(null)}
              onPointerMove={(event) =>
                setTooltip({
                  label,
                  x: Math.min(event.clientX + 12, window.innerWidth - 220),
                  y: event.clientY - 12,
                })
              }
              rx="2"
              width={BLOCK_SIZE}
              x={week * STEP}
              y={LABEL_HEIGHT + day * STEP}
            >
              <title>{label}</title>
            </rect>
          ))}
        </svg>
      </div>
      {tooltip ? (
        <div
          className="pointer-events-none fixed z-50 -translate-y-full whitespace-nowrap rounded-md bg-primary px-3 py-1.5 text-xs text-background shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
          role="tooltip"
          style={{ left: tooltip.x, top: tooltip.y }}
        >
          {tooltip.label}
        </div>
      ) : null}
      <div className="flex flex-wrap gap-1 px-2 whitespace-nowrap sm:gap-x-4">
        <div className="text-muted-foreground">
          {total.toLocaleString(language)} contributions {t.github.inYear} {start.getUTCFullYear()}{" "}
          {t.github.onPlatform}{" "}
          <a
            className="text-foreground underline"
            href={githubProfileUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          .
        </div>
        <div className="ml-auto flex items-center gap-0.75 text-muted-foreground">
          <span className="mr-1">{t.github.less}</span>
          {[0, 1, 2, 3, 4].map((level) => (
            <svg height={BLOCK_SIZE} key={level} width={BLOCK_SIZE}>
              <title>{t.github.level} {level}</title>
              <rect
                className="fill-muted-foreground/10"
                data-level={level}
                height={BLOCK_SIZE}
                rx="2"
                width={BLOCK_SIZE}
              />
            </svg>
          ))}
          <span className="ml-1">{t.github.more}</span>
        </div>
      </div>
    </div>
  );
}

export function GitHubSectionHeading() {
  const { language } = useLanguage();
  return <>{getDictionary(language).github.heading}</>;
}

export function GitHubContributionsFallback() {
  const { language } = useLanguage();
  return (
    <div className="flex h-40 w-full items-center justify-center text-muted-foreground">
      {getDictionary(language).github.loading}
    </div>
  );
}
