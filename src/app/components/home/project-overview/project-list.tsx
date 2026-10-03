"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { getDictionary } from "@/lib/dictionary";
import { config } from "@/lib/config";

export type FilterKey =
  | "all"
  | "cybersecurity"
  | "aiml"
  | "devsecops"
  | "webmobile"
  | "systems"
  | "iotics"
  | "tools";

export const filterKeys: FilterKey[] = [
  "all",
  "cybersecurity",
  "aiml",
  "devsecops",
  "webmobile",
  "systems",
  "iotics",
  "tools",
];

export interface Project {
  id: "semcube" | "runsafety" | "hdfs" | "modstrike" | "ai4cyberseced" | "cti" | "auditquest" | "phytovigil" | "c2forge";
  title: string;
  period: string;
  image: string;
  tags: string[];
  categories: Exclude<FilterKey, "all">[];
  repo: string;
  projectUrl?: string;
}

export const projects: Project[] = [
  {
    id: "semcube",
    title: "SemCube",
    period: "2026",
    image: "/images/projects/semcube-bg.png",
    tags: ["Angular", "Node.js", "TypeScript", "MongoDB", "Docker", "LLM/RAG"],
    categories: ["cybersecurity", "devsecops", "aiml", "tools"],
    repo: config.externalLinks.github,
  },
  {
    id: "runsafety",
    title: "RunSafety",
    period: "2026",
    image: "/images/projects/runsafety-bg.png",
    tags: ["Rust", "Linux", "TUI", "Runtime Security"],
    categories: ["cybersecurity", "systems", "tools"],
    repo: config.externalLinks.github,
  },
  {
    id: "cti",
    title: "threadRadar",
    period: "2026",
    image: "/images/projects/cti-url-detection-bg.png",
    tags: ["Python", "Random Forest", "Isolation Forest", "Threat Intelligence"],
    categories: ["aiml", "cybersecurity"],
    repo: config.externalLinks.github,
  },
  {
    id: "hdfs",
    title: "SentinelLogs",
    period: "2025",
    image: "/images/projects/hdfs-anomaly-bg.png",
    tags: ["Python", "scikit-learn", "Isolation Forest", "Random Forest"],
    categories: ["aiml", "cybersecurity"],
    repo: "https://github.com/Badie16/SentinelLogs",
  },
  {
    id: "modstrike",
    title: "ModStrike",
    period: "2025",
    image: "/images/projects/modstrike-bg.png",
    tags: ["Python", "Modbus", "SCADA", "ICS/OT"],
    categories: ["iotics", "cybersecurity"],
    repo: "https://github.com/Badie16/ModStrike",
  },
  {
    id: "ai4cyberseced",
    title: "AI4CybersecEd",
    period: "2025",
    image: "/images/projects/ai4cyberseced-bg.png",
    tags: ["Python", "LLM", "Linux"],
    categories: ["aiml", "cybersecurity"],
    repo: config.externalLinks.github,
  },
  {
    id: "auditquest",
    title: "AuditQuest",
    period: "2025",
    image: "/images/projects/auditquest-bg.png",
    tags: ["Web", "Gamification", "ISO 27002"],
    categories: ["cybersecurity", "webmobile"],
    repo: "https://github.com/Badie16/AuditQuest",
  },
  {
    id: "phytovigil",
    title: "PhytoVigil",
    period: "2025",
    image: "/images/projects/phytovigil-bg.png",
    tags: ["React Native", "FastAPI", "PostgreSQL", "TensorFlow", "MobileNetV2"],
    categories: ["aiml", "webmobile"],
    repo: "https://github.com/Badie16/PhytoVigil",
  },
];

