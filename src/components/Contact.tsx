"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { getDictionary } from "@/lib/dictionary";

export default function Contact() {
	const { language } = useLanguage();
	const t = getDictionary(language);

	return (
		<section
			id="contact"
			className="py-20 px-4 md:px-10 bg-black min-h-[80vh] flex flex-col justify-between"
		>
			<div className="max-w-7xl mx-auto w-full">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mb-20"
				>
					<h2 className="text-4xl md:text-6xl font-bold mb-8">
						{t.contact.titleTop} <br />
						{t.contact.titleBottom}
					</h2>

					<Link
						href="mailto:badi3bahida16@gmail.com"
						className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full text-lg font-medium hover:bg-primary/90 transition-colors"
					>
						{t.contact.cta}
						<ArrowUpRight className="w-5 h-5" />
					</Link>
				</motion.div>
			</div>

			<div className="max-w-7xl mx-auto w-full">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="border-t border-white/10 pt-10"
				>
					<div className="flex flex-col md:flex-row justify-between items-end gap-10">
						<div>
							<p className="text-muted-foreground mb-2">{t.contact.tagline}</p>
							<h1 className="text-[12vw] leading-none font-bold tracking-tighter text-white flex overflow-hidden py-4">
								{"BADIE".split("").map((letter, index) => (
									<motion.span
										key={index}
										initial={{ y: 0 }}
										animate={{ y: [0, -20, 0] }}
										transition={{
											duration: 2.5,
											ease: "easeInOut",
											repeat: Infinity,
											repeatDelay: 0,
											delay: index * 0.15,
										}}
										className="inline-block"
									>
										{letter}
									</motion.span>
								))}
							</h1>
						</div>

						<div className="grid gap-3 mb-4 text-sm md:text-base">
							<div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-muted-foreground">
								<span className="text-white font-medium">
									{t.contact.email} :
								</span>{" "}
								badi3bahida16@gmail.com
							</div>
							<div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-muted-foreground">
								<span className="text-white font-medium">
									{t.contact.linkedin} :
								</span>{" "}
								Badie BAHIDA
							</div>
							<div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-muted-foreground">
								<span className="text-white font-medium">
									{t.contact.github} :
								</span>{" "}
								Badie
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
