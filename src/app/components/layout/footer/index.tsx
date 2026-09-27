"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { getDictionary } from "@/lib/dictionary";
import { config } from "@/lib/config";

const Footer = () => {
  const { language } = useLanguage();
  const t = getDictionary(language);

  return (
    <footer className="-translate-y-[1px] bg-background border-t border-primary/20">
      <div className="container">
        <div className="border-x border-primary/20">
          <div className="max-w-3xl mx-auto gap-10 sm:gap-16 px-4 sm:px-7 py-4 md:py-7">
            <p>2026 © Badie BAHIDA · All rights reserved</p>
            <p>
              {t.hero.subtitle} ·{" "}
              <Link href={config.externalLinks.github} className="hover:text-primary">
                @Badie16
              </Link>{" "}
              ·{" "}
              <Link href="mailto:badie.bahida.it@gmail.com" className="hover:text-primary">
                badie.bahida.it@gmail.com
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
