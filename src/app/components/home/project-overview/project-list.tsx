"use client";

import { ArrowUpRight, Gem } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { getDictionary } from "@/lib/dictionary";
import { config } from "@/lib/config";

export interface Project {
  id: "semcube" | "runsafety" | "hdfs" | "modstrike" | "ai4cyberseced" | "cti" | "auditquest" | "phytovigil";
  title: string;
  period: string;
  image: string;
  tags: string[];
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
    repo: config.externalLinks.github,
  },
  {
    id: "runsafety",
    title: "RunSafety",
    period: "2026",
    image: "/images/projects/runsafety-bg.png",
    tags: ["Rust", "Linux", "TUI", "Runtime Security"],
    repo: config.externalLinks.github,
  },
  {
    id: "cti",
    title: "threadRadar",
    period: "2026",
    image: "/images/projects/cti-url-detection-bg.png",
    tags: ["Python", "Random Forest", "Isolation Forest", "Threat Intelligence"],
    repo: config.externalLinks.github,
  },
  {
    id: "hdfs",
    title: "SentinelLogs",
    period: "2025",
    image: "/images/projects/hdfs-anomaly-bg.png",
    tags: ["Python", "scikit-learn", "Isolation Forest", "Random Forest"],
    repo: "https://github.com/Badie16/SentinelLogs",
  },
  {
    id: "modstrike",
    title: "ModStrike",
    period: "2025",
    image: "/images/projects/modstrike-bg.png",
    tags: ["Python", "Modbus", "SCADA", "ICS/OT"],
    repo: "https://github.com/Badie16/ModStrike",
  },
  {
    id: "ai4cyberseced",
    title: "AI4CybersecEd",
    period: "2025",
    image: "/images/projects/ai4cyberseced-bg.png",
    tags: ["Python", "LLM", "Linux"],
    repo: config.externalLinks.github,
  },
  {
    id: "auditquest",
    title: "AuditQuest",
    period: "2025",
    image: "/images/projects/auditquest-bg.png",
    tags: ["Web", "Gamification", "ISO 27002"],
    repo: "https://github.com/Badie16/AuditQuest",
  },
  {
    id: "phytovigil",
    title: "PhytoVigil",
    period: "2025",
    image: "/images/projects/phytovigil-bg.png",
    tags: ["React Native", "FastAPI", "PostgreSQL", "TensorFlow", "MobileNetV2"],
    repo: "https://github.com/Badie16/PhytoVigil",
  },
];

function ProjectRow({ project }: { project: Project }) {
  const { language } = useLanguage();
  const t = getDictionary(language);
  const [expanded, setExpanded] = useState(false);

  const [first, second, ...rest] = project.tags;
  const detailUrl = project.projectUrl ?? project.repo;

  return (
    <article className="flex flex-col sm:flex-row gap-4 sm:gap-6 rounded-xl border border-primary/20 p-4 sm:p-5">
      <div className="relative h-44 sm:h-auto sm:min-h-44 sm:w-64 shrink-0 overflow-hidden rounded-lg">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, 16rem"
          className="object-cover"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        <h5 className="text-lg">{project.title}</h5>
        <p className="text-sm text-muted-foreground">{project.period}</p>

        <div className="mt-2 text-sm sm:text-base text-secondary">
          {expanded ? (
            <>
              {t.projects.items[project.id]}{" "}
              <button
                onClick={() => setExpanded(false)}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {t.projects.showLess}
              </button>
            </>
          ) : (
            <span className="line-clamp-1">
              {t.projects.items[project.id]}{" "}
              <button
                onClick={() => setExpanded(true)}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                ... {t.projects.more}
              </button>
            </span>
          )}
        </div>

        <div className="mt-2 flex items-start gap-1.5 text-sm sm:text-base">
          <Gem size={16} className="mt-1 shrink-0 text-secondary" />
          <p className="text-secondary">
            {[first, second].filter(Boolean).join(", ")}
            {rest.length > 0 && (
              <>
                {" "}
                {language === "fr" ? "et" : "and"}{" "}
                <span className="group relative inline-block">
                  <button className="font-medium text-primary hover:underline underline-offset-4">
                    +{rest.length} {t.projects.skillsWord}
                  </button>
                  <span className="absolute bottom-full left-1/2 z-20 mb-2 hidden w-56 -translate-x-1/2 rounded-lg border border-primary/20 bg-background p-3 text-xs shadow-xl group-hover:block group-focus-within:block">
                    <span className="mb-1 block font-medium text-primary">
                      +{rest.length} {t.projects.skillsWord}
                    </span>
                    {project.tags.join(", ")}
                  </span>
                </span>
              </>
            )}
          </p>
        </div>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="flex items-center gap-6 pt-3 text-sm font-medium">
                <Link
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-blue-700 dark:text-blue-400 underline underline-offset-4 hover:opacity-80 transition"
                >
                  {t.projects.viewCode}
                  <ArrowUpRight size={15} />
                </Link>
                <Link
                  href={detailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-blue-700 dark:text-blue-400 underline underline-offset-4 hover:opacity-80 transition"
                >
                  {t.projects.viewProject}
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </article>
  );
}

export default function ProjectList({ limit }: { limit?: number }) {
  const list = limit ? projects.slice(0, limit) : projects;
  return (
    <div className="flex flex-col gap-4">
      {list.map((project) => (
        <ProjectRow key={project.id} project={project} />
      ))}
    </div>
  );
}
