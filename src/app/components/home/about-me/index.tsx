"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { getDictionary } from "@/lib/dictionary";

const AboutMe = () => {
  const { language } = useLanguage();
  const t = getDictionary(language);

  return (
    <section id="about">
      <div className="container">
        <div className="border-x border-primary/20">
          <div className="flex flex-col gap-9 sm:gap-12 max-w-3xl mx-auto px-4 sm:px-7 py-11 md:py-20">
            <div className="flex flex-col gap-4">
              <p className="text-sm tracking-[2px] text-primary uppercase font-medium">
                {t.about.label}
              </p>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px]">
                {t.about.headlineStart}
                <span className="border-b-2">{t.about.headlineUnderline}</span>
                {t.about.headlineMid}
                <span className="bg-[linear-gradient(90deg,rgba(243,202,77,0.4)_0%,rgba(243,202,77,0.05)_100%)]">
                  {t.about.headlineHighlight}
                </span>
                {t.about.headlineEnd}
              </h2>
              <h5 className="text-secondary font-normal">{t.about.sub}</h5>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm text-primary uppercase font-medium">
                {t.about.coreSkills}
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {t.about.coreSkillsList.map((value: string) => (
                  <span
                    key={value}
                    className="inline-flex rounded-lg border px-3 py-1.5 text-xs font-medium text-primary sm:text-sm"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
