"use client";

import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";
import { getDictionary } from "@/lib/dictionary";

const experiences = [
  { id: "sat", company: "Smart Automation Technologies", period: "Jul 2026 – Sep 2026", logo: "/images/companies/logoSAT.png" },
  { id: "cmrpi", company: "CMRPI", period: "Jul 2026 – Aug 2026", logo: "/images/companies/logoCMRPI.png" },
  { id: "rw", company: "ReeWayy", period: "Jul 2025 – Sep 2025", logo: "/images/companies/reewayy.png" },
  { id: "df", company: "DevForYou", period: "Jul 2025 – Aug 2025", logo: "/images/companies/devforyou.png" },
] as const;

const Experience = () => {
  const { language } = useLanguage();
  const t = getDictionary(language);

  return (
    <section id="experience">
      <div className="container">
        <div className="border-x border-primary/20">
          <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">
              {t.experience.title}
            </p>
            <p className="mt-2 text-sm text-secondary">{t.experience.description}</p>
          </div>
          <div className="border-t border-primary/20">
            <div className="flex flex-col max-w-3xl mx-auto px-4 sm:px-7 py-9 md:py-16 ">
              {experiences.map((value) => {
                const role = t.experience.roles[value.id];
                const location = t.experience.locations[value.id];
                const summary = t.experience.summary[value.id];
                const bullets = t.experience.highlights[value.id];
                return (
                  <div
                    key={value.id}
                    className="flex flex-col gap-5 border-dashed border-b border-primary/20 last:border-b-0 pt-8 sm:pt-10 pb-8 sm:pb-10 first:pt-0 last:pb-0"
                  >
                    <div className="flex flex-col xs:flex-row items-start xs:items-center gap-4">
                      <div className="flex items-center gap-4 flex-1 min-w-0">
                        <div className="flex size-[65px] shrink-0 items-center justify-center overflow-hidden rounded-lg border border-primary/20 bg-white p-1.5">
                          <Image
                            src={value.logo}
                            alt="icon"
                            width={53}
                            height={53}
                            className="h-[53px] w-[53px] object-contain"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="mb-1 break-words">
                            {role}, {value.company}
                          </h5>
                          <p className="text-sm text-muted-foreground break-words">
                            {location} · {summary}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5 border border-primary/20 rounded-lg py-1.5 px-3 shrink-0">
                        <p className="text-sm xs:text-base text-primary whitespace-nowrap">
                          {value.period}
                        </p>
                      </div>
                    </div>
                    <ul>
                      {bullets.map((point: string) => (
                        <li
                          key={point}
                          className="flex items-start gap-2 text-base font-normal text-secondary"
                        >
                          <span className="size-2.5 text-secondary">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
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

export default Experience;
