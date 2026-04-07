"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { getDictionary } from "@/lib/dictionary";

const education = [
	{
		id: "e1",
		locationId: "l1",
		issuer: "ENSIASD",
		year: "2024 – Présent",
		tone: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
		initials: "EN",
	},
	{
		id: "e2",
		locationId: "l2",
		issuer: "Faculté Polydisciplinaire de Taroudant",
		year: "2022 – 2024",
		tone: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
		initials: "FP",
	},
	{
		id: "e3",
		locationId: "l3",
		issuer: "Lycée Youssef Ibn Tachfin",
		year: "2020 – 2022",
		tone: "bg-violet-500/15 text-violet-300 border-violet-500/30",
		initials: "LY",
	},
];

export default function Certifications() {
	const { language } = useLanguage();
	const t = getDictionary(language);

	return (
		<section id="education" className="py-20 px-4 md:px-10 bg-black">
			<div className="max-w-4xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mb-12"
				>
					<h2 className="text-3xl md:text-5xl font-bold mb-6 flex items-center gap-4">
						<GraduationCap className="w-8 h-8 md:w-12 md:h-12 text-primary" />
						{t.education.title}
					</h2>
					<p className="text-muted-foreground max-w-md">
						{t.education.description}
					</p>
				</motion.div>

				<div className="grid grid-cols-1 gap-6">
					{education.map((item, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, scale: 0.95 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors flex items-center gap-4"
						>
							<div
								className={`w-14 h-14 rounded-2xl border flex items-center justify-center shrink-0 ${item.tone}`}
							>
								<span className="text-sm font-bold tracking-[0.2em]">
									{item.initials}
								</span>
							</div>
							<div>
								<h3 className="text-xl font-semibold mb-1">
									{t.education.items[item.id as keyof typeof t.education.items]}
								</h3>
								<div className="flex flex-col sm:flex-row sm:justify-between gap-1 text-sm text-muted-foreground">
									<span>{item.issuer}</span>
									<span>{item.year}</span>
								</div>
								<p className="text-sm text-muted-foreground mt-1">
									{
										t.education.items[
											item.locationId as keyof typeof t.education.items
										]
									}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
