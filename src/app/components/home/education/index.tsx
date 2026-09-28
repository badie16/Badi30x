"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { getDictionary } from "@/lib/dictionary";

const Education = () => {
  const { language } = useLanguage();
  const t = getDictionary(language);

  const items = [
    {
      date: language === "fr" ? "2024 – Présent" : "2024 – Present",
      title: t.education.items.e1,
      subtitle: `${language === "fr" ? "Ecole Nationale Supérieure de l'Intelligence Artificielle et Sciences des Données" : "National School of Artificial Intelligence and Data Sciences"}, ${t.education.items.l1}`,
    },
    {
      date: "2022 – 2024",
      title: t.education.items.e2,
      subtitle: `${language === "fr" ? "Faculté Polydisciplinaire de Taroudant" : "Polydisciplinary Faculty of Taroudant"}, ${t.education.items.l2}`,
    },
    {
      date: "2020 – 2022",
      title: t.education.items.e3,
      subtitle: `${language === "fr" ? "Lycée Youssef Ibn Tachfin" : "Youssef Ibn Tachfin High School"}, ${t.education.items.l3}`,
    },
  ];

  return (
    <section id="education">
      <div className="container">
        <div className="border-x border-primary/20">
          <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">
              {t.education.title}
            </p>
            <p className="mt-2 text-sm text-secondary">{t.education.description}</p>
          </div>

          <div className="border-t border-primary/20">
            <div className="relative max-w-3xl mx-auto px-4 sm:px-0 py-10">
              <div className="hidden sm:flex absolute left-5 sm:left-[15.9rem] sm:translate-x-1/2 top-0 bottom-0 w-px bg-primary/10" />

              <div className="relative">
                {items.map((item, index: number) => (
                  <div
                    key={item.title}
                    className={`relative flex flex-col sm:flex-row sm:items-start gap-4 ${
                      index !== items.length - 1 ? "mb-8 sm:mb-16" : ""
                    }`}
                  >
                    <div className="relative pl-8 sm:pl-0 sm:w-64 sm:text-right sm:pr-16">
                      <p className="ml-2.5 sm:ml-0 text-base font-normal sm:mb-0 leading-relaxed">
                        {item.date}
                      </p>
                      <div className="absolute left-1.5 sm:left-auto sm:-right-3 top-0 z-10 p-1.5 border border-primary/20 rounded-full bg-background">
                        <div className="size-3 bg-primary rounded-full" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 flex-1 sm:pl-16 ml-2 sm:ml-0">
                      <h5 className="font-semibold">{item.title}</h5>
                      <p className="text-primary">{item.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
