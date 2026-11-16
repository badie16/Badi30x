"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
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
  id: "semcube" | "runsafety" | "hdfs" | "modstrike" | "ai4cyberseced" | "cti" | "auditquest" | "phytovigil" | "suppwayy" | "sysmon" | "emotify" | "souqlik" | "c2forge";
  title: string;
  period?: string;
  image?: string;
  tags: string[];
  categories: Exclude<FilterKey, "all">[];
  repo?: string;
  projectUrl?: string;
  status?: "mvp";
}

export const projects: Project[] = [
  {
    id: "semcube",
    title: "SemCube - AI-Powered Application Security",
    period: "2026",
    image: "/images/projects/semcube-bg.png",
    tags: ["Angular", "Node.js", "Express", "TypeScript", "MongoDB", "Semgrep", "Bandit", "Gitleaks", "Trivy", "ZAP", "Groq / Gemini", "ChromaDB", "Socket.IO", "LLM/RAG"],
    categories: ["cybersecurity", "devsecops", "aiml", "tools"],
    repo: config.externalLinks.github,
  },
  {
    id: "runsafety",
    title: "RunSafety - Runtime Security for AI Coding Agents",
    period: "2026",
    image: "/images/projects/runsafety-bg.png",
    tags: ["Rust", "Tokio", "Ratatui", "SQLite", "Linux /proc", "inotify", "cgroups v2"],
    categories: ["cybersecurity", "systems", "tools"],
    repo: config.externalLinks.github,
  },
  {
    id: "cti",
    title: "CTI & AI - Malicious URL Detection",
    period: "2026",
    image: "/images/projects/cti-url-detection-bg.png",
    tags: ["Python", "scikit-learn", "Random Forest", "Isolation Forest", "FastAPI", "React"],
    categories: ["aiml", "cybersecurity"],
    repo: config.externalLinks.github,
  },
  {
    id: "hdfs",
    title: "SentinelLogs - Machine Learning for HDFS Anomaly Detection",
    period: "2025",
    image: "/images/projects/hdfs-anomaly-bg.png",
    tags: ["Python", "Jupyter", "Pandas", "NumPy", "scikit-learn", "Isolation Forest", "One-Class SVM"],
    categories: ["aiml", "cybersecurity"],
    repo: "https://github.com/Badie16/SentinelLogs",
  },
  {
    id: "modstrike",
    title: "ModStrike - Modbus Security Monitoring and Testing",
    period: "2025",
    image: "/images/projects/modstrike-bg.png",
    tags: ["Python", "PyQt6", "pymodbus", "PyQtGraph", "NumPy", "pyserial", "Modbus TCP/RTU"],
    categories: ["iotics", "cybersecurity"],
    repo: "https://github.com/Badie16/ModStrike",
  },
  {
    id: "ai4cyberseced",
    title: "AI4CybersecEd - LLM-Powered Cybersecurity Training",
    period: "2025",
    image: "/images/projects/ai4cyberseced-bg.png",
    tags: ["Python", "LLM", "Linux"],
    categories: ["aiml", "cybersecurity"],
    repo: config.externalLinks.github,
  },
  {
    id: "auditquest",
    title: "AuditQuest - Multiplayer Security Audit Simulator",
    period: "2025",
    image: "/images/projects/auditquest-bg.png",
    tags: ["Phaser 3", "Colyseus", "React", "Redux", "TypeScript", "Material UI", "PeerJS / WebRTC", "ISO 27001/27002"],
    categories: ["cybersecurity", "webmobile"],
    repo: "https://github.com/Badie16/AuditQuest",
  },
  {
    id: "phytovigil",
    title: "PhytoVigil - AI-Powered Plant Disease Detection",
    period: "2025",
    image: "/images/projects/phytovigil-bg.png",
    tags: ["React Native", "Expo", "FastAPI", "PostgreSQL", "TensorFlow", "CNN", "OpenCV", "Gemini", "Next.js", "Tailwind CSS"],
    categories: ["aiml", "webmobile"],
    repo: "https://github.com/Badie16/PhytoVigil",
  },
  {
    id: "suppwayy",
    image: "/images/projects/suppwayy-bg.png",
    title: "SuppWayy - B2B Platform Frontend and Web Security",
    tags: ["JavaScript", "TypeScript", "OWASP"],
    categories: ["webmobile", "cybersecurity"],
  },
  {
    id: "sysmon",
    image: "/images/projects/sysmon-bg.png",
    title: "SysMon-cpp - Linux CLI System Monitor",
    tags: ["C++11", "Linux /proc", "CMake", "Make", "GitHub Actions"],
    categories: ["systems", "tools"],
  },
  {
    id: "emotify",
    image: "/images/projects/emotify-bg.png",
    title: "EmotiFy - AI-Powered Multimodal Emotion Recognition",
    tags: ["Python", "Deep Learning", "React", "Vite", "Tailwind CSS", "Node.js", "Express.js", "Flask", "Google Gemini AI", "PostgreSQL", "Supabase", "Recharts", "FFmpeg"],
    categories: ["aiml", "webmobile"],
  },
  {
    id: "souqlik",
    image: "/images/projects/souqlik-bg.png",
    title: "SouqLik - Local Shopping and Delivery Marketplace",
    tags: ["React Native", "Expo", "React", "Vite", "Node.js", "Express", "TypeScript", "PostgreSQL", "Drizzle ORM", "TanStack Query"],
    categories: ["webmobile"],
    status: "mvp",
  },
  {
    id: "c2forge",
    title: "C2Forge - Secure Agent-Controller Framework",
    period: "2026",
    image: "/images/projects/file_00000000bcb4820a961bc8b515b25c7e.png",
    tags: ["Go", "TLS", "HTTP / WebSockets", "JSON", "Protobuf", "TCP/WS/HTTP", "REST API", "Prometheus", "Docker"],
    categories: ["cybersecurity", "systems", "tools"],
    repo: "https://github.com/badie16/C2Forge",
  },
];

