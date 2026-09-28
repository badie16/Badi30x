"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { getDictionary } from "@/lib/dictionary";
import ProjectList from "./project-list";

const ProjectOverview = () => {
  const { language } = useLanguage();
  const t = getDictionary(language);

  return (
    <section id="projects">
      <div className="container">
        <div className="border-x border-primary/20">
          <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">
              {t.projects.label}
            </p>
            <h2 className="mt-2">{t.projects.heading}</h2>
            <p className="mt-2 text-sm text-secondary">{t.projects.description}</p>
          </div>
          <div className="flex flex-col max-w-3xl mx-auto px-4 sm:px-7 pb-9 md:pb-16">
            <ProjectList limit={3} />
            <div className="mt-6 flex justify-center border-t border-primary/20 pt-6">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 text-base font-medium hover:text-primary transition-colors"
              >
                {t.projects.showAllPage}
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
