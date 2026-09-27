"use client";

import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { getDictionary } from "@/lib/dictionary";
import { config } from "@/lib/config";

export default function Contact() {
	const { language } = useLanguage();
	const t = getDictionary(language);

	const links = [
		{
			label: t.contact.email,
			value: "badie.bahida.it@gmail.com",
			href: "mailto:badie.bahida.it@gmail.com",
			icon: <Mail size={18} />,
		},
		{
			label: t.contact.linkedin,
			value: "Badie BAHIDA",
			href: config.externalLinks.linkedin,
			icon: <Linkedin size={18} />,
		},
		{
			label: t.contact.github,
			value: "Badie16",
			href: config.externalLinks.github,
			icon: <Github size={18} />,
		},
	];

	return (
		<section id="contact">
			<div className="container">
				<div className="border-x border-primary/20">
					<div className="flex flex-col max-w-3xl mx-auto gap-8 px-4 sm:px-7 py-9 md:py-16">
						<div className="flex flex-col gap-4">
							<p className="text-sm tracking-[2px] text-primary uppercase font-medium">
								Contact
							</p>
							<h2 className="text-2xl sm:text-3xl">
								{t.contact.titleTop} {t.contact.titleBottom}
							</h2>
							<p className="text-secondary">{t.contact.tagline}</p>
							<Link
								href="mailto:badie.bahida.it@gmail.com"
								className="group inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 px-5 py-2.5 text-sm hover:bg-primary/5 transition"
							>
								{t.contact.cta}
								<ArrowUpRight
									size={16}
									className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
								/>
							</Link>
						</div>
						<div className="flex flex-col gap-3">
							{links.map((item) => (
								<Link
									key={item.label}
									href={item.href}
									target={item.href.startsWith("http") ? "_blank" : undefined}
									className="flex items-center gap-3 rounded-xl border border-primary/20 px-4 py-3 hover:bg-primary/5 transition"
								>
									{item.icon}
									<span className="text-sm">
										<span className="font-medium text-primary">{item.label}:</span>{" "}
										<span className="text-secondary">{item.value}</span>
									</span>
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