function ProjectRow({ project }: { project: Project }) {
	const { language } = useLanguage();
	const t = getDictionary(language);
	const [expanded, setExpanded] = useState(false);
	const [overflowing, setOverflowing] = useState(false);
	const descRef = useRef<HTMLParagraphElement>(null);
	const descriptionId = useId();

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
				{project.image ? (
					<Image
						src={project.image}
						alt={project.title}
						fill
						sizes="(max-width: 640px) 100vw, 15rem"
						className="object-cover transition-transform duration-500 group-hover/card:scale-[1.03] motion-reduce:transition-none"
					/>
				) : (
					<div className="flex min-h-36 items-center justify-center bg-primary/5 p-6 text-center text-lg font-medium text-primary">
						{project.title}
					</div>
				)}
			</div>

			{/* Contenu */}
			<div className="flex min-w-0 flex-1 flex-col py-1 sm:pr-1">
				<div className="flex items-baseline justify-between gap-3">
					<h5 className="text-base font-medium tracking-tight sm:text-lg">
						{project.title}
					</h5>
					{project.period && (
						<span className="shrink-0 text-xs tabular-nums text-muted-foreground">
							{project.period}
						</span>
					)}
				</div>

				{/* Description */}
				<p
					ref={descRef}
					id={descriptionId}
					className={`mt-2 text-sm leading-relaxed text-secondary ${
						expanded ? "" : "line-clamp-2"
					}`}
				>
					{description}
				</p>

				{/* more / less : seulement si la description est longue */}
				{(overflowing || expanded) && (
					<button
						type="button"
						onClick={() => setExpanded((v) => !v)}
						aria-controls={descriptionId}
						aria-expanded={expanded}
						className="mt-1 w-fit text-xs text-muted-foreground transition-colors hover:text-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-700/40 dark:hover:text-orange-400"
					>
						{expanded ? t.projects.showLess : t.projects.showMore}
					</button>
				)}

				{project.status && (
					<p className="mt-2 text-xs font-medium text-primary">{t.projects.status[project.status]}</p>
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
									? "bg-primary text-background"
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
}
