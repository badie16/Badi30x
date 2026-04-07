"use client";

import { motion } from "framer-motion";
import { FaReact, FaPython, FaDocker } from "react-icons/fa";
import {
	SiNextdotjs,
	SiTailwindcss,
	SiJavascript,
	SiC,
	SiGnubash,
	SiKalilinux,
	SiWireshark,
	SiBurpsuite,
	SiMetasploit,
	SiFastapi,
	SiPostgresql,
} from "react-icons/si";
import {
	Shield,
	Users,
	MessageSquare,
	Brain,
	Zap,
	Database,
	Network,
	FileSearch,
	Bot,
} from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { getDictionary } from "@/lib/dictionary";

const skills = [
	{
		categoryKey: "offensive",
		icon: <Shield className="w-6 h-6" />,
		items: [
			{ name: "XSS / CSRF / SQLi", icon: <Shield /> },
			{ name: "Pentest web", icon: <SiBurpsuite /> },
			{ name: "Nmap", icon: <SiKalilinux /> },
			{ name: "Reverse engineering", icon: <FileSearch /> },
			{ name: "Wireshark", icon: <SiWireshark /> },
			{ name: "Metasploit", icon: <SiMetasploit /> },
		],
		className:
			"md:col-span-2 md:row-span-1 bg-indigo-900/20 border-indigo-500/20",
	},
	{
		categoryKey: "soc",
		icon: <Network className="w-6 h-6" />,
		items: [
			{ name: "Analyse de logs", icon: <Database /> },
			{ name: "Détection d'intrusions", icon: <Shield /> },
			{ name: "TCP/IP", icon: <Network /> },
			{ name: "IDS / IPS", icon: <Shield /> },
			{ name: "SOC", icon: <Database /> },
			{ name: "Docker", icon: <FaDocker /> },
			{ name: "Wireshark", icon: <SiWireshark /> },
		],
		className:
			"md:col-span-2 md:row-span-1 bg-neutral-900/50 border-neutral-800",
	},
	{
		categoryKey: "dev",
		icon: <SiJavascript className="w-6 h-6" />,
		items: [
			{ name: "Python", icon: <FaPython /> },
			{ name: "Bash", icon: <SiGnubash /> },
			{ name: "JavaScript", icon: <SiJavascript /> },
			{ name: "C", icon: <SiC /> },
			{ name: "React", icon: <FaReact /> },
			{ name: "Next.js", icon: <SiNextdotjs /> },
			{ name: "Tailwind CSS", icon: <SiTailwindcss /> },
			{ name: "FastAPI", icon: <SiFastapi /> },
			{ name: "PostgreSQL", icon: <SiPostgresql /> },
		],
		className: "md:col-span-2 bg-neutral-900/50 border-neutral-800",
	},
	{
		categoryKey: "ot",
		icon: <Shield className="w-6 h-6" />,
		items: [
			{ name: "Modbus TCP/RTU", icon: <Network /> },
			{ name: "SCADA", icon: <Shield /> },
			{ name: "PLC", icon: <Shield /> },
			{ name: "ISO 27001 / 27002", icon: <FileSearch /> },
			{ name: "Audit sécurité", icon: <Shield /> },
		],
		className: "md:col-span-1 bg-neutral-900/50 border-neutral-800",
	},
	{
		categoryKey: "ai",
		icon: <Bot className="w-6 h-6" />,
		items: [
			{ name: "Machine Learning", icon: <Brain /> },
			{ name: "Détection d'anomalies", icon: <Zap /> },
			{ name: "Data analysis", icon: <Database /> },
			{ name: "Travail en équipe", icon: <Users /> },
			{ name: "Communication", icon: <MessageSquare /> },
		],
		className: "md:col-span-2 bg-emerald-900/20 border-emerald-500/20",
	},
];

export default function Skills() {
	const { language } = useLanguage();
	const t = getDictionary(language);

	return (
		<section id="skills" className="py-20 px-4 md:px-10 bg-black">
			<div className="max-w-7xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mb-16"
				>
					<h2 className="text-3xl md:text-5xl font-bold mb-6">
						{t.skills.title}
					</h2>
					<p className="text-muted-foreground max-w-md">
						{t.skills.description}
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
					{skills.map((skill, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, scale: 0.95 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className={`p-6 rounded-3xl border flex flex-col justify-between group hover:border-primary/50 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 ${skill.className}`}
						>
							<div className="flex justify-between items-start">
								<div className="p-2 bg-white/5 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
									{skill.icon}
								</div>
							</div>

							<div>
								<h3 className="text-xl font-semibold mb-2">
									{
										t.skills.categories[
											skill.categoryKey as keyof typeof t.skills.categories
										]
									}
								</h3>
								<div className="flex flex-wrap gap-2">
									{skill.items.map((item, idx) => (
										<div key={idx} className="relative group/tooltip">
											<span className="text-sm text-muted-foreground bg-white/5 px-3 py-1.5 rounded-md flex items-center gap-2 hover:bg-white/10 transition-colors cursor-default">
												<span className="text-lg">{item.icon}</span>
												{item.name}
											</span>

											{/* Tooltip */}
											<div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-neutral-800 text-white text-xs rounded-md opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10 z-20">
												{item.name}
												<div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-neutral-800 rotate-45 border-b border-r border-white/10"></div>
											</div>
										</div>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
