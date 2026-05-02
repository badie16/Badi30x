"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { getDictionary } from "@/lib/dictionary";
import { config } from "@/lib/config";

export default function Contact() {
	const { language } = useLanguage();
	const t = getDictionary(language);

	const roles = [
		"Cybersécurité",
		"SOC Analyst",
		"Sécurité Applicative",
		"Freelance",
	];

	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prev) => (prev + 1) % roles.length);
		}, 2000);
		return () => clearInterval(interval);
	}, []);

	const contactLinks = [
		{
			label: t.contact.email,
			value: "badi3bahida16@gmail.com",
			icon: <Mail className="w-4 h-4" />,
			href: "mailto:badi3bahida16@gmail.com",
			external: false,
		},
		{
			label: t.contact.linkedin,
			value: "Badie BAHIDA",
			href: config.externalLinks.linkedin,
			icon: <Linkedin className="w-4 h-4" />,
			external: true,
		},
		{
			label: t.contact.github,
			value: "Badie16",
			href: config.externalLinks.github,
			icon: <Github className="w-4 h-4" />,
			external: true,
		},
	];

	return (
		<section
			id="contact"
			className="relative overflow-hidden py-20 px-4 md:px-10 bg-black min-h-[80vh] flex flex-col justify-between"
		>
			{/* Photo avec masque dégradé */}
			<div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 flex justify-center md:justify-end md:px-10">
				<div className="relative h-80 w-64 md:h-[500px] md:w-[500px] md:scale-110 md:origin-bottom-right">
					<Image
						src="/me.png"
						alt="Badie portrait"
						fill
						priority
						className="object-contain object-bottom contrast-[1.05] brightness-[0.95]"
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent" />
					<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
				</div>
			</div>

			{/* CTA */}
			<div className="max-w-7xl mx-auto w-full">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="relative z-10 "
				>
					<h2 className="text-4xl md:text-6xl font-bold mb-8">
						{t.contact.titleTop} <br />
						{t.contact.titleBottom}
					</h2>

					<Link
						href="mailto:badi3bahida16@gmail.com"
						className="relative overflow-hidden group inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full text-lg font-medium hover:bg-primary/90 transition-colors"
					>
						<span className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
						{t.contact.cta}
						<ArrowUpRight className="w-5 h-5" />
					</Link>
				</motion.div>
			</div>

			{/* Footer bas */}
			<div className="max-w-7xl mx-auto w-full">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="relative z-10 pt-10"
				>
					{/* Ligne dégradée */}
					<div className="h-px w-full mb-10 bg-gradient-to-r from-transparent via-primary to-transparent" />

					<div className="flex flex-col md:flex-row justify-between  gap-10">
						<div>
							{/* Rôle animé */}
							<div className="h-8 overflow-hidden mb-2">
								<AnimatePresence mode="wait">
									<motion.p
										key={index}
										initial={{ y: 20, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										exit={{ y: -20, opacity: 0 }}
										transition={{ duration: 0.5 }}
										className="text-primary font-mono text-lg uppercase tracking-widest"
									>
										{roles[index]}
									</motion.p>
								</AnimatePresence>
							</div>

							{/* Nom animé */}
							<h1 className="text-[12vw] leading-none font-bold tracking-tighter text-white flex overflow-hidden py-4">
								{"BADIE".split("").map((letter, i) => (
									<motion.span
										key={i}
										initial={{ y: 0 }}
										animate={{ y: [0, -20, 0] }}
										transition={{
											duration: 2.5,
											ease: "easeInOut",
											repeat: Infinity,
											delay: i * 0.15,
										}}
										className="inline-block hover:[-webkit-text-stroke:2px_white] hover:text-transparent transition-all duration-300 cursor-default"
									>
										{letter}
									</motion.span>
								))}
							</h1>
						</div>

						{/* Contact cards */}
						<div className="grid gap-3 mb-4 text-sm md:text-base">
							{contactLinks.map((item) =>
								item.href ? (
									<Link
										key={item.label}
										href={item.href}
										target={item.external ? "_blank" : undefined}
										rel={item.external ? "noopener noreferrer" : undefined}
										className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-muted-foreground hover:border-primary/60 hover:bg-primary/10 hover:shadow-[0_0_20px_rgba(255,106,0,0.15)] transition-all duration-300"
									>
										<span className="inline-flex items-center gap-2 text-white font-medium">
											{item.icon}:
										</span>{" "}
										{item.value}
									</Link>
								) : (
									<div
										key={item.label}
										className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-muted-foreground"
									>
										<span className="inline-flex items-center gap-2 text-white font-medium">
											{item.icon} :
										</span>{" "}
										{item.value}
									</div>
								),
							)}
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
