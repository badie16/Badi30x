"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { getDictionary } from "@/lib/dictionary";

const experiences = [
	{
		id: "rw",
		company: "ReeWayy",
		period: "Juil. 2025 – Août 2025",
		initials: "RW",
		tone: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
	},
	{
		id: "df",
		company: "DevForYou",
		period: "Juil. 2025",
		initials: "DF",
		tone: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
	},
];

export default function Experience() {
	const { language } = useLanguage();
	const t = getDictionary(language);

	return (
		<section className="py-20 px-4 md:px-10 bg-zinc-950">
			<div className="max-w-4xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mb-16"
				>
					<h2 className="text-3xl md:text-5xl font-bold mb-6 flex items-center gap-4">
						<Briefcase className="w-8 h-8 md:w-12 md:h-12 text-primary" />
						{t.experience.title}
					</h2>
					<p className="text-muted-foreground max-w-md">
						{t.experience.description}
					</p>
				</motion.div>

				<div className="relative">
					{/* Animated Timeline Line */}
					<motion.div
						initial={{ scaleY: 0 }}
						whileInView={{ scaleY: 1 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="absolute left-0 md:left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent origin-top"
					/>

					<div className="space-y-6 md:space-y-8">
						{experiences.map((exp, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.2, duration: 0.5 }}
								className="relative pl-6 md:pl-12 group"
							>
								{/* Animated Dot */}
								<motion.div
									initial={{ scale: 0 }}
									whileInView={{ scale: 1 }}
									viewport={{ once: true }}
									transition={{
										delay: index * 0.2 + 0.3,
										type: "spring",
										stiffness: 200,
									}}
									className="absolute -left-[7px] md:left-[9px] top-6 md:top-8 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50 group-hover:scale-125 transition-transform"
								>
									<div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
								</motion.div>

								{/* Content Card */}
								<motion.div
									whileHover={{ x: 4 }}
									transition={{ duration: 0.2 }}
									className="p-4 md:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all"
								>
									<div className="flex flex-col gap-4">
										<div className="flex items-start gap-3 md:gap-4">
											<div
												className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center shrink-0 border ${exp.tone}`}
											>
												<span className="text-sm md:text-base font-bold tracking-[0.2em]">
													{exp.initials}
												</span>
											</div>
											<div className="flex-1 min-w-0">
												<h3 className="text-lg md:text-2xl font-bold text-white group-hover:text-primary transition-colors leading-tight">
													{
														t.experience.roles[
															exp.id as keyof typeof t.experience.roles
														]
													}
												</h3>
												<p className="text-primary font-medium text-sm md:text-base">
													{exp.company}
												</p>
											</div>
										</div>

										<p className="text-sm md:text-base text-muted-foreground leading-relaxed md:pl-16">
											{
												t.experience.summary[
													exp.id as keyof typeof t.experience.summary
												]
											}
										</p>

										<ul className="space-y-2 text-sm md:text-base text-white/80 md:pl-16">
											{t.experience.highlights[
												exp.id as keyof typeof t.experience.highlights
											].map((highlight) => (
												<li key={highlight} className="flex gap-2">
													<span className="text-primary mt-1">•</span>
													<span>{highlight}</span>
												</li>
											))}
										</ul>

										<div className="flex flex-wrap gap-x-4 gap-y-1 text-muted-foreground text-xs md:text-sm pl-0 md:pl-16">
											<p className="font-medium">{exp.period}</p>
											<p className="text-white/40">•</p>
											<p>
												{
													t.experience.locations[
														exp.id as keyof typeof t.experience.locations
													]
												}
											</p>
										</div>
									</div>
								</motion.div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
