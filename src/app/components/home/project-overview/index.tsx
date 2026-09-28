"use client";

import { ArrowUpRight, ChevronDown } from "lucide-react";
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
  secondLabel?: "demo" | "liveDemo" | "report";
  secondUrl?: string;
}

const projects: Project[] = [
  {
    id: "semcube",
    title: "SemCube",
    image: "/images/projects/semcube-bg.png",
    tags: ["Angular", "Node.js", "TypeScript", "MongoDB", "Docker", "LLM/RAG"],
    repo: config.externalLinks.github,
    secondLabel: "liveDemo",
  },
  {
    id: "runsafety",
    title: "RunSafety",
    image: "/images/projects/runsafety-bg.png",
    tags: ["Rust", "Linux", "TUI", "Runtime Security"],
    repo: config.externalLinks.github,
    secondLabel: "demo",
  },
  {
    id: "cti",
    title: "CTI & Malicious URL Detection",
    image: "/images/projects/cti-url-detection-bg.png",
    tags: ["Python", "Random Forest", "Isolation Forest", "Threat Intelligence"],
    repo: config.externalLinks.github,
    secondLabel: "report",
  },
  {
    id: "hdfs",
    title: "HDFS Log Anomaly Detection",
    image: "/images/projects/hdfs-anomaly-bg.png",
    tags: ["Python", "scikit-learn", "Isolation Forest", "Random Forest"],
    repo: "https://github.com/Badie16/SentinelLogs",
    secondLabel: "report",
  },
  {
    id: "modstrike",
    title: "ModStrike",
    image: "/images/projects/modstrike-bg.png",
    tags: ["Python", "Modbus", "SCADA", "ICS/OT"],
    repo: "https://github.com/Badie16/ModStrike",
    secondLabel: "demo",
  },
  {
    id: "ai4cyberseced",
    title: "AI4CybersecEd",
    image: "/images/projects/ai4cyberseced-bg.png",
    tags: ["Python", "LLM", "Linux"],
    repo: config.externalLinks.github,
    secondLabel: "demo",
  },
  {
    id: "auditquest",
    title: "AuditQuest",
    image: "/images/projects/auditquest-bg.png",
    tags: ["Web", "Gamification", "ISO 27002"],
    repo: "https://github.com/Badie16/AuditQuest",
    secondLabel: "demo",
  },
  {
    id: "phytovigil",
    title: "PhytoVigil",
    image: "/images/projects/phytovigil-bg.png",
    tags: ["React Native", "FastAPI", "PostgreSQL", "TensorFlow", "MobileNetV2"],
    repo: "https://github.com/Badie16/PhytoVigil",
    secondLabel: "demo",
  },
];

const ProjectOverview = () => {
  const { language } = useLanguage();
  const t = getDictionary(language);
  const [expanded, setExpanded] = useState(false);

  const visible = expanded ? projects : projects.slice(0, 3);

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

            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <AnimatePresence initial={false}>
                {visible.map((project) => (
                  <motion.article
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 24, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="flex flex-col overflow-hidden rounded-xl border border-primary/20 bg-background hover:shadow-lg transition-shadow"
                  >
                    <div className="relative h-40 w-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                      <Link
                        href={project.secondUrl ?? project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={project.title}
                        className="absolute top-2 right-2 rounded-full bg-black/50 p-1.5 text-white hover:bg-black/70 transition"
                      >
                        <ArrowUpRight size={16} />
                      </Link>
                    </div>
                    <div className="flex flex-1 flex-col p-4">
                      <div className="flex items-start justify-between gap-2">
                        <h5>{project.title}</h5>
                        <Link
                          href={project.secondUrl ?? project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={project.title}
                        >
                          <ArrowUpRight size={16} className="shrink-0 text-secondary" />
                        </Link>
                      </div>
                      <p className="mt-1 text-sm text-secondary">
                        {t.projects.items[project.id]}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-primary/20 px-2.5 py-0.5 text-xs text-secondary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      {project.secondLabel && project.secondUrl && (
                        <div className="mt-4 flex items-center gap-4 text-sm">
                          <Link
                            href={project.secondUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 hover:text-primary transition-colors"
                          >
                            <ArrowUpRight size={16} />
                            {t.projects[project.secondLabel]}
                          </Link>
                        </div>
                      )}
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>

            <div className="mt-8 flex justify-center">
              <button
                onClick={() => setExpanded((v) => !v)}
                className="group inline-flex items-center gap-2 rounded-full border border-primary/20 px-6 py-2.5 text-sm hover:bg-primary/5 transition"
              >
                {expanded ? t.projects.showLess : t.projects.showMore}
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${expanded ? "rotate-180" : "group-hover:translate-y-0.5"}`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