function ProjectRow({ project }: { project: Project }) {
	const { language } = useLanguage();
	const t = getDictionary(language);
	const [expanded, setExpanded] = useState(false);
	const [overflowing, setOverflowing] = useState(false);
	const descRef = useRef<HTMLParagraphElement>(null);

	const [first, second, ...rest] = project.tags;
	const description = t.projects.items[project.id];

	// Détecte si la description dépasse 2 lignes (mesuré seulement quand c'est réduit)
	useEffect(() => {
		const el = descRef.current;
		if (!el) return;

		const check = () => {
			if (!expanded) setOverflowing(el.scrollHeight > el.clientHeight + 1);
		};

		check();
		const ro = new ResizeObserver(check);
		ro.observe(el);
		return () => ro.disconnect();
	}, [description, expanded]);

	return (
		<article className="group/card flex flex-col gap-4 rounded-xl border border-border/70 bg-card/40 p-3 transition-colors duration-300 hover:border-orange-700/40 sm:flex-row sm:gap-5 sm:p-4 dark:hover:border-orange-400/40">
			{/* Image */}
			<div className="relative shrink-0 overflow-hidden rounded-lg ring-1 ring-border/60 sm:w-60">
				<Image
					src={project.image}
					alt={project.title}
					fill
					sizes="(max-width: 640px) 100vw, 15rem"
					className="object-cover transition-transform duration-500 group-hover/card:scale-[1.03] motion-reduce:transition-none"
				/>
			</div>

			{/* Contenu */}
			<div className="flex min-w-0 flex-1 flex-col py-1 sm:pr-1">
				<div className="flex items-baseline justify-between gap-3">
					<h5 className="text-base font-medium tracking-tight sm:text-lg">
						{project.title}
					</h5>
					<span className="shrink-0 text-xs tabular-nums text-muted-foreground">
						{project.period}
					</span>
				</div>

				{/* Description */}
				<p
					ref={descRef}
					className={`mt-2 text-sm leading-relaxed text-secondary ${
						expanded ? "" : "line-clamp-2"
					}`}
				>
					{description}
				</p>

				{/* more / less : seulement si la description est longue */}
				{(overflowing || expanded) && (
					<button
						onClick={() => setExpanded((v) => !v)}
						aria-expanded={expanded}
						className="mt-1 w-fit text-xs text-muted-foreground transition-colors hover:text-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-700/40 dark:hover:text-orange-400"
					>
						{expanded ? t.projects.showLess : `… ${t.projects.more}`}
					</button>
				)}

				{/* Compétences */}
				<div className="mt-3 flex flex-wrap items-center gap-1.5">
	{[first, second].filter(Boolean).map((tag) => (
		<span
			key={tag}
			className="rounded-md border border-border bg-background/60 px-2 py-0.5 text-xs font-medium text-foreground/85"
		>
			{tag}
		</span>
	))}

	{rest.length > 0 && (
		<span className="group relative inline-block">
			<button
				type="button"
				className="rounded-md border border-dashed border-orange-700/50 px-2 py-0.5 text-xs font-medium text-orange-700 transition-colors hover:bg-orange-700/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-700/40 dark:border-orange-400/50 dark:text-orange-400 dark:hover:bg-orange-400/10"
			>
				+{rest.length} {t.projects.skillsWord}
			</button>
			<span
				role="tooltip"
				className="absolute bottom-full left-1/2 z-20 mb-2 hidden w-56 -translate-x-1/2 rounded-lg border border-border bg-background p-3 text-xs font-normal shadow-xl group-hover:block group-focus-within:block"
			>
				{project.tags.join(", ")}
			</span>
		</span>
	)}
</div>
			</div>
		</article>
	);
}

export default function ProjectList({
	limit,
	withFilters,
}: {
	limit?: number;
	withFilters?: boolean;
}) {
	const { language } = useLanguage();
	const t = getDictionary(language);
	const [active, setActive] = useState<FilterKey>("all");

	const filtered =
		active === "all" ? projects : projects.filter((p) => p.categories.includes(active));
	const list = limit ? filtered.slice(0, limit) : filtered;

	return (
		<div className="flex flex-col gap-4">
			{withFilters && (
				<div className="flex flex-wrap gap-2">
					{filterKeys.map((key) => (
						<button
							key={key}
							onClick={() => setActive(key)}
							className={`rounded-full px-4 py-1.5 text-sm transition ${
								active === key
									? "bg-primary text-white"
									: "border border-primary/20 text-secondary hover:bg-primary/5"
							}`}
						>
							{t.projects.filters[key]}
						</button>
					))}
				</div>
			)}
			{list.map((project) => (
				<ProjectRow key={project.id} project={project} />
			))}
		</div>
	);
}  {
    id: "c2forge",
    title: "C2Forge",
    period: "2026",
    image: "/images/projects/modstrike-bg.png",
    tags: ["Go", "Protobuf", "TCP/WS/HTTP", "Prometheus"],
    categories: ["cybersecurity", "systems", "tools"],
    repo: "https://github.com/badie16/C2Forge",
  },

