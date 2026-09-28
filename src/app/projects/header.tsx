"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { getDictionary } from "@/lib/dictionary";

export default function ProjectsHeader() {
  const { language } = useLanguage();
  const t = getDictionary(language);

  return (
    <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7 pt-22">
      <Link
        href="/#projects"
        className="group mb-6 inline-flex w-fit items-center gap-2 text-sm text-secondary hover:text-primary transition-colors"
      >
        <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
        {language === "fr" ? "Retour" : "Back"}
      </Link>
      <p className="text-sm tracking-[2px] text-primary uppercase font-medium">
        {t.projects.label}
      </p>
      <h2 className="mt-2">{t.projects.heading}</h2>
      <p className="mt-2 text-sm text-secondary">{t.projects.description}</p>
    </div>
  );
}
