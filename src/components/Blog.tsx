"use client";

import { motion } from "framer-motion";
import { Bot, FileSearch, Network, Shield } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

const watchlist = {
	fr: [
		{
			title: "Analyse de logs",
			description:
				"Détection d'anomalies sur des volumes massifs de logs système et réseau pour un usage SOC.",
			icon: <FileSearch className="w-5 h-5" />,
		},
		{
			title: "Sécurité OT/ICS",
			description:
				"Intérêt marqué pour Modbus, SCADA, PLC et les tests d'intrusion industriels.",
			icon: <Network className="w-5 h-5" />,
		},
		{
			title: "Sécurité applicative",
			description:
				"Validation des entrées, protection XSS/CSRF et sécurisation des endpoints API.",
			icon: <Shield className="w-5 h-5" />,
		},
		{
			title: "IA pour la défense",
			description:
				"Approche ML/CNN pour la détection d'anomalies et les tâches de classification.",
			icon: <Bot className="w-5 h-5" />,
		},
	],
	en: [
		{
			title: "Log analysis",
			description:
				"Anomaly detection on large-scale system and network logs for SOC-oriented workflows.",
			icon: <FileSearch className="w-5 h-5" />,
		},
		{
			title: "OT/ICS security",
			description:
				"Strong interest in Modbus, SCADA, PLC environments, and industrial penetration testing.",
			icon: <Network className="w-5 h-5" />,
		},
		{
			title: "Application security",
			description:
				"Input validation, XSS/CSRF protection, and API endpoint hardening.",
			icon: <Shield className="w-5 h-5" />,
		},
		{
			title: "AI for defense",
			description:
				"ML/CNN methods for anomaly detection and classification tasks.",
			icon: <Bot className="w-5 h-5" />,
		},
	],
} as const;

export default function Blog() {
	const { language } = useLanguage();
	const notes = watchlist[language];

	return (
		<section
			id="blog"
			className="py-20 px-4 md:px-10 bg-black border-t border-white/5"
		>
			<div className="max-w-7xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mb-12"
				>
					<h2 className="text-3xl md:text-5xl font-bold mb-4">
						{language === "fr" ? "Veille sécurité" : "Security watchlist"}
					</h2>
					<p className="text-muted-foreground max-w-md">
						{language === "fr"
							? "Les sujets qui structurent ton apprentissage et tes projets techniques."
							: "Topics shaping your learning path and technical portfolio."}
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{notes.map((note, index) => (
						<motion.div
							key={note.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className="rounded-2xl border border-white/10 bg-white/5 p-6"
						>
							<div className="flex items-center gap-3 mb-4 text-primary">
								{note.icon}
								<h3 className="text-xl font-semibold text-white">
									{note.title}
								</h3>
							</div>
							<p className="text-muted-foreground leading-relaxed">
								{note.description}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
