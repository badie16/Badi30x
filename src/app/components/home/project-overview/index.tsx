"use client";

import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { getDictionary } from "@/lib/dictionary";
import { config } from "@/lib/config";

interface Project {
  id: "semcube" | "runsafety" | "hdfs" | "modstrike" | "ai4cyberseced" | "cti" | "auditquest" | "phytovigil";
  title: string;
  image: string;
  tags: string[];
  repo: string;
  projectUrl?: string;
}

const projects: Project[] = [
  {
    id: "semcube",
    title: "SemCube",
    image: "/images/projects/semcube-bg.png",
    tags: ["Angular", "Node.js", "TypeScript", "MongoDB", "Docker", "LLM/RAG"],
    repo: config.externalLinks.github,
  },
  {
    id: "runsafety",
    title: "RunSafety",
    image: "/images/projects/runsafety-bg.png",
    tags: ["Rust", "Linux", "TUI", "Runtime Security"],
    repo: config.externalLinks.github,
  },
  {
    id: "cti",
    title: "CTI & Malicious URL Detection",
    image: "/images/projects/cti-url-detection-bg.png",
    tags: ["Python", "Random Forest", "Isolation Forest", "Threat Intelligence"],
    repo: config.externalLinks.github,
  },
  {
    id: "hdfs",
    title: "HDFS Log Anomaly Detection",
    image: "/images/projects/hdfs-anomaly-bg.png",
    tags: ["Python", "scikit-learn", "Isolation Forest", "Random Forest"],
    repo: "https://github.com/Badie16/SentinelLogs",
  },
  {
    id: "modstrike",
    title: "ModStrike",
    image: "/images/projects/modstrike-bg.png",
    tags: ["Python", "Modbus", "SCADA", "ICS/OT"],
    repo: "https://github.com/Badie16/ModStrike",
  },
  {
    id: "ai4cyberseced",
    title: "AI4CybersecEd",
    image: "/images/projects/ai4cyberseced-bg.png",
    tags: ["Python", "LLM", "Linux"],
    repo: config.externalLinks.github,
  },
  {
    id: "auditquest",
    title: "AuditQuest",
    image: "/images/projects/auditquest-bg.png",
    tags: ["Web", "Gamification", "ISO 27002"],
    repo: "https://github.com/Badie16/AuditQuest",
  },
  {
    id: "phytovigil",
    title: "PhytoVigil",
    image: "/images/projects/phytovigil-bg.png",
    tags: ["React Native", "FastAPI", "PostgreSQL", "TensorFlow", "MobileNetV2"],
    repo: "https://github.com/Badie16/PhytoVigil",
  },
];

const ProjectOverview = () => {
  const { language } = useLanguage();
  const t = getDictionary(language);
  const [selectedId, setSelectedId] = useState<Project["id"] | null>(null);
  const boxRef = useRef<HTMLElement>(null);

  const selected = projects.find((p) => p.id === selectedId) ?? null;

  useEffect(() => {
    if (!selected) return;

    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as HTMLElement;
      if (boxRef.current?.contains(target)) return;
      if (target.closest("[data-project-row]")) return;
      setSelectedId(null);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedId(null);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [selected]);

  return (
    <section id="projects">
      <div className="container">
        <div className="border-x border-primary/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-7 py-9 md:py-16">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8">
              <div>
                <p className="text-sm tracking-[2px] text-primary uppercase font-medium">
                  {t.projects.label}
                </p>
                <p className="mt-2 max-w-xl text-secondary">{t.projects.description}</p>
              </div>
              <Link
                href={config.externalLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-primary/20 px-4 py-2 text-sm hover:bg-primary/5 transition"
              >
                {t.projects.viewAll}
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="relative">
              <div>
                {projects.map((project) => {
                  const active = project.id === selectedId;
                  return (
                    <button
                      key={project.id}
                      data-project-row
                      onClick={() => setSelectedId(active ? null : project.id)}
                      aria-expanded={active}
                      className={`group flex w-full items-center gap-2 py-3 text-left transition-colors ${
                        active ? "text-blue-700 dark:text-blue-400" : "hover:text-blue-700 dark:hover:text-blue-400"
                      }`}
                    >
                      <span className="text-lg sm:text-xl font-medium">
                        {project.title}
                      </span>
                      <span className="text-lg sm:text-xl font-light text-muted-foreground">
                        – {t.projects.listCategory[project.id]}
                      </span>
                      <ArrowUpRight
                        size={20}
                        className={`ml-1 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                          active ? "" : "text-muted-foreground"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              <AnimatePresence>
                {selected && (
                  <motion.article
                    ref={boxRef}
                    key={selected.id}
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute z-20 inset-x-0 top-2 sm:left-auto sm:right-0 sm:w-[26rem] lg:w-[30rem] overflow-hidden rounded-xl border border-primary/20 bg-background shadow-2xl"
                  >
                    <div className="relative h-48 sm:h-56 w-full">
                      <Image
                        src={selected.image}
                        alt={selected.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 30rem"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <h4>{selected.title}</h4>
                      <p className="mt-2 text-secondary">{t.projects.items[selected.id]}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {selected.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-lg border border-primary/20 px-3 py-1 text-xs sm:text-sm text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="mt-5 flex items-center gap-6 text-sm font-medium">
                        <Link
                          href={selected.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-blue-700 dark:text-blue-400 underline underline-offset-4 hover:opacity-80 transition"
                        >
                          {t.projects.viewCode}
                          <ArrowUpRight size={15} />
                        </Link>
                        <Link
                          href={selected.projectUrl ?? selected.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-blue-700 dark:text-blue-400 underline underline-offset-4 hover:opacity-80 transition"
                        >
                          {t.projects.viewProject}
                          <ArrowUpRight size={15} />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
