"use client";

import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { projectOverview, type CaseStudy } from "@/lib/data";
import { useLanguage } from "@/components/LanguageProvider";
import { getDictionary } from "@/lib/dictionary";

const ProjectOverview = () => {
  const { language } = useLanguage();
  const t = getDictionary(language);
  return (
    <section id="projects">
      <div className="container">
        <div className="border-x border-primary/20">
          <div className="flex flex-col max-w-3xl mx-auto gap-6 px-4 sm:px-7 py-9 md:py-16 ">
            <div className="flex flex-col gap-2">
              <p className="max-w-fit w-full text-sm tracking-[2px] text-primary uppercase font-medium">
                {t.projects.title}
              </p>
              <p className="text-sm text-secondary">{t.projects.description}</p>
            </div>
            <div className="flex flex-col xs:flex-row items-start gap-5 xs:gap-10 md:gap-28 lg:gap-5">
              <div className="flex flex-col gap-2.5">
                {projectOverview.caseStudies.map((value: CaseStudy) => {
                  return (
                    <Link
                      key={value.name}
                      href={value.url}
                      className="group flex items-center gap-2"
                    >
                      <h4>{value.name}</h4>
                      <HugeiconsIcon
                        aria-hidden="true"
                        className="group-hover:translate-x-1.5 group-hover:rotate-45 transition-transform duration-300 ease-[cubic-bezier(0.2,0,0,1)]"
                        icon={ArrowUpRight01Icon}
                        size={24}
                        strokeWidth={2}
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
