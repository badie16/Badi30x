"use client";

import { ArrowUpRight, Minus, Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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
  const [openId, setOpenId] = useState<Project["id"] | null>("semcube");

  return (
    <section id="projects">
      <div className="container">
        <div className="border-x border-primary/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-7 py-9 md:py-16">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
              <div>
                <p className="text-sm tracking-[2px] text-primary uppercase font-medium">
                  {t.projects.label}
                </p>
                <h2 className="mt-2">{t.projects.heading}</h2>
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

            <div className="border-t border-primary/20">
              {projects.map((project, index) => {
                const open = openId === project.id;
                const detailUrl = project.projectUrl ?? project.repo;
                return (
                  <div key={project.id} className="border-b border-primary/20">
                    <button
                      onClick={() => setOpenId(open ? null : project.id)}
                      aria-expanded={open}
                      className="group flex w-full items-center gap-4 sm:gap-8 px-1 py-5 text-left transition-colors hover:bg-primary/5"
                    >
                      <span className="w-8 shrink-0 text-sm text-muted-foreground tabular-nums">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0 flex-1 sm:flex-none sm:basis-64">
                        <span className="block truncate text-lg font-semibold transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                          {project.title}
                        </span>
                      </span>
                      <span className="hidden flex-1 truncate text-sm text-muted-foreground sm:block">
                        {t.projects.shortLine[project.id]}
                      </span>
                      <span className="ml-auto shrink-0 sm:ml-0">
                        {open ? <Minus size={18} /> : <Plus size={18} />}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-1 pb-8">
                            <div className="relative h-52 sm:h-64 w-full overflow-hidden rounded-lg">
                              <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                              />
                            </div>
                            <div className="flex flex-col">
                              <h4>{t.projects.detailTitle[project.id]}</h4>
                              <p className="mt-2 text-secondary">
                                {t.projects.items[project.id]}
                              </p>
                              <div className="mt-4 flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
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
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
